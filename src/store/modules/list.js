import {getVisaListData} from '@/utils/api'
import {LIST_VISA_LIST} from '@/store/mutations-type'

const state = {
  lists: {
    Europe: {
      page: 1,
      hasMore: true,
      visas: []
    },
    Asia: {
      page: 1,
      hasMore: true,
      visas: []
    },
    America: {
      page: 1,
      hasMore: true,
      visas: []
    },
    Africa: {
      page: 1,
      hasMore: true,
      visas: []
    },
    Oceania: {
      page: 1,
      hasMore: true,
      visas: []
    },
    HK_MC_TW: {
      page: 1,
      hasMore: true,
      visas: []
    }
  },
}

const mutations = {
  [LIST_VISA_LIST](state, {place, data}) {
    if (data.length) {
      state.lists[place].visas.push.apply(state.lists[place].visas, data)
    } else {
      state.lists[place].hasMore = false
    }
  }
}

const actions = {
  async getVisas({state, commit}, place) {
    if (!state.lists[place].hasMore) {
      return
    }
    let data = await getVisaListData({place: place, page: state.lists[place].page++})
    commit(LIST_VISA_LIST, {place, data})
  }
}

export default {
  state,
  mutations,
  actions
}
