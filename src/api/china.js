import request from '@/utils/request'

export function getProvinceDailyData() {
  return request({
    url: '/charts/province/daily',
    method: 'get'
  })
}

export function getChinaCumulateInfo() {
  return request({
    url: '/charts/china/cumulate',
    method: 'get'
  })
}

export function getChinaConfirmHistory() {
  return request({
    url: '/charts/china/confirmed',
    method: 'get'
  })
}
