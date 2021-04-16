<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <b-container>
      <b-row>
        <b-col offset-md="3" md="6">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="box">
            <b-form-group id="input-group-1" label="Email Address" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
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

            <b-button block type="submit" variant="primary">Submit</b-button>
            <router-link to="/signup" class="text-muted">If not Registered</router-link>
            <b-button block type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    onSubmit(event) {
      event.preventDefault();
      this.loginUser(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
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
