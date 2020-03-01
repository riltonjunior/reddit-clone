<template>
  <section>
    <b-notification
      type="is-danger"
      has-icon
      aria-close-label="Close notification"
      role="alert"
    >
      {{error}}
    </b-notification>
    <form>
      <b-field label="Name">
        <b-input v-model="form.name" required maxlength="30"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input
          v-model="form.email"
          required
          maxlength="30"
        ></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="form.password" type="password" password-reveal maxlength="18" required></b-input>
      </b-field>
      <b-button type="is-primary" @click.prevent="Register()">Register</b-button>
    </form>
  </section>
</template>


<script>
import firebase from "@/firebase";

export default {
  data () {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        image: ""
      },
      error: null
    };
  },
  methods: {
    Register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              // name: this.form.name,
              displayName: this.form.name,
              // image: this.form.image
            })
            .then(() => { console.log(data) });
        })
        .catch(err => {
          this.error = err.message;
          console.log(err);
        });
    }
  }
};
</script>
