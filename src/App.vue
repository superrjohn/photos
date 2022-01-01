<template>
  <div id="app">
    <h3>說明:
      <p>1.photosBox放三個組件:photosList,photosArray,photosFinal</p>
      <p>2.組件內的資料通過子傳父,再傳給有需要的組件</p>
      <p>3.queue每4秒處理一個圖片傳送</p>
      <p>4.因我直接在data存放圖片路徑,經傳遞後路徑變成沒有../../assets,所以在處理完成的圖片會有誤,但如果有後端api就應該不會有這問題</p>
      <p>5.刪除queue我是用pop,但有bug。我盡力了</p>
    </h3>
    <photos-box/>
  </div>
</template>

<script>
import photosBox from './components/content/photosBox.vue'

export default {
  name: 'App',
  components: {
   photosBox
  }
}
</script>

<style scoped>

</style>
