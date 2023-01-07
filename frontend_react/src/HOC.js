import React from 'react'

import {NavigationDots} from './components/index.js'
import {SocialMedia} from './components/index.js'
import './Hoc.scss'

const HOC = (props) => {
  return (
    <section className='app__Hoc'>
      <SocialMedia/>
       <props.wrappedComponent/>
       <NavigationDots isActive={props.isActive}/>
    </section>
  
  )
}

export default HOC