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

export function getYourAddressInfo(provinceCode) {
  return request({
    url: '/charts/address',
    method: 'get',
    params: provinceCode
  })
}

export function getChinaAll() {
  return request({
    url: '/charts/china/all',
    method: 'get'
  })
}

export function getProvinceDaily(code) {
  return request({
    url: '/charts/china/province',
    method: 'get',
    params: code
  })
}

export function getProvinceCompare() {
  return request({
    url: '/charts/china/province/compare',
    method: 'get',
  })
}

export function getProvinceAll() {
  return request({
    url: '/charts/china/province/all',
    method: 'get',
  })
}

export function getProvinceCurrent() {
  return request({
    url: '/charts/china/province/current',
    method: 'get',
  })
}
