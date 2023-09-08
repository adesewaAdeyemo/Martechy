<template>
  <div :class="mode == 'no-shade' ? 'no-shade-card' : 'card'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
  }
}
</script>
<style scoped>

.card {
    margin: 0px auto 30px auto !important;
    border: transparent !important;
    border-radius: 2px !important;
    background-color: #fcfbfb !important;
    /* box-shadow: .1px .2px 4px rgba(231, 226, 226, 0.5), -.1px -.2px 4px rgba(223, 217, 217, 0.5) !important; */
    box-shadow: 0 .375rem .875rem 0 rgba(0,0,0,.13), 0 .0625rem .25rem 0 rgba(0,0,0,.11)!important;
    padding: 30px 60px !important;
}
.no-shade-card {
    border: transparent !important;
    border-radius: 2px !important;
    background-color: #fcfbfb !important;
    box-shadow: 0 .375rem .875rem 0 rgba(139, 138, 138, 0.13), 0 .0625rem .25rem 0 rgba(165, 163, 163, 0.11)!important;
    padding: 30px 60px !important;
}
/* .card:hover{
    box-shadow: .1px .2px 12px rgba(238, 234, 234, 0.5), -.1px -.2px 12px rgba(214, 209, 209, 0.5) !important;
} */
</style>