import React from 'react'

export default function Modal({isOpen, onClose, title, children}){
  if(!isOpen) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <div style={{fontWeight:700}}>{title}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
