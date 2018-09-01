<template>
  <div class="page">
    <div v-for="(item, index) in lists[place].visas">
      <text>{{'title: ' + item.title + ' subTitle: ' + item.subTitle + 'price: ' + item.price}}</text>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  // import wx from '@/utils/wx'

  export default {
    data() {
      return {
        place: 'Asia'
      }
    },

    computed: {
      ...mapState('list', ['lists'])
    },

    mounted() {
      this.getVisaList()
    },

    methods: {
      ...mapActions('list', [
        'getVisas'
      ]),

      async getVisaList() {
        await this.getVisas('Asia')
      }
    }

  }
</script>

<style scoped src="./index.scss"></style>
