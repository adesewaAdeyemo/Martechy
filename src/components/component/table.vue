<template>
  <div class="scrollable">
  <div class="table">    
    <div class="row table-row table-header">
        <div class="col" v-for="(column, index) in columns" :key="index">
        <div class="header-cell">{{ column.label }}</div>
        </div>
    </div>
    <div class="scroll-y">
    <div v-for="(row, rowIndex) in paginatedRows" :key="rowIndex" class="row table-row">
      <div class="col" v-for="(column, colIndex) in columns" :key="colIndex">
        <div class="data-cell">
            <div class="row align-items-center" v-if="column.field === 'imageUrl'">
                <div class="table-img"><img :src="row.imageUrl" alt="img" height="40" width="40" style="border-radius: 50% !important;" /></div>  
            </div>
            <div class="" v-else>
              <span>{{ row[column.field] }}</span>
            </div>

          </div>
      </div>
    </div>
    </div>
  </div>
  </div>
    <div class="d-flex justify-content-between">
        <div class="">
            <i class="bi bi-database-fill"></i>    <span class="bg-light">Available goods</span>
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1" class="bg-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg></button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: Array,
    perPage: Number,
  },
  data() {
    return {
      currentPage: 1,
      columns: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Category',
          field: 'category',
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Description',
          field: 'description',
        },
        {
          label: 'Unit Price',
          field: 'unitPrice',
        },
        {
          label: 'Image',
          field: 'imageUrl',
        },
        {
          label: 'Units In Stock',
          field: 'unitsInStock',
        },
        // {
        //   label: '',
        //   field: '',
        // },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.perPage);
    },
    paginatedRows() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.data.slice(startIndex, endIndex);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
  },
};
</script>

<style scoped>
.bg-light{
    background: #fff !important;
}
.header-cell {
  font-weight: bold;
}
.name{
    text-align: left;
}

.data-cell, .header-cell {
  text-align: center;
  padding: 10px;
}
.table-header, .header-cell{
    background-color: #4b74e2 !important;
    color: #fff;
}
.view-all{
    color: #4b74e2 !important;
}
.table-row{
    align-items: center;
  background-color: #fff;
  border-radius: 4px !important;
  box-shadow: 0 2px 8px rgba(128, 123, 123, 0.26);
  margin: 1% 0;
}
p{
    margin: 0;
}
span{
    padding: 5px 20px;
    border-radius: 14px;

}
.active-span{
    padding: 5px 20px;
    background-color: rgb(5, 111, 250);
    color: #fff;
}
.inactive-span{
    background-color: rgb(255, 38, 0);
    color: #fff;
}
.nil-span{
    background-color: rgba(185, 185, 185, 0.4);
}
.card-img{
    border-radius: 50% !important;
}
.drop{
    text-align: right;
}
/* @media screen and (max-width: 1400px) { */
  .table{
    min-width: 1400px;
  }
  .scrollable{
    width: 100% !important;
    overflow-x: scroll !important;
  }
  .scroll-y{
    overflow-y: scroll !important;
    height: 600px;
  }
/* } */
</style>