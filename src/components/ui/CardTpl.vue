<template>
    <div class="row gx-5 g-4 price-row col-lg-12 wrapper">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-lg-4 line"
        @mouseenter="handleCardMouseEnter(index)"
        @mouseleave="handleCardMouseLeave"
        :style="{ filter: card.blurred ? 'blur(5px)' : 'none' }"
      >
        <span v-html="card.html" class="custom-section-bg col-12 float-card"></span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {html: `
                <div class=''>
                    <img src='https://res.cloudinary.com/dorjfo4ca/image/upload/v1692700170/Henry/adire3_q6qvya.jpg' class="col-12">
                    <div class='float-card-text'>
                        <h5>Kampala</h5>
                    </div>
                </div>
        ` },
        {html: `
                <div class="mt-5">
                    <img src='https://res.cloudinary.com/dorjfo4ca/image/upload/v1692650217/Henry/clay1_x82np2.jpg' class="col-12">
                    <div class='float-card-text'>
                        <h5>Clay Pot</h5>
                    </div>
                </div>
        `},
        {html:`
                <div class="card-minus">
                    <img src='https://res.cloudinary.com/dorjfo4ca/image/upload/v1692700170/Henry/adire2_ericxv.webp' class="col-12">
                    <div class='float-card-text'>
                        <h5>Adire</h5>
                    </div>
                  </div>
        `},
        
      ]
    };
  },
  methods: {
    handleCardMouseEnter(index) {
      this.cards.forEach((card, i) => {
        card.blurred = i !== index;
      });
    },
    handleCardMouseLeave() {
      this.cards.forEach(card => {
        card.blurred = false;
      });
    }
  }
};
</script>
