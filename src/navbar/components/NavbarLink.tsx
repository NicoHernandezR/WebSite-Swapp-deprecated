import React from 'react'
import NavbarLinkProp from '../types/NavbarLinkProp'

function NavbarLink({url, text} : NavbarLinkProp) {
  return (
    <a className='font-title text-[20px]'
      href={url}>
      {text}
    </a>
  )
}

export default NavbarLink