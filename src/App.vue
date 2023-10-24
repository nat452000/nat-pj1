<template>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue';
import Body from './layout/Body.vue';
import Footer from './layout/Footer.vue';

export default {
    setup() {
        return {};
    },
    components: { Header, Body, Footer }
}
</script>

<style lang="scss">

</style>