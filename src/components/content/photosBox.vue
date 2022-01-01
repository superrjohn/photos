<template>
  <div class='box'>
    <photos-list @addTo='addTo'/>
    <photos-array :photos-list='photos' @imgTo='imgTo' />
    <photos-final :final='imgList'/>
  </div>
</template>

<script>
import photosList from './photosList.vue'
import photosArray from './photosArray.vue'
import photosFinal from './photosFinal.vue'

export default {
  name: 'photosBox',
  components: {
   photosList,
   photosArray,
   photosFinal
  },
  data() {
    return {
      photos: [],
      imgList: []
    }
  },

  methods: {
    addTo(imgUrl) {
     this.photos.push(imgUrl)
     console.log(this.photos)
    },
    imgTo(photosList) {
     this.imgList.push(photosList)
     console.log(this.imgList)
  }
}
}
</script>

<style scoped>
  .box {
    display: flex;
    margin: 30px auto;
    width: 750px;
    background-color: rgba(29, 209, 164, 0.48);
    border: 2px solid;
    
  }

  
</style>
