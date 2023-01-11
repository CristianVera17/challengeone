import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Icon = ({icon, cssicon ,icon2}) => {
  return (
    <div>
       <FontAwesomeIcon className={cssicon} icon={icon}/>
    </div>
  )
}
