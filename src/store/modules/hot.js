import {getHotVisaData} from '@/utils/api'
import {HOT_VISA_LIST} from '@/store/mutations-type'

const state = {
  hot: [
    {title: '', subTitle: '', price: 100, originalPrice: 200, image: ''}
  ]
}

const mutations = {
  [HOT_VISA_LIST](state, {hot}) {
    let data
    state.hot = state.board
  }
}

const actions = {
  async getHotVisas({state, commit}) {
    const tasks = state.boards.map(board => {
      return getBoardData({board: board.key, page: 1, count: 8})
    })
    let boards = await Promise.all(tasks)
    commit(BOARD_MOVIE_LIST, {boards})
  }
}

export default {
  state,
  mutations,
  actions
}
