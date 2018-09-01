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
    <div class="" @click="request">接收：{{movies.a}}</div>
    <text>{{response}}zxczxc</text>
    <img class="image" src="../../../static/images/test.png"/>
    <img class="image" :src="response"/>

    <swiper :indicator-dots="true" :autoplay="true" :interval="1000" :duration="1000">
      <swiper-item v-for="(item, index) in hot_visa" :key="index">
        <image class="swiper-item-image" :src="response" mode="aspectFill"/>
      </swiper-item>
    </swiper>


  </div>
</template>

<script>
  import { getMovieData, getBoardData } from "@/utils/api";
  import { baseURL } from "@/utils/request";
  import Vue from "vue";
  import MpvueRouterPatch from "mpvue-router-patch";

  import { getStorage, setStorage } from "@/utils/wechat";

  const LAST_SPLASH_DATA = "LAST_SPLASH_DATA";
  Vue.use(MpvueRouterPatch);

  export default {
    data() {
      return {
        lists: [],
        movies: {},
        response: baseURL + "/images/test-copy.png",
        places: {
          Europe: {
            title: "Europe"
          },
          Asia: {
            title: "Asia"
          },
          America: {
            title: "America"
          },
          Africa: {
            title: "Africa"
          },
          Oceania: {
            title: "Oceania"
          },
          HK_MC_TW: {
            title: "港澳台"
          }
        },
        hot_visa: [{ title: 1, imgPath: "asd" }, { title: 2 }, { title: 3 }, { title: 4 }, { title: 5 }]
      };
    },

    mounted() {
      // this.getInitData();
    },

    methods: {
      async getCache() {
        try {
          let res = await getStorage(LAST_SPLASH_DATA);
          const { movies, expires } = res.data;
          // 有缓存，判断是否过期
          if (movies && expires > Date.now()) {
            return res.data;
          }
          // 已经过期
          console.log("uncached");
          return null;
        } catch (error) {
          return null;
        }
      },

      handleStart() {
        // TODO: 访问历史的问题
        wx.switchTab({
          url: "../board/main"
        });
      },

      async getInitData() {
        // let cache = await this.getCache()
        // if (cache) {
        //   this.movies = cache.movies
        //   return
        // }
        console.info("debug1");
        let data = await getBoardData({ board: "coming_soon", page: 1, count: 3 });
        this.movies = data;
        await setStorage(LAST_SPLASH_DATA, {
          movies: data,
          expires: Date.now() + 1 * 24 * 60 * 60 * 1000
        });
      },

      openSuccess() {
        wx.navigateTo({
          url: "../counter/main"
        });
      },

      goTo(title) {
        // wx.navigateTo({
        //   url: '../../counter/main?title=' + title
        // })
        this.$router.push("/pages/visa/list/main");
        // Vue.$router.app
      },

      request() {
        getMovieData().then(response => {
          this.response = response;
        });
      }
    }

  };
</script>

<style scoped src="./index.scss"></style>
