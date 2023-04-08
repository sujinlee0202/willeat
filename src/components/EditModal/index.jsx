import React, { useState } from 'react'
import styles from './styles.module.css'
import { uploadImage } from '../../api/cloudinary'
import { addNewPlace } from '../../api/firebase'
import { searchNaver } from '../../api/naver_search_place'
import { searchMap } from '../../api/naver_map'

const EditModal = ({onClick, setOpenEditModal}) => {
  const [file, setFile] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [place, setPlace] = useState({})
  const [imageUrl, setImageUrl] = useState()
  const [openMap, setOpenMap] = useState(false)

  const onChangeInput = (e) => {
    const {id, value, files} = e.target

    if(id === 'file') {
      setFile(files && files[0])
      const reader = new FileReader()
      reader.onload = () => {
        setImageUrl(reader.result)
      }
      reader.readAsDataURL(files && files[0])
      return
    }

    setPlace(place => ({...place, [id]: value}))
  }

  const onClickSearch = (e) => {
    e.preventDefault()
    setOpenMap(true)

    searchNaver(place.name)
    .then(res => res.data.items[0]) // mapx, mapy
    .then(item => {
      searchMap(item.mapx, item.mapy)
      setPlace(place => ({...place, address: item.roadAddress, mapx: item.mapx, mapy: item.mapy}))
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsUploading(true)

    uploadImage(file)
    .then(url => addNewPlace(place, url))
    .then(() => setTimeout(() => alert('성공적으로 지도에 추가됬습니다'), 1000))
    .finally(() => {
      setIsUploading(false)
      setFile('')
      setOpenEditModal(false)
    })
  }

  return (
    <div className={styles.modalContainer} onClick={onClick}>
      <form className={styles.searchForm}>
        <label className={styles.labelText}>이름 :</label>
        <input 
          type='text' 
          id='name' 
          placeholder='음식점 이름' 
          value={place.name ?? ''}
          className={styles.input}
          onChange={onChangeInput} 
          required
        />
        <button onClick={onClickSearch} className={styles.btnSearch}>검색</button>
      </form>
      <form 
        onSubmit={handleSubmit} 
        className={styles.formContainer}
      >
        <div className={styles.fileButton}>
          {openMap 
            ? <div id='searchMap' className={styles.map}></div> 
            :'위치'}
        </div>
        {imageUrl 
          ? <img src={imageUrl} htmlFor='file' alt={place.name} className={styles.image} />
          : <label htmlFor='file' className={styles.fileButton}>파일 업로드</label>}
        <input 
          type='file' 
          id='file' 
          className={styles.inputFile} 
          onChange={onChangeInput}
        />
        <input 
          type='text' 
          id='name' 
          placeholder='음식점 이름' 
          value={place.name ?? ''} 
          onChange={onChangeInput} 
          className={styles.inputName} 
          required
        />
        <div className={styles.inputContainer}>
          <label>카테고리 :</label>
          <input 
            type='text' 
            id='category' 
            placeholder='카테고리' 
            value={place.category ?? ''}
            className={styles.input}
            onChange={onChangeInput} 
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label>소개글 :</label>
          <input 
            type='text' 
            id='description' 
            placeholder='음식점에 대한 소개글 작성' 
            value={place.description ?? ''} 
            className={styles.input}
            onChange={onChangeInput} 
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label>태그 :</label>
          <input 
            type='text'
           id='tag' 
           placeholder='키워드 및 태그 (, 로 구분)' 
           value={place.tag ?? ''} 
           className={styles.input}
           onChange={onChangeInput} 
           required
          />
        </div>
        <button className={styles.btnUpload}>
          {isUploading ? '업로드 중...' : '장소 등록하기'}
        </button>
      </form>
    </div>
  )
}

export default EditModal