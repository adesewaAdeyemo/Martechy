<template>
    <div class="auth-body">
        <slot></slot>
    </div>
</template>
<script>

    export default {
    }

</script>
<style scoped>
    .auth-body{
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
</style>