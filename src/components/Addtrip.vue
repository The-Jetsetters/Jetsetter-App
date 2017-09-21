<template>
  <div class="container">
    <div>
      <b-form @submit="sendform">
        <b-form-group id="destinationGroup"
                      label="" label-for="destination">
          <b-form-input id="destination"
                        type="text" v-model="sendform.destination" required
                        placeholder="Enter destination"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="startdateGroup"
                      label="" label-for="startdate">
          <b-form-input id="startdate"
                        type="text" v-model="sendform.startdate" required
                        placeholder="When does your trip start?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="enddateGroup"
                      label="" label-for="enddate">
          <b-form-input id="enddate"
                        type="text" v-model="sendform.enddate" required
                        placeholder="When does your trip end?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="airlineGroup"
                      label="Select an Airline:" label-for="airlineName">
          <b-form-input id="airlineName"
                        v-model="sendform.airline"
                        placeholder="Select Airline"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="departuretimeGroup"
                      label="" label-for="departuretime">
          <b-form-input id="departuretime"
                        type="text" v-model="sendform.departuretime" required
                        placeholder="When does your plane leave?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="flightnumberGroup"
                      label="" label-for="flightnumber">
          <b-form-input id="flightnumber"
                        type="text" v-model="sendform.flightnumber" required
                        placeholder="What is your flight number?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="lodgingnameGroup"
                      label="Select a Hotel:" label-for="lodgingname">
          <b-form-input id="lodgingname"
                        type="text" v-model="sendform.lodgingname" required
                        placeholder="Where are you staying?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="lodgingconfGroup"
                      label="" label-for="lodgingconf">
          <b-form-input id="lodgingconf"
                        type="text" v-model="sendform.lodgingconf" required
                        placeholder="Do you have a lodging confirmation number?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="rentalnameGroup"
                      label="Select a Car Rental:" label-for="rentalname">
          <b-form-input id="rentalname"
                        v-model="sendform.rentalname"
                        placeholder="Select Car Rental"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="rentalconfGroup"
                      label="" label-for="rentalconf">
          <b-form-input id="rentalconf"
                        type="text" v-model="sendform.rentalconf" required
                        placeholder="Do you have a car rental confirmation number?"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="tripnoteGroup"
                      label="Special notes for your trip!">
          <b-form-textarea id="tripnote"
                           v-model="sendform.tripnote"
                           placeholder="Enter notes about your trip here."
                           :rows="3"
                           :max-rows="6">
          </b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="secondary">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
const tripURL = 'https://stark-harbor-90587.herokuapp.com/trips'
export default {
  async mounted () {
    const tripdata = await fetch(`${tripURL}`)
    const response = await tripdata.json()
    this.tripdata = response.map(tripdata => {
      return tripdata
    })
  },
  data () {
    return {
      tripdata: {}
    }
  },
  methods: {
    sendform (event) {
      const tripdata = {
        'destination': this.sendform.destination,
        'startdate': this.sendform.startdate,
        'enddate': this.sendform.enddate,
        'airplane': this.sendform.airplane,
        'departuretime': this.sendform.departuretime,
        'flightnumber': this.sendform.flightnumber,
        'lodgingname': this.sendform.lodgingname,
        'lodgingconf': this.sendform.lodgingconf,
        'rentalname': this.sendform.rentalname,
        'rentalconf': this.sendform.rentalconf,
        'tripnote': this.sendform.tripnote
      }
      this.tripdata.push(tripdata)
      const settings = {
        method: 'POST',
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
      this.showCompose = false
    }
  }
}
</script>
