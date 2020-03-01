<template>
  <div style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Email">
        <b-input
          type="email"
          :value="email"
          placeholder="Your email"
          required
        >
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input
          type="password"
          :value="password"
          password-reveal
          placeholder="Your password"
          required
        >
        </b-input>
      </b-field>

      <b-checkbox>Remember me</b-checkbox>
    </section>
    <footer class="modal-card-foot">
      <button
        class="button is-primary"
        @submit.prevent="submit"
      >Login</button>
    </footer>
  </div>
</template>


<script>
import firebase from "@/firebase";

export default {
  data () {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Subreddit" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
