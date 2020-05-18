import React, { useState, useEffect } from 'react'
import PictureSelect from '../../components/pictureSelect'
import { getPictureList, PictureInfo } from '../../services/api'

const Page: React.SFC = () => {
  const [value, setValue] = useState(['1'])
  const [pictures, setPictures] = useState<PictureInfo[]>([])

  async function fetchPictures() {
    const res = await getPictureList()
    setPictures(res)
  }
  
  useEffect(() => {
    fetchPictures()
  }, [])
  
  return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
}

export default Page