<template>
    <div class="auth-body">
        <full-nav/>
        <slot></slot>
    </div>
</template>
<script>
    import FullNav from "/src/components/ui/FullNav.vue";

    export default {
    components: {
        FullNav
    }  
    }

</script>