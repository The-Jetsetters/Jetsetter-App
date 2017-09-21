<template>
  <div class="triplist">
    <div class="container">
      <div v-for="(trip, index) in tripdata" class="button">
        <b-btn @click="showCollapse[index] = !showCollapse[index]" variant="primary">{{ trip.destination }}</b-btn>
        <b-collapse v-model="showCollapse[index]" class="mt-2">
          <b-card>
            <div class="editDeleteGroup">
              <b-btn size="sm" variant="warning">Edit Trip</b-btn>
              <b-btn size="sm" variant="danger" @click="deletetrip(trip)">Delete Trip</b-btn>
            </div>
            <p class="card-text">{{ trip.startdate }}<br>
                                  {{ trip.enddate }}</p>
            <b-btn @click="showFlightCollapse[index] = !showFlightCollapse[index]" size="sm">Flight Info</b-btn>
            <b-collapse v-model="showFlightCollapse[index]" class="mt-2">
              <b-card>{{ trip.airline }}<br>
                      {{ trip.flightnumber }}<br>
                      {{ trip.departuretime }}</b-card>
            </b-collapse>
            <b-btn @click="showLodgingCollapse[index] = !showLodgingCollapse[index]" size="sm">Lodging Info</b-btn>
            <b-collapse v-model="showLodgingCollapse[index]" class="mt-2">
              <b-card> {{ trip.lodgingname }}<br>
                        {{ trip.lodgingconf }}
              </b-card>
            </b-collapse>
            <b-btn @click="showRentalCollapse[index] = !showRentalCollapse[index]" size="sm">Car Rental</b-btn>
            <b-collapse v-model="showRentalCollapse[index]" class="mt-2">
              <b-card> {{ trip.rentalname }}<br>
                        {{ trip. rentalconf }}
              </b-card>
            </b-collapse>
            <b-btn @click="showNotesCollapse[index] = !showNotesCollapse[index]" size="sm">Notes</b-btn>
            <b-collapse v-model="showNotesCollapse[index]" class="mt-2">
              <b-card> {{ trip.tripnote}}
              </b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
      </div>
    </div>
    <Icon></Icon>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import Icon from './Icon'
// import { bBtn, bCollapse, bCard } from 'bootstrap-vue/lib/components'
const tripURL = 'https://stark-harbor-90587.herokuapp.com/trips'
export default {
  name: 'triplist',
  props: ['tripdata'],
  async mounted () {
    const tripdata = await fetch(`${tripURL}`)
    const response = await tripdata.json()
    this.tripdata = response.map(tripdata => {
      console.log(tripdata)
      return tripdata
    })
  },
  data () {
    return {
      tripdata: [],
      showCollapse: {},
      showFlightCollapse: {},
      showLodgingCollapse: {},
      showRentalCollapse: {},
      showNotesCollapse: {}
    }
  },
  methods: {
    deletetrip (trip) {
      const tripselected = trip.id
      this.tripdata = this.tripdata.filter(trip => {
        if (tripselected === trip.id) {
          return false
        } else {
          return true
        }
      })
      const data = {
        'id': trip.id,
        'command': 'delete'
      }
      const settings = {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(`${tripURL}/${trip.id}`, settings)
       .then(response => {
         if (response.ok) {
           console.log(response)
         }
       })
    },
    components: {
      Icon
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
button.btn.btn-primary {
  margin: 1vh;
}

button.btn.btn-warning.btn-sm {
  margin-right: 10vw;
}

button.btn.btn-danger.btn-sm {
  margin-left: 10vw;
}

.card-text {
  margin-top: 3vh;
}
</style>
