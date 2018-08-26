<template>
  <div class="page">
    <div class="button">
      <text class="text" @click="openSuccess">跳转</text>
    </div>
    <button>按钮</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    methods: {
      openSuccess() {
        wx.navigateTo({
          url: '../counter/main'
        })
      },
    }


  }
</script>

<style scoped src="./index.scss"/>
