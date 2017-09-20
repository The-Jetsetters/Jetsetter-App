<template>
  <div class="hello">
    <div class="container">
      <div v-for="(trip, index) in tripdata">
        <b-btn v-b-toggle.collapse1 variant="primary">{{ trip.destination }}</b-btn>
        <b-collapse id="collapse1" class="mt-2">
          <b-card>
            <p class="card-text">{{ trip.startdate }}<br>
                                  {{ trip.enddate }}</p>
            <b-btn v-b-toggle.collapse1_inner size="sm">Flight Info</b-btn>
            <b-collapse id=collapse1_inner class="mt-2">
              <b-card>{{ trip.airline }}<br>
                      {{ trip.flightnumber }}<br>
                      {{ trip.departuretime }}</b-card>
            </b-collapse>
            <b-btn v-b-toggle.collapse2_inner size="sm">Lodging Info</b-btn>
            <b-collapse id=collapse2_inner class="mt-2">
              <b-card>
              </b-card>
            </b-collapse>
            <b-btn v-b-toggle.collapse3_inner size="sm">Car Rental</b-btn>
            <b-collapse id=collapse3_inner class="mt-2">
              <b-card>
              </b-card>
            </b-collapse>
            <b-btn v-b-toggle.collapse4_inner size="sm">Notes</b-btn>
            <b-collapse id=collapse4_inner class="mt-2">
              <b-card>
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
  async mounted () {
    const tripdata = await fetch(`${tripURL}`)
    const response = await tripdata.json()
    this.tripdata = response.map(tripdata => {
      console.log(tripdata.destination)
      return tripdata
    })
  },
  data () {
    return {
      tripdata: {}
    }
  }
  // components: {
  //   bBtn,
  //   bCollapse,
  //   bCard
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #35495E;
}
</style>
