<template>
  <div class="container add trips">
<h1>New Trip</h1>
<form v-on:submit.prevent="onSubmit">
<div>
  <input type="text" name="airline" value="" v-model="trip.airline">
</div>
<div>
  <input type="text" name="flight number" value="" v-model="trip.flightnumber">
</div>
<div>
  <input type="text" name="departure time" value="" v-model="trip.departuretime">
</div>
<div>
  <input type="text" name="lodging name" value="" v-model="trip.lodgingname">
</div>
<div>
  <input type="text" name="lodging confirmation" value="" v-model="trip.lodgingconf">
</div>
<div>
  <input type="text" name="car rental" value="" v-model="trip.rentalname">
</div>
<div>
  <input type="text" name="rental confirmation" value="" v-model="trip.rentalconf">
</div>
<div>
  <input type="text" name="notes" value="" v-model="trip.tripnote">
</div>
<button @click="onSubmit">Add</button>
</form>




  </div>
</template>

<script>

export default {
  name: 'addtrip',
  props: ['onSubmit']
}
</script>
