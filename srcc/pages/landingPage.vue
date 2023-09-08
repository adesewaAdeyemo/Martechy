<template>
    <landing-page>
    </landing-page>
</template>
<script>
    export default {
        data(){
            return{
            }
        },
        components: {
        },
        methods: {
        },
    }
</script>
<style scoped>
.fade-img {
  position: relative; 
}

.fade-img:after {
  content:""; 
  position: absolute; 
  bottom: 0;
  left: 0;
  right: 0;
  /* background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); */
  background: linear-gradient(to left, rgba(255,255,255,0) 30%,rgb(255,255,255) 100%), url('')!important;
  height: 100%;  
}
</style>