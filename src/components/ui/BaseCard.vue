<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
    margin: 0px auto 30px auto !important;
    border: transparent !important;
    border-radius: 2px !important;
    background-color: #fcfbfb !important;
    box-shadow: .1px .2px 4px rgba(231, 226, 226, 0.5), -.1px -.2px 4px rgba(223, 217, 217, 0.5) !important;
    padding: 30px 60px !important;
}
.card:hover{
    box-shadow: .1px .2px 12px rgba(238, 234, 234, 0.5), -.1px -.2px 12px rgba(214, 209, 209, 0.5) !important;
}
</style>