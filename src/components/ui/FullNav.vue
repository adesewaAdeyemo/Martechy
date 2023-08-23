<template>
    <div class="wrapper">
        <nav class="d-flex justify-content-between align-items-center py-2 header-nav" id="header-nav">
            <ul style="margin-bottom:0px" class="d-flex justify-content-between p-0 align-items-center">
                <li class="item button allitemmargin"><a class="Logo" href="/"><img src="https://res.cloudinary.com/dorjfo4ca/image/upload//c_thumb,w_200,h_30,g_auto/v1692783066/Henry/LogoSample_ByTailorBrands_2_qmbe1i.png"></a></li>
                <!-- <li class="item button allitemmargin"><a class="Logo " href="/">Martechy</a></li> -->
                <li class="item allitemmargin px-3"><a href="/realtor#about">About Us</a></li>
                <li class="item button allitemmargin px-3"><a href="/realtor#contact">Art</a></li>
                <li class="item button allitemmargin px-3"><a href="/realtor#contact">Technology</a></li>
                <li class="item button allitemmargin px-3"><a href="/realtor#contact">Art Therapy</a></li>
                <li class="item button allitemmargin px-3"><a href="/realtor#contact">Psychology</a></li>
                <li class="item button allitemmargin px-3"><a href="/realtor#contact">Connect</a></li>
            </ul>
            <ul style="margin-bottom:0px" class="d-flex justify-content-between align-items-center">
                <li class="item button allitemmargin land"><div class="btn btn-md border-radius p-0  mx-3" id="google_translate_element"></div></li>
                <li class="item button allitemmargin"><base-button mode="transparent" to="explore" link>Explore</base-button></li>
            </ul>
        </nav>
        <nav class="d-flex justify-content-between align-items-center pt-3 mobile-nav mb-3" id="mobile-nav">
            <span class="item button allitemmargi"><img src="https://res.cloudinary.com/dorjfo4ca/image/upload//c_thumb,w_200,h_30,g_auto/v1692783066/Henry/LogoSample_ByTailorBrands_2_qmbe1i.png" height="20" ></span>
            <div class="dropdown">
                <span type="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <span class="icon">&#9776</span>
                </span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/realtor#about">About Us</a></li>
                    <li><a class="dropdown-item" href="/realtor#contact">Product</a></li>
                    <li><a  class="dropdown-item" href="/signin">Blog</a></li>
                    <li><div class="btn btn-sm dropdown-item" id="google_translate_element"></div></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="signup" link>Explore</a></li>
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
        // {
        //     pageLanguage: 'en',
        //     includedLanguages: 'yo,ha,ig,en',
        //     layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        // },
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
};
</script>
<style>
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

</style>