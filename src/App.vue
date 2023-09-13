<template>
  <full-nav :count="cart.length"></full-nav>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" @add-to-cart="addToCart"></component>
    </transition>
  </router-view>
</template>

<script>

export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    // addToCart(product) {
    //   alert('seen')
    //   const existingProduct = this.cart.find((item) => item.id === product.id);

    //   if (existingProduct) {
    //     existingProduct.quantity++;
    //   } else {
    //     this.cart.push({ ...product, quantity: 1 });
    //   }
    // },
    addToCart(product) {
      const existingProductIndex = this.cart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        this.cart = [
          ...this.cart.slice(0, existingProductIndex),
          { ...this.cart[existingProductIndex], quantity: this.cart[existingProductIndex].quantity + 1 }, // Updated item
          ...this.cart.slice(existingProductIndex + 1), 
        ];
      } else {
        this.cart = [
          ...this.cart,
          { ...product, quantity: 1 },
        ];
      }
    }
  },

  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    }
  },

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  /* max-width: 100% !important; */
  /* overflow-x: hidden; */
}

</style>