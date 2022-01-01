<template>
  <div class='list'>
    <h1>圖片</h1>
    <span v-for='(item, index) in imgUrl' :key='index'>
      <img :src='item.id'>
      <input type='button' value='傳送' @click='addTo(index)'/>
    </span>
  </div>
</template>

<script>


export default {
  name: 'photosList',
  components: {
   
  },
  data() {
    return {
     imgUrl :[
       {id: require("../../assets/img/phone.svg")},
       {id: require("../../assets/img/pointer.svg")},
       {id: require("../../assets/img/shopping.svg")},
       {id: require("../../assets/img/vip.svg")}
     ]
    }
  },
  methods: {
    addTo(index) {
      this.$emit('addTo',this.imgUrl[index])
    }
  }
}
</script>

<style scoped>
  .list {
    width: 250px;
    flex: 1;
    border-right: 2px solid;
    text-align: center;
  }

  span img {
    width: 150px;
    height: 150px;
  }

  input {
    display: block;
    margin: 3px auto;
  }
</style>
