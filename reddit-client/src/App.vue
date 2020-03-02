<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/">
          ComCom
        </a>
      </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <router-link class="button is-primary"
          :to="{ name: 'Subreddits' }">View Subreddits</router-link>
      </div>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="!isLoggedIn">
              <a class="button is-danger" @click="login()">
                Login with Google
              </a>
              <router-link class="button is-primary"
                           :to="{ name: 'Register' }">Register</router-link>
            </p>
            <p class="control logged-in" v-if="isLoggedIn">
              <span class="avatar">
                <figure>
                  <img :src="user.image">
                </figure>
                <figcaption>Hi, {{user.name}}</figcaption>
              </span>
              <a class="button is-primary" @click="logout()">
                Logout
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
};
</script>

<style lang="scss">
.main {
  margin-top: 2em;
}
.logged-in {
  display: flex;
  flex-direction: row;
}
.avatar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
figcaption {
  margin: 0 .5rem;
}
</style>
