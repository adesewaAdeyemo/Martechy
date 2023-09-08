<template>
  <button v-if="!link" :class="mode == 'opaque' ? 'btn custom-btn-bg btn-sm px-3 border-radius' : 'btn custom-btn-outline border-radius btn-sm px-3'">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode == 'opaque' ? 'btn custom-btn-bg btn-sm px-3 border-radius' : 'btn custom-btn-outline border-radius btn-sm px-3'">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>
