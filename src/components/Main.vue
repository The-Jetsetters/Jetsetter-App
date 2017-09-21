<template>
  <div>
    <h5>E-mail</h5>
    <b-form-input v-model="email"
                  type="text"
                  placeholder="Enter your E-mail"
                  :formatter="format"></b-form-input>

    <h5>Password</h5>
    <b-form-input v-model="password"
                  type="text"
                  placeholder="Enter your password"
                  :formatter="format"
                  lazy-formatter></b-form-input>
                  <br><br>
    <b-button variant="primary" size="lg" href="#/home">Login</b-button>
  </div>
</template>
