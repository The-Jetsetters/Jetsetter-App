<template>
  <div class="triplist">
    <div class="container">
      <div v-for="(trip, index) in tripdata" class="button">
        <b-btn @click="showCollapse[index] = !showCollapse[index]" variant="primary">{{ trip.destination }}</b-btn>
        <b-collapse v-model="showCollapse[index]" class="mt-2">
          <b-card>
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
  </div>
</template>

<script>
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
      tripdata: {},
      showCollapse: {},
      showFlightCollapse: {},
      showLodgingCollapse: {},
      showRentalCollapse: {},
      showNotesCollapse: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
button.btn.btn-primary {
  margin: 1vh;
}
</style>
