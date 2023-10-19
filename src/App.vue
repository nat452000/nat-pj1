<template>
  <div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/ProductPage/Footer.vue';

export default {
    setup() {
        return {};
    },
    components: { Footer }
}
</script>

<style lang="scss" scoped>

</style>