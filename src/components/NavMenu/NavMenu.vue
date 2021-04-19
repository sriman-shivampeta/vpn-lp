<template>
  <div class="py-md-3 px-md-1 px-lg-4">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <div class="logo">
          <img src="../../assets/Logo.png" alt="" />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Features</b-nav-item>
          <b-nav-item href="#">Pricing</b-nav-item>
          <b-nav-item href="#">Testimonials</b-nav-item>
          <b-nav-item href="#">Help</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item class="sign-up-btn" href="#">Sign In</b-nav-item>
          <b-nav-item class="sign-up-btn" href="#">Sign Up</b-nav-item>
          <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Sign In</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>

<style lang="scss" scoped>
.navbar-toggler {
  background-color: #2c3e50;
}
.navbar-nav {
  .nav-item {
    a {
      color: #4f5665;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      margin: 0 20px;

      &:hover,
      &:active {
        color: #f53838;
      }
      &:focus {
        color: #f53838;
      }
    }
  }

  .sign-up-btn {
    color: #0b132a;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid transparent;

    &:hover {
      color: #f53855;
      border-radius: 50px;
      border: 1px solid #f53855;
      cursor: pointer;
    }
  }
}
</style>
