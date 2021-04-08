<template>
  <div class="global-network">
    <div class="heading">Huge Global Network of Fast VPN</div>
    <div class="sub-heading text-center">
      See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.
    </div>
    <div class="plans container">
      <b-row>
        <b-col md="10" offset-md="1">
          <img class="gn-map" src="@/assets/huge_global.png" alt="" width="100%" />
        </b-col>
        <b-col md="10" offset-md="1">
          <img class="gn-sponsored" src="@/assets/Sponsored.png" alt="" width="100%" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalNetwork",
};
</script>

<style lang="scss" scoped>
.global-network {
  margin: 60px 0;

  .heading {
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: center;
  }

  .sub-heading {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    margin: 10px auto;
  }

  .gn-map {
    margin: 50px auto;
  }
  .gn-sponsored {
    margin: 10px auto;
  }
}
</style>
