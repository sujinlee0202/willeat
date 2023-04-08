import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import { GrEdit } from 'react-icons/gr'
import { login, logout } from '../../api/firebase'
import { loginContext } from '../../context/loginContext'
import EditModal from '../EditModal'

const Login = () => {
  const {user, setUser} = useContext(loginContext)
  const [openEditModal, setOpenEditModal] = useState(false)
  
  const onClickLogin = () => {
    login().then(user => setUser(user))
  }

  const onClickLogout = () => {
    logout().then(user => setUser(user))
  }

  const onClickEditModal = () => {
    setOpenEditModal(true)
  }

  const onClickEditModalBack = () => {
    setOpenEditModal(false)
  }

  return (
    <>
      <div className={styles.loginContainer}>
        {user && <img src={user.photoURL} alt={user.displayName} className={styles.googleUrl}></img>}
        {user && user.isAdmin && <GrEdit className={styles.edit} onClick={onClickEditModal} />}
        {user 
          ? <button className={styles.button} onClick={onClickLogout}>Logout</button>
          : <button className={styles.button} onClick={onClickLogin}>Login</button>
        }
      </div>
      {openEditModal && (
        <div className={styles.modalBack} onClick={onClickEditModalBack}>
          {openEditModal && <EditModal onClick={(e) => e.stopPropagation()} setOpenEditModal={setOpenEditModal} />}
        </div>
      )}
    </>
  )
}

export default Login