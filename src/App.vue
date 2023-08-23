<template>
  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;800&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}


</style>