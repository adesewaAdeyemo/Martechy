<template>
  <div class="wrapper">
    <h4 class="py-4">Shopping Cart</h4>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
    <base-button @click.prevent="showcheckout" class="opaque">Checkout</base-button>
    <base-dialog class="col-4 backdrop" :show="checkout" :fixed="true">
      <form @submit.prevent="placeOrder">
        <h4 class="text-center">Checkout</h4>
        <div>
          <label for="customerFirstName">First Name:</label>
          <input type="text" id="customerFirstName" v-model="customerFirstName" required />
        </div>
        <div>
          <label for="customerLastName">Last Name:</label>
          <input type="text" id="customerLastName" v-model="customerLastName" required />
        </div>
        <div>
          <label for="customerEmail">Email:</label>
          <input type="email" id="customerEmail" v-model="customerEmail" required />
        </div>

        <h6 class="pt-2">Shipping Address</h6>
        <div>
          <label for="shippingStreet">Street:</label>
          <input type="text" id="shippingStreet" v-model="shippingAddress.street" required />
        </div>
        <div>
          <label for="shippingCity">City:</label>
          <input type="text" id="shippingCity" v-model="shippingAddress.city" required />
        </div>
        <div>
          <label for="shippingState">State:</label>
          <input type="text" id="shippingState" v-model="shippingAddress.state" required />
        </div>
        <div>
          <label for="shippingCountry">Country:</label>
          <input type="text" id="shippingCountry" v-model="shippingAddress.country" required />
        </div>

        <h6 class="pt-2">Billing Address</h6>
        <div>
          <label for="billingStreet">Street:</label>
          <input type="text" id="billingStreet" v-model="billingAddress.street" required />
        </div>
        <div>
          <label for="billingCity">City:</label>
          <input type="text" id="billingCity" v-model="billingAddress.city" required />
        </div>
        <div>
          <label for="billingState">State:</label>
          <input type="text" id="billingState" v-model="billingAddress.state" required />
        </div>
        <div>
          <label for="billingCountry">Country:</label>
          <input type="text" id="billingCountry" v-model="billingAddress.country" required />
        </div>

        <base-button mode="opaque" class="mt-2">Place Order</base-button>
      </form>
    </base-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    cartItems: Array,
  },

  data() {
    return {
      checkout: false,
      customerFirstName: '',
      customerLastName: '',
      customerEmail: '',
      shippingAddress: {
        street: '',
        city: '',
        state: '',
        country: '',
      },
      billingAddress: {
        street: '',
        city: '',
        state: '',
        country: '',
      },
    };
  },
  methods: {
    async showcheckout(){
      this.checkout = !this.checkout;
    },
    async placeOrder() {
      // Construct the order data object based on form inputs
      const orderData = {
        totalQuantity: 0, // You can calculate this based on the cart contents
        totalPrice: 0, // You can calculate this based on the cart contents
        orderItems: [], // You can populate this based on the cart contents
        customerFirstName: this.customerFirstName,
        customerLastName: this.customerLastName,
        customerEmail: this.customerEmail,
        shippingAddress: this.shippingAddress,
        billingAddress: this.billingAddress,
      };

      // Make an API POST request to create the order
      axios
        .post('http://ec2-34-238-127-13.compute-1.amazonaws.com:8080/api/v1/stores/MPLOQ/orders', orderData, {
          headers: {
            'X-API-KEY': 'faa8d3b9-9529-4edc-b2cd-755e70dcc259'
          },
        })
        .then((response) => {
          alert('seen');
          this.$router.push('/products')
        })
        .catch((error) => {
          // Handle errors
          console.error('Error placing order:', error);
        });
    },
  },
};
</script>
<style scoped>
input{
  width: 100% !important;
}
.backdrop {
  background-color: rgba(12, 13, 14, 0.5) !important;
  z-index: 10;
}

</style>