import React from 'react'
import Paperz from '../../Assets/Images/paperz-logo.svg'
import Dorfus from '../../Assets/Images/dorfus-logo.svg'
import Martino from '../../Assets/Images/martino-logo.svg'
import Square from '../../Assets/Images/square-logo.svg'
import Gobona from '../../Assets/Images/gobona-logo.svg'

const Logos = () => {
  return (
    <div className='logos'>
        <img src={Paperz}/>
        <img src={Dorfus}/>
        <img src={Martino}/>
        <img src={Square}/>
        <img src={Gobona}/>
    </div>
  )
}

export default Logos