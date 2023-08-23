<template>
  <full-nav/>
  <slot></slot> 
</template>
<script>
    import FullNav from "/src/components/ui/FullNav.vue";

    export default {
    components: {
        FullNav
    }  
    }

</script>