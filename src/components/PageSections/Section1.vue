<template>
  <div class="section-one">
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="6" class="left_content">
          <div class="title">Want anything to be easy with LaslesVPN.</div>
          <div class="sub_title">
            Provide a network for all your needs with ease and fun using LaslesVPN discover
            interesting features from us.
          </div>
          <button class="get-started-btn">Get Started</button>
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <img src="@/assets/Illustration_1.png" alt="" width="100%"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Section1",
};
</script>

<style lang="scss" scoped>
.left_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
  }
  .sub_title {
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
  }
  .get-started-btn {
    width: 250px;
    height: 60px;
    background: #f53838;
    border-radius: 10px;
    border: 0;
    color: #ffffff;
    margin-top: 30px;
    box-shadow: 0px 10px 8px rgb(245 56 56 / 40%);
  }
}
</style>
