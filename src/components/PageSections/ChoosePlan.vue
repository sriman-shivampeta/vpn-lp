<template>
  <div class="choose-your-plan">
    <div class="heading">Choose Your Plan</div>
    <div class="sub-heading text-center">
      Let's choose the package that is best for you and explore it happily and cheerfully.
    </div>
    <div class="plans container">
      <b-row>
        <b-col md="4">
          <div class="plan-border">
            <img class="plan-image" src="@/assets/Free.svg" alt="" />
            <div class="plan-name">Free Plan</div>
            <ul class="plan-li">
              <li><img src="@/assets/plan_tick.png" alt="" /> Unlimited Bandwitch</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> No Traffic Logs</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Encrypted Connection</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Works on All Devices</li>
            </ul>
            <div class="plan-price">Free</div>
            <div class="plan-subscribe">Select</div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="plan-border">
            <img class="plan-image" src="@/assets/Free.svg" alt="" />
            <div class="plan-name">Standard Plan</div>
            <ul class="plan-li">
              <li><img src="@/assets/plan_tick.png" alt="" /> Unlimited Bandwitch</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> No Traffic Logs</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Encrypted Connection</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Works on All Devices</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Connect Anyware</li>
            </ul>
            <div class="plan-price">$9 / mo</div>
            <div class="plan-subscribe">Select</div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="plan-border">
            <img class="plan-image" src="@/assets/Free.svg" alt="" />
            <div class="plan-name">Premium Plan</div>
            <ul class="plan-li">
              <li><img src="@/assets/plan_tick.png" alt="" /> Unlimited Bandwitch</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> No Traffic Logs</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Encrypted Connection</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Works on All Devices</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Connect Anyware</li>
              <li><img src="@/assets/plan_tick.png" alt="" /> Get New Features</li>
            </ul>
            <div class="plan-price">$12 / mo</div>
            <div class="plan-subscribe">Select</div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChoosePlan",
};
</script>

<style lang="scss" scoped>
.choose-your-plan {
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

  .plans {
    text-align: center;
    margin: 30px auto;

    .plan-border {
      background: #ffffff;
      border: 2px solid #dddddd;
      box-sizing: border-box;
      border-radius: 10px;

      .plan-image {
        padding: 10px;
        margin-top: 30px;
      }

      .plan-name {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        color: #0b132a;
      }

      .plan-li {
        list-style: none;
        text-align: left;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        height: 190px;
        margin: 10px;
      }

      .plan-price {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
      }

      .plan-subscribe {
        width: 60%;
        padding: 10px;
        background: #f53838;
        border-radius: 50px;
        border: 0;
        color: #ffffff;
        margin: 30px auto;
        box-shadow: 0px 10px 8px rgb(245 56 56 / 40%);
      }
    }
  }
}
</style>
