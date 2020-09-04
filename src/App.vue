<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>

    <router-view/>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayuot.vue';

import MainLayout from '@/layouts/MainLayout.vue';

export default {
  computed: {
    layout() {
      console.log(this.$route.meta);
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
