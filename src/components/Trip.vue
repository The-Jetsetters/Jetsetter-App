<template>
  <div class="hello">
    <h1>My Trips</h1>
    <div class="row">
    <template v-for="variant in ['outline-success']">
        <div class="col-md-4 pb-2" v-for="size in ['lg']" :key="`{variant}_${size}`">
            <b-button :size="size" :variant="variant">
                {{variant}} {{size}}
            </b-button>
        </div>
    </template>
  </div>
  </div>
</template>

<script>

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
