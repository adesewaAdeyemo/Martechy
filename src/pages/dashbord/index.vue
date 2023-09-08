<template>
    <div class="wrapper">
        <div class="d-flex justify-content-between py-4">
            <div class=""></div>
            <div class="create" v-if="!createNew">
                <base-button mode="opaque" @click.prevent="create">Create A New Product</base-button>
            </div>
        </div>
        <table-tpl :data="products" :per-page="perPage"></table-tpl>
      <base-dialog class="col-4 backdrop" :show="createNew" :fixed="true">
        <form @submit.prevent="createProduct" v-if="createNew" class="">
        <div>
            <label for="category">Category:</label>
            <input type="text" id="category" v-model="product.category" required />
        </div>
        <div>
            <label for="sku">SKU:</label>
            <input type="text" id="sku" v-model="product.sku" required />
        </div>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="product.name" required />
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" v-model="product.description" required></textarea>
        </div>
        <div>
            <label for="unitPrice">Unit Price:</label>
            <input type="number" id="unitPrice" v-model="product.unitPrice" required />
        </div>
        <div>
            <label for="imageUrl">Image URL:</label>
            <input type="text" id="imageUrl" v-model="product.imageUrl" required />
        </div>
        <div>
            <label for="unitsInStock">Units in Stock:</label>
            <input type="number" id="unitsInStock" v-model="product.unitsInStock" required />
        </div>
        <base-button mode="opaque" class="mt-2">Create Product</base-button>
        </form>
      </base-dialog>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from 'axios';

export default {
  data() {
    return {
     createNew: false,
      product: {
        category: '',
        sku: '',
        name: '',
        description: '',
        unitPrice: 0,
        imageUrl: '',
        unitsInStock: 0,
      },
      products: [],
      perPage: 10,
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
    create(){
      this.createNew = !this.createNew;
    },
    async createProduct() {
      await axios
        .post('http://ec2-34-238-127-13.compute-1.amazonaws.com:8080/api/v1/stores/MPLOQ/products', this.product, {
          headers: {
            'X-API-KEY': 'faa8d3b9-9529-4edc-b2cd-755e70dcc259'
          },
        })
        .then((response) => {
          alert ('seen');
        })
        .catch((error) => {
          alert(error);
        });
        this.createNew = false;
        this.$router.push('/products')
    },
  },
}
</script>
<style scoped>
input, textarea{
  width: 100% !important;
}
</style>