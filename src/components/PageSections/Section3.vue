<template>
  <div class="section-three">
    <b-container>
      <b-row>
        <b-col sm="12" md="6"> <img src="@/assets/Illustration_2.png" alt="" width="100%" /></b-col>
        <b-col sm="12" md="6" class="left_content">
          <div class="title">We Provide Many Features You Can Use</div>
          <div class="sub_title">
            You can explore the features that we provide with fun and have their own functions each
            feature.
          </div>
          <div class="points">
            <ul>
              <li>
                <img src="@/assets/success_points.png" alt="" width="24px" /> Powerfull online
                protection.
              </li>
              <li>
                <img src="@/assets/success_points.png" alt="" width="24px" /> Internet without
                borders.
              </li>
              <li>
                <img src="@/assets/success_points.png" alt="" width="24px" /> Supercharged VPN
              </li>
              <li>
                <img src="@/assets/success_points.png" alt="" width="24px" /> No specific time
                limits.
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Section3",
};
</script>

<style lang="scss" scoped>
.section-three {
  margin: 60px 0;
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
    .points {
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        li {
          padding: 10px 0px;
        }
      }
    }
  }
}
</style>
