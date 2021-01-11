import React from "react"
import { Ionicons } from '@expo/vector-icons'
import {HeaderButton} from 'react-navigation-header-buttons'
  
const IconheaderButton = (props)=>(
    <HeaderButton IconComponent={Ionicons} iconSize={25} color="white" {...props} />
)

export default IconheaderButton