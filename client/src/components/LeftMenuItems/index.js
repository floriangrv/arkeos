import React from 'react'

import './styles.scss';

const LeftMenuItems =({Icon, name}) => {
  return (
    <div className="leftmenu-items">
    <Icon />
      <h2>{name}</h2>
    </div>
  )
}

export default LeftMenuItems
