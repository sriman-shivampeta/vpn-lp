<template>
  <div class="sign-up d-flex justify-content-center align-items-center">
    <div>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="box">
          <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Password" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              type="password"
              placeholder="Enter Password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <router-link to="/login" class="text-muted">Already Signed Up.</router-link>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    ...mapActions(["resgisterUser"]),
    onSubmit(event) {
      event.preventDefault();
      this.resgisterUser(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 40px;
  background: #191919;
  text-align: center;
  transition: 0.25s;

  .form-group {
    color: #fff;
    text-align: left;

    .form-control {
      border: 0;
      background: none;
      display: block;
      margin: 10px auto;
      text-align: center;
      border: 2px solid #3498db;
      padding: 10px 10px;
      width: 250px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s;

      &:focus {
        width: 250px;
        border-color: #2ecc71;
      }
    }
  }

  [type="reset"],
  [type="submit"],
  button:not(:disabled) {
    border: 0;
    background: none;
    display: block;
    margin: 5px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 5px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;

    &:hover {
      background: #2ecc71;
    }
  }
}
</style>
