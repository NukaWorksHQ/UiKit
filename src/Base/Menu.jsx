import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useDetectClickOutside } from 'react-detect-click-outside'
import styled from 'styled-components'

function menuDrop (displayMenu, children) {
  if (displayMenu) return children
}

const MenuElement = styled.div`
  font-family: "Outfit", sans-serif;
`

const MenuTitleElement = styled.div`
  font-size: 10pt;
  border-radius: 5px;
  user-select: none;
  -webkit-user-select: none;
  padding: 0.4em;
  width: fit-content;

  :hover {
    background-color: rgba(234, 234, 234, 0.4);
  }
`

export function Menu ({ children, className, title, ...props }) {
  const [displayMenu, setDisplayMenu] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setDisplayMenu(false) })
  const menuTitle = useRef(null)

  useEffect(() => {
    if (displayMenu) {
      menuTitle.current.classList.add('active')
    } else {
      menuTitle.current.classList.remove('active')
    }
  })

  return (
    <MenuElement
      className={['Base__Menu', 'Menu', className].join(' ')}
      ref={ref}
      onClick={e => {
        setDisplayMenu(!displayMenu)
        e.preventDefault()
      }}
      {...props}
    >

      <MenuTitleElement className={'Base__Menu--Title'} ref={menuTitle}>{ title }</MenuTitleElement>
      { menuDrop(displayMenu, children) }
    </MenuElement>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any.isRequired,
  children: PropTypes.any,
  props: PropTypes.any
}
