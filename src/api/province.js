import request from '@/utils/request'

export function getProvinceDailyData(){
  return request({
    url: '/charts/province/daily',
    method: 'get'
  })
}
