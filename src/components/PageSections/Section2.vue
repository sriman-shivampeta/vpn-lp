<template>
  <div class="section-two">
    <b-container>
      <b-row>
        <b-col sm="4" md="4">
          <b-row class="justify_align-content-center">
            <b-col md="4"><img src="../../assets/user.png" alt="" /></b-col>
            <b-col md="8">
              <div>90+</div>
              <div>Users</div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="4" md="4">
          <b-row class="justify_align-content-center">
            <b-col md="4"><img src="../../assets/location.png" alt="" /></b-col>
            <b-col md="8">
              <div>30+</div>
              <div>Locations</div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="4" md="4">
          <b-row class="justify_align-content-center">
            <b-col md="4"><img src="../../assets/server.png" alt="" /></b-col>
            <b-col md="8">
              <div>50+</div>
              <div>Servers</div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Section2",
};
</script>

<style lang="scss" scoped>
.section-two {
  background-color: #fff;
  margin: 40px auto;
  margin-top: 60px;
  padding: 40px;
  border-radius: 10px;
  width: 90%;
}
</style>
