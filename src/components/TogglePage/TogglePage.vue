<template>
  <div>
    <section class="colors-section">
      <div class="section-title-block">
        <h3 class="section-title">CHOOSE YOUR COLOR</h3>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TogglePage',
  setup() {
    return {
      listItems: Array.from(Array(8).keys).map(item => item)
    }
  }
}
</script>

<style lang="scss" scoped></style>
