import request from '../utls/request'

export interface PictureInfo {
  id: string;
  name: string;
  url: string;
}

export function getPictureList(): Promise<PictureInfo[]> {
  return request.get('/pictureList').then((res: any) => {
    if (res instanceof Error) {
      console.error(res)
      return []
    } else {
      return res.data
    }
  })
}