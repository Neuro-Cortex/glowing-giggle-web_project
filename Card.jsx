import React from 'react'

export default function Card({title,children,actions}){
  return (
    <div className="card">
      {(title || actions) && (
        <div className="card-header">
          {title && <div className="card-title">{title}</div>}
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}
