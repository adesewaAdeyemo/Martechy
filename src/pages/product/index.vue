<template>
    <div class="wrapper">
        <h2 class="header-text py-4">... Shop with us</h2>
        <div v-for="(products, rowIndex) in productGroups" :key="rowIndex" class="row">
            <base-card v-for="(product, index) in products" :key="index" class="product-card col-md-3 col-sm-12 custom-style">
                <img :src="product.imageUrl" alt="Product Image" height="300" />
                <div class="card-body">
                    <h5>{{ product.name }} Shoe</h5>
                    <div class="d-flex justify-content-between">
                        <p><strong>Category: </strong> {{ product.category }}</p>
                        <p><strong>Price: </strong> ${{ product.unitPrice }}</p>
                    </div>
                    <base-button class="transparent col-12" @click.prevent="addToCart(product)">Add to Cart</base-button>
                </div>
            </base-card>        
        </div>
      <!-- </div> -->
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from 'axios';

export default {
  data() {
    return {
        products: [],
    };
  },
  async mounted() {
      this.getData();
  },
  methods: {
    async getData() {

        let response = axios.get('http://ec2-34-238-127-13.compute-1.amazonaws.com:8080/api/v1/stores/MPLOQ/products', {
        params: {
            offset: 0,
            size: 10
        },
        headers: {
            'X-API-KEY': 'faa8d3b9-9529-4edc-b2cd-755e70dcc259'
        }
        })
        .then(response => {
            this.products = response.data;
        })
        .catch(error => {
            alert(error)
        });

    },
    async addToCart(product) {
      this.$emit('add-to-cart', product);
    },
    async sendData() {
      try {
        this.loadbtn =true;

        if (this.loadbtn) {

          this.getData();
          this.$swal({
            type: "success",
            title: "Successful",
            text: response.message,
          });

         
      }
        this.loadbtn =false;

      } catch (ex) {
        this.loadbtn =false;
        this.$swal(_error(ex, true));
      }
    },

},
  computed: {
    productGroups() {
      const groupSize = 4;
      const groups = [];
      for (let i = 0; i < this.products.length; i += groupSize) {
        groups.push(this.products.slice(i, i + groupSize));
      }
      return groups;
    },
  },

}
</script>
