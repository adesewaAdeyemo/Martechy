<template>
    <div class="wrapper">
        <nav class="d-flex justify-content-between align-items-center py-2 header-nav" id="header-nav">
            <ul style="margin-bottom:0px" class="d-flex justify-content-between p-0 align-items-center">
                <li class="item button allitemmargin"><a class="Logo" href="/"><img src="https://res.cloudinary.com/dorjfo4ca/image/upload//c_thumb,w_200,h_30,g_auto/v1692783066/Henry/LogoSample_ByTailorBrands_2_qmbe1i.png"></a></li>
                <li class="item allitemmargin px-3"><a href="/product#about">About Us</a></li>
                <li class="item button allitemmargin px-3"><a href="/product#italian">Italian</a></li>
                <li class="item button allitemmargin px-3"><a href="/product#uk">Uk</a></li>
                <li class="item button allitemmargin px-3"><a href="/product#turkish">Turkish</a></li>
                <li class="item button allitemmargin px-3"><a href="/product#nigerian">Nigerian</a></li>
                <li class="item button allitemmargin px-3"><a href="/product#connect">Connect</a></li>
                <li class="item button allitemmargin px-3"><a href="/dashboard">Dashboard</a></li>
            </ul>
            <ul style="margin-bottom:0px" class="d-flex justify-content-between align-items-center">
                <li class="item button allitemmargin"><a href="/cart" @click="gotocart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg><span class="p-absolute" >{{ count }}</span></a></li>
                <li class="item button allitemmargin land"><div class="btn btn-md border-radius p-0  mx-3" id="google_translate_element"></div></li>
                <li class="item button allitemmargin"><base-button mode="transparent" to="#" link>Explore</base-button></li>
            </ul>
        </nav>
        <nav class="d-flex justify-content-between align-items-center pt-3 mobile-nav mb-3" id="mobile-nav">
            <span class="item button allitemmargi"><img src="https://res.cloudinary.com/dorjfo4ca/image/upload//c_thumb,w_200,h_30,g_auto/v1692783066/Henry/LogoSample_ByTailorBrands_2_qmbe1i.png" height="20" ></span>
            <div class="dropdown">
                <!-- <li class="item button allitemmargin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg><span>{{ count }}</span></li> -->
                <span type="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <span class="icon">&#9776</span>
                </span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/product#about">About Us</a></li>
                    <li><a class="dropdown-item" href="/product#italian">Italian</a></li>
                    <li><a  class="dropdown-item" href="/product#uk">Uk</a></li>
                    <li><a  class="dropdown-item" href="/product#turkish">Turkish</a></li>
                    <li><a  class="dropdown-item" href="/product#nigerian">Nigerian</a></li>
                    <li><a  class="dropdown-item" href="/product#connect">Connect</a></li>
                    <li><a  class="dropdown-item" href="/dashboard">Dashboard</a></li>
                    <li><div class="btn btn-sm dropdown-item" id="google_translate_element"></div></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" link>Explore</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="border-bottom"></div>
</template>
<script>
export default {
  mounted() {
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        { pageLanguage: 'en',
         layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          includedLanguages: 'en,ha,ig,yo,pcm',
        },
        'google_translate_element'
      );
    };

    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.head.appendChild(script);
    } else {
      window.googleTranslateElementInit();
    }
  },
  props: {
    count: Number,
  },
  method: {
    gotocart(){
      
    }
  }
  };
</script>
<style scoped>
/* .google_te_gadget_simple ul li{
    list-style: none;
    text-decoration: none;
    border-color:1px solid #e75d12 !important;
    outline:#f86212 !important;
    padding: 10px 10px !important;
} */
.goog-te-gadget-simple {
 background-color:#fff !important;
 border-left:transparent !important;
 border-top:transparent !important;
 border-bottom:transparent !important;
 border-right:transparent !important;
 border-radius: 2px;
 padding: 8.5px 0 !important;
}
.goog-te-gadget-simple .goog-te-menu-value {
 color:#4b2020 !important;
}
.goog-tooltip:hover {
    display: none !important;
}
.goog-text-highlight {
    background-color: transparent !important;
    border: none !important; 
    box-shadow: none !important;
}

.goog-te-gadget-icon{
display:none
}
.VIpgJd-ZVi9od-xl07Ob-lTBxed{
    padding: 10px 10px !important;
}
#mobile-nav{
  display: none !important;
}
span{
    text-decoration: none !important;
    list-style: none;
    color: #071022 !important;
}


@media screen and (max-width: 1400px) {
  #header-nav{
    display: none !important;
  }
  #mobile-nav{
    display: flex !important;
  }
}



</style>