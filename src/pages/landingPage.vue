<template>
    <landing-page>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active courouseladdeds1 text-left-forcourouseladded1s">
                    <div class="carousel-text header-btn">
                        <h1>. . . When Energy Stops, <br>Passion Drives.</h1>
                        <p>Flex Your soul by chasing your passion. <br>Do what you love to do and be good at what you do.</p>
                    </div>
                    <div class="carousel-text btn-mobile">
                        <h1>. . . When Energy <br>  Stops, <br>Passion  Drives.</h1>
                        <p>Flex Your soul by chasing your passion.</p>
                        <p>Do what you love to do</p>
                        <p> and be good at what you do.</p>
                    </div>
                    <div class="fade-img">
                        <img src="https://res.cloudinary.com/dorjfo4ca/image/upload/v1692650275/Henry/Martechy/clay2_p6saxa.jpg" alt="" height="500" class="col-12">
                    </div>
                </div>
                <div class="carousel-item courouseladdeds1">
                    <div class="carousel-text header-btn">
                        <h1>. . . Art Of Science, And The <br>Science of Art.</h1>
                        <p>Flex Your soul by chasing your Passion. <br>Do what you love to do and be good at what you do.</p>
                    </div>
                    <div class="carousel-text btn-mobile">
                        <h1>. . . Art Of Science <br>  And The <br>Science  Of Art.</h1>
                        <p>Flex Your soul by chasing your Passion.</p>
                        <p>Do what you love to do</p>
                        <p> and be good at what you do.</p>
                    </div>
                    <div class="fade-img">
                        <img src="https://res.cloudinary.com/dorjfo4ca/image/upload//a_-90/a_vflip/v1692700170/Henry/adire4_obsjax.jpg" alt="" height="500" class="col-12">
                    </div>
                </div>
                <div class="carousel-item courouseladdeds1">
                    <div class="carousel-text header-btn">
                        <h1>. . . . Chop The Life, <br>Of Your Head.</h1>
                        <p>Flex Your soul by chasing your passion.<br> Do what you love to do and be good at what you do.</p>
                    </div>
                    <div class="carousel-text btn-mobile">
                        <h1>. . . . Chop <br>  The Life, <br>Of Your Head.</h1>
                        <p>Flex Your soul by chasing your Passion.</p>
                        <p>Do what you love to do</p>
                        <p> and be good at what you do.</p>
                    </div>
                    <div class="fade-img">
                        <img src="https://res.cloudinary.com/dorjfo4ca/image/upload/v1692650217/Henry/clay1_x82np2.jpg" alt="" height="500" class="col-12">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="text-header pb-5">
                <h2>Alot To Talk About But Hold On....</h2>
            </div>
        </div>
        <div class="wrapper">
            <base-card>
                <h4>Discover Yourself</h4>
                <p>You dont need to repeat the same circle that has been dicovered by someone. Just pick up from there and build on it. You might actually want something new, unique and different. You should read and learn about others people research and discovery so as not to start looking for stategies to burn already burnt bridge.</p>
                <p>A friend once was confused but discovered herself not to long.</p>
                <a href="#"><i class="read-me">Read about her to discover Yourself  <span class="read-me">&rarr;</span></i></a>
            </base-card>

            <base-card>
                <h4>Discover Yourself</h4>
                <p>You dont need to repeat the same circle that has been dicovered by someone. Just pick up from there and build on it. You might actually want something new, unique and different. You should read and learn about others people research and discovery so as not to start looking for stategies to burn already burnt bridge.</p>
                <p>A friend once was confused but discovered herself not to long.</p>
                <a href="#"><i class="read-me">Read about her to discover Yourself  <span class="read-me">&rarr;</span></i></a>
            </base-card>

            <base-card>
                <h4>Discover Yourself</h4>
                <p>You dont need to repeat the same circle that has been dicovered by someone. Just pick up from there and build on it. You might actually want something new, unique and different. You should read and learn about others people research and discovery so as not to start looking for stategies to burn already burnt bridge.</p>
                <p>A friend once was confused but discovered herself not to long.</p>
                <a href="#"><i class="read-me">Read about her to discover Yourself  <span class="read-me">&rarr;</span></i></a>
            </base-card>

        </div>
        <div class="custom-bg">
            <div class="wrapper">
                <card-tpl></card-tpl>
            </div>
        </div>
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