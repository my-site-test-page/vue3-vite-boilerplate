<script setup>
import { useStore } from 'vuex';

const store = useStore();
console.log(store.state.count);
</script>

<template>
  <div>
    <!-- sample -->
    <v-btn @click="() => $router.push({ path: '/samplea' })">to Sample A</v-btn>
    <v-btn @click="() => $router.push({ path: '/sampleb' })">to Sample B</v-btn>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
