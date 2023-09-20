import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Modal = (props) => {
    const Backdrop = (props) =>{
        return(
            <div className={classes.backdrop}></div>
        )
    }

    const ModalOverlay = (props) =>{
        return(
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }

  return (
    <>
    {ReactDom.createPortal(<Backdrop/>,document.getElementById('overlays'))}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
    
    
    </>
  )
}


export default Modal