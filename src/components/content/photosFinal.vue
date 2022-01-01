<template>
  <div class='final'>
    <h1>處理完成的圖片</h1>
    <span v-for='(item, index) in final' :key='index'>
      <img :src='item.id'>
    </span>
  </div>
</template>

<script>


export default {
  name: 'photosFinal',
  props: {
    final: []
  }
}
</script>

<style scoped>
  .final {
    width: 250px;
    flex : 1;
    text-align: center;
  }
  
  span img {
    width: 150px;
    height: 150px;
    background-color: pink;
  }
</style>
