import request from './request'

/**

 */
export function getBoardData ({ board = 'top250', page = 1, count = 20, city = '北京', search = '' } = {}) {
  console.info('debug2')
  let params = {}
  params.id = 1
  // if (board !== 'us_box') {
  //   params.start = (page - 1) * count
  //   params.count = count
  // }
  // if (board === 'in_theaters') {
  //   params.city = city
  // }
  // if (board === 'search') {
  //   params.q = search
  // }
  console.info(`/miniprogram/${board}`)
  return request.get(`miniprogram/${board}`)
}

/**
 * 获取电影条目信息：
 *  接口地址: subject/:id
 *  要求权限：movie_basic_r
 *  可传参数：
 *    @params {number} id 电影id
 */
export function getMovieData () {
  return request.get('miniprogram/index')
}

export function getVisaListData({place = 'Asia', page =  1}) {
  let params = {}
  params.place = place
  params.page = page
  return request.get('miniprogram/lists', params)
}
