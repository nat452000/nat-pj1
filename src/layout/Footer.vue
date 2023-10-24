<template>
  <footer>
    <section class="contact">
      <h2 v-html="message"></h2>
    </section>
    <div class="footer-wrapper l-section-padding">
      <div class="row">
        <div class="columns large-12">
          <div class="footer-container">
            <div class="footer-item">
              <address>
                <p class="address-item">
                  <span class="heightlight">e-mail:</span>
                  clothes_shop@triablo.com
                </p>

                <p class="address-item">
                  <span class="heightlight">address:</span> New York, Saint
                  Nicholas Avenue 13/1
                </p>

                <p class="address-item">
                  <span class="heightlight">fax:</span> +1 0123-4567-8900
                </p>
              </address>
            </div>

            <div class="footer-item">
              <div class="logo-wrapper">
                <div
                  class="logo-block"
                  style="opacity: 1; transform: translateY(0px)"
                >
                  <a href="#main-carousel">
                    <img
                      src="../assets/image/logo/logo.png"
                      alt=""
                      class="footer-logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="footer-item">
              <div class="copy-right">
                <p>© Triablo 2014. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      message: "<span>contact or find us on <a href=>the map</a> </span>",
    };
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  h2 {
    text-transform: uppercase;
  }
}
.footer-wrapper {
  background-color: #222;
  .footer-container {
    display: flex;
    justify-content: space-evenly;
    color: white;
    .footer-item {
      text-align: center;
    }
  }
}
</style>
