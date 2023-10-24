<template>
  <section role="main">
    <section class="product-sec">
      <div class="row">
        <div class="column">
          <h2 class="sec-title" v-html="message"></h2>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Body",
  data() {
    return {
      message: "<span>We make you awesome</span>",
    };
  },
};
</script>

<style lang="scss">
section {
  position: relative;
  z-index: 5;
  background: #fff;

  .sec-title {
    text-align: center;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-transform: uppercase;
  }
}
</style>
