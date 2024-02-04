import React from 'react'
import reactDom from 'react-dom';

const MODAL_STYLES ={
    position: 'fixed',
    top : '50%',
    left: '50%',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '90%',
    width: '90%'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}
const cart_close={
    backgroundColor: "white",
    marginLeft: '96%',
    border: 'none',
    marginTop: '18px',
    fontSize: '1.2rem',
    cursor: 'pointer',
}





export default function Model({children, onClose}) {

    return reactDom.createPortal(
        <>
       <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
            <button  style={cart_close} onClick={onClose}> 
            
            <i className="fas fa-times"></i>
 </button>
            {children}
            </div>
            </div> 
        </>,
        document.getElementById('cart-root')
    )
  
}
