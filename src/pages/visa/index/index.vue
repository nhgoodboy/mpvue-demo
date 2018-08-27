<template>
  <div class="page">
    <div class="place">
      <div v-for="(place, index) in places" :key="index">
        <div class="place-item">
          <text>{{place.title}}</text>
        </div>
      </div>
    </div>

    <div class="middle">
      <text class="text-normal">热门签证</text>
    </div>

    <list class="list">
      <cell v-for="(item, index) in hot_visa" :key="index" @click="goTo(item.title)">
        <div class="list-item">
          <div class="list-item-left">

          </div>
          <div class="list-item-right">
            <text class="text-normal">qweqwe</text>
            <text class="text-small">123456</text>
          </div>
        </div>
      </cell>
    </list>

    <div class="" @click="request">发送请求</div>
    <text>{{response}}</text>
  </div>
</template>

<script>
  import { getMovieData } from '@/utils/api'

  export default {
    data () {
      return {
        response: '123',
        places: {
          Europe: {
            title: 'Europe'
          },
          Asia: {
            title: 'Asia'
          },
          America: {
            title: 'America'
          },
          Africa: {
            title: 'Africa'
          },
          Oceania: {
            title: 'Oceania'
          },
          HK_MC_TW: {
            title: '港澳台'
          }
        },
        hot_visa: [{title: 1}, {title: 2}, {title: 3}, {title: 4}, {title: 5}]
      }
    },

    methods: {
      openSuccess () {
        wx.navigateTo({
          url: '../counter/main'
        })
      },

      goTo (title) {
        wx.navigateTo({
          url: '../../counter/main?title=' + title
        })
        // this.$router.push('/pages/counter/main')
      },

      request () {
        // this.axios.get("index").then((response) => {
        //   this.response = response;
        // })

        // this.$api.get('index', {
        //
        // }, response => {
        //   if (response.status >= 200 && response.status < 300) {
        //     console.log(response.data) // 请求成功，response为成功信息参数
        //   } else {
        //     console.log(response.message) // 请求失败，response为失败信息
        //   }
        // })
        getMovieData().then(response =>{
          this.response = response
        })
      }
    }

  }
</script>

<style scoped src="./index.scss"/>
