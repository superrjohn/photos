<template>
  <div class='array' >
    <h1>Queue過程</h1>
    <div>
     Queue正在處理{{photosList.length}}個圖片
    </div>
    <input type='button' value='取消最後一個' @click='del' />
  </div>
</template>

<script>
import {queue} from '../../common/utils.js'

export default {
  name: 'photosArray',
  props: {
    photosList: []
  },
  data() {
    return {
      x: 0
    }
  },
  methods: {
    imgTo() {
      this.$emit('imgTo',this.photosList)
       this.photosList.pop()
    },
    del() {
      this.photosList.splice(-1,1)
      
    }

  /*,
  watch: {
   photosList() {
     if(this.photosList.length != 0 ){
     queue(this.imgTo,5000)
   }
  }
  }*/
  },
  computed: {
    change() {
      return (this.photosList.length != 0)? queue(this.imgTo,4000):''
        
      }
    
  }
} 

</script>

<style scoped>
  .array {
    width: 250px;
    flex : 1;
    border-right: 2px solid;
    text-align: center;
  }

  input {
    margin: 10px auto;
  }
</style>
