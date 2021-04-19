<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col class="left_content" sm="12" md="4">
          <img class="logo" src="@/assets/Logo.png" alt="" />
          <div class="text">
            LaslesVPN is a private virtual network that has unique features and has high security.
          </div>
          <ul>
            <li>
              <img class="network-icons" src="@/assets/Facebook.png" alt="" />
            </li>
            <li>
              <img class="network-icons" src="@/assets/twitter.png" alt="" />
            </li>
            <li>
              <img class="network-icons" src="@/assets/instagram.png" alt="" />
            </li>
          </ul>
          <div class="copyrights">©2020LaslesVPN</div>
        </b-col>

        <b-col class="right_content" sm="12" md="8">
          <b-row>
            <b-col md="4">
              <div>Product</div>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </b-col>
            <b-col md="4">
              <div>Engage</div>
              <ul>
                <li>LaslesVPN ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </b-col>
            <b-col md="4">
              <div>Earn Money</div>
              <ul>
                <li>Affiliate</li>
                <li>Become Partner</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  margin: 30px 0;
  .left_content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
      width: 50%;
      margin-bottom: 20px;
    }

    .text {
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      color: #4f5665;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 10px 0;
      display: flex;
      li {
        text-align: center;
        .network-icons {
          background-color: #f53838;
          border-radius: 50%;
          margin: 10px;
        }
      }
    }

    .copyrights {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      color: #afb5c0;
    }
  }

  .right_content {
    div {
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: #0b132a;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        /* identical to box height, or 187% */

        color: #4f5665;
      }
    }
  }
}
</style>
