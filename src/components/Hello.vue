<template>
  <div class="hello">
    <div class="container">
    <b-card no-body>
      <b-tabs ref="tabs" card>
          <b-tab title="Texas" active>
              Tab Contents
          </b-tab>
          <b-tab title="Portland">
              Tab Contents 2
          </b-tab>
          <b-tab title="Add Trip">
              <form class="" action="index.html" method="post">
                <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your flight"
                  :formatter="format"></b-form-input>
                <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your lodging"
                  :formatter="format"></b-form-input>
                <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your notes"
                  :formatter="format"></b-form-input>
              </form>
          </b-tab>
          <b-tab :title="`Tab ${i}`" v-for="i in tabs" :key="i">
            Tab Contents {{i}}
            <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
              Close tab
            </b-btn>
          </b-tab>
          <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
            +
          </b-nav-item>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [],
      tabCounter: 0
    }
  },
  methods: {
    closeTab (x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
    newTab () {
      this.tabs.push(this.tabCounter++)
    }
  }
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
