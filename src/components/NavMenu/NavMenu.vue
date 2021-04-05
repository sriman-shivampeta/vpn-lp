<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../../assets/Logo.png" alt="" />
      </div>
      <div class="nav-menu">
        <router-link to="/">About</router-link>
        <router-link to="/">Features</router-link>
        <router-link to="/">Pricing</router-link>
        <router-link to="/">Testimonials</router-link>
        <router-link to="/">Help</router-link>
      </div>
      <div class="signin">
        <label>Sign In</label>
        <label class="sign-up-btn">Sign Up</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>

<style lang="scss" scoped></style>
