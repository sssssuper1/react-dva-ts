import request from '../utls/request'

export function getPictureList() {
  return request.get('/pictureList')
}