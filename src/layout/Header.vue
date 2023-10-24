<template>
  <div class="header-wrapper">
    <div class="header-cont" >
      <!-- * LOGO -->
      <img src="../assets/image/logo/logo.png" alt="logo">
      <!-- * items -->
      <ul>
        <li v-for="item in headItems" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headItems: [
        'product',
        'brands',
        'why triablo',
        'team',
        'reviews',
        'about us',
        'news',
        'contacts',
      ]
    }
  }
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
      }
    }
  }

}
</style>
