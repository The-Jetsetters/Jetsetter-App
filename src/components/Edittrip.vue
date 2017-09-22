<template>
  <div class="container">
    <div v-for="(trip, index) in tripdata">
      <b-form @submit="tripdata">
        <b-form-group id="destinationGroup"
                      label="" label-for="destination">
          <b-form-input id="destination"
                        type="text" v-model="trip.destination" required

          >{{ trip.destination }}</b-form-input>
        </b-form-group>
        <b-form-group id="startdateGroup"
                      label="" label-for="startdate">
          <b-form-input id="startdate"
                        type="text" v-model="trip.startdate" required

          ></b-form-input>
        </b-form-group>
        <b-form-group id="enddateGroup"
                      label="" label-for="enddate">
          <b-form-input id="enddate"
                        type="text" v-model="trip.enddate" required

          ></b-form-input>
        </b-form-group>
        <b-form-group id="airlineGroup"
                      label="Select an Airline:" label-for="airlineName">
          <b-form-select id="airlineName"
                        v-model="trip.airline"

                        :options="options" class="mb-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group id="departuretimeGroup"
                      label="" label-for="departuretime">
          <b-form-input id="departuretime"
                        type="text" v-model="trip.departuretime" required

          ></b-form-input>
        </b-form-group>
        <b-form-group id="flightnumberGroup"
                      label="" label-for="flightnumber">
          <b-form-input id="flightnumber"
                        type="text" v-model="trip.flightnumber" required

          ></b-form-input>
        </b-form-group>
        <b-form-group id="lodgingnameGroup"
                      label="Select a Hotel:" label-for="lodgingname">
          <b-form-input id="lodgingname"
                        type="text" v-model="trip.lodgingname" required

          ></b-form-input>
        </b-form-group>
        <b-form-group id="lodgingconfGroup"
                      label="" label-for="lodgingconf">
          <b-form-input id="lodgingconf"
                        type="text" v-model="trip.lodgingconf" required

          ></b-form-input>
        </b-form-group>
        <b-form-group id="rentalnameGroup"
                      label="Select a Car Rental:" label-for="rentalname">
          <b-form-input id="rentalname"
                        v-model="trip.rentalname"

          ></b-form-input>
        </b-form-group>
        <b-form-group id="rentalconfGroup"
                      label="" label-for="rentalconf">
          <b-form-input id="rentalconf"
                        type="text" v-model="trip.rentalconf" required

          ></b-form-input>
        </b-form-group>
      <b-form-group id="tripnoteGroup"
                    label="Special notes for your trip!">
        <b-form-textarea id="tripnote"
                         v-model="trip.tripnote"

                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</div>

</template>

<script>
// console.log(trip)
const tripURL = 'https://stark-harbor-90587.herokuapp.com/trips'
export default {
  async mounted () {
    const tripdata = await fetch(`${tripURL}`)
    const response = await tripdata.json()
    console.log(response)
    this.tripdata = response.map(tripdata => {
      console.log(tripdata.destination)
      return tripdata
    })
  },
  data () {
    return {
      tripdata: {},
      options: [
        { value: null, text: 'Select an Airline:' },
        { value: 'American Airlines', text: 'American Airlines' },
        { value: 'Alaska Airlines', text: 'Alaska Airlines' },
        { value: 'Allegiant Air', text: 'Allegiant Air' },
        { value: 'Delta Air Lines', text: 'Delta Air Lines' },
        { value: 'Frontier Airlines', text: 'Frontier Airlines' },
        { value: 'Hawaiian Airlines', text: 'Hawaiian Airlines' },
        { value: 'JetBlue Airways', text: 'JetBlue Airways' },
        { value: 'Southwest Airlines', text: 'Southwest Airlines' },
        { value: 'Spirit Airlines', text: 'Spirit Airlines' },
        { value: 'Sun Country Airlines', text: 'Sun Country Airlines' },
        { value: 'United Airlines', text: 'United Airlines' },
        { value: 'Virgin America', text: 'Virgin America' }
      ]
    }
  },
  methods: {
    tripdata (event) {
      const tripdata = {
        'destination': this.tripdata.destination,
        'startdate': this.tripdata.startdate,
        'enddate': this.tripdata.enddate,
        'airplane': this.tripdata.airplane,
        'departuretime': this.tripdata.departuretime,
        'flightnumber': this.tripdata.flightnumber,
        'lodgingname': this.tripdata.lodgingname,
        'lodgingconf': this.tripdata.lodgingconf,
        'rentalname': this.tripdata.rentalname,
        'rentalconf': this.tripdata.rentalconf,
        'tripnote': this.tripdata.tripnote
      }
      this.tripdata.push(tripdata)
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(tripdata)
      }
      fetch(`${tripURL}/`, settings)
       .then(response => {
         if (response.ok) {
           console.log(response)
         }
       })
    }
  }
}
</script>
