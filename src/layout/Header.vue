<template>
  <div class="header-wrapper">
    <div class="header-cont">
      <!-- * LOGO -->
      <img src="../assets/image/logo/logo.png" alt="logo" />
      <!-- * items -->
      <ul>
        <li>
          <a href="" v-for="item in headItems" :key="item"> {{ item }}</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="title">
        <h2 v-html="message"></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headItems: [
        "product",
        "brands",
        "why triablo",
        "team",
        "reviews",
        "about us",
        "news",
        "contacts",
      ],
      message: "<span>20% off on winter warmers</span>",
    };
  },
};
</script>

<style lang="scss">
.header-wrapper {
  background: black;
  color: white;

  .header-cont {
    width: 1400px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      list-style: none;
      li {
        flex-shrink: 0;
        padding: 10px;
        margin: 10px;
        a {
          color: white;
          text-decoration: none;
          padding-left: 20px;
        }
      }
    }
  }
  .title {
    display: block;
    text-align: center;
    margin-top: 40px;
    font-size: 28px;
    text-transform: uppercase;
  }
}
</style>
