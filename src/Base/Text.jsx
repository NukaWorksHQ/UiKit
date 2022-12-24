import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextElement = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: ${({ size }) => size ? size + 'pt' : '9pt'};
  color: ${props => (props.disabled ? '#bababa' : props.color || 'black')};`

export function Text ({ className, text, disabled, color, size, children, ...props }) {
  const [disable, setDisable] = React.useState(false)

  useEffect(() => {
    if (disabled) {
      setDisable(true)
    } else setDisable(false)
  }, [disabled])

  return (
    <TextElement
        className={['Base__Text', 'Text', disable ? 'Base__Text--Disabled' : '', className].join(' ')}
        disabled={disable}
        size={size}
        color={color}
        {...props}
    >
        { text || children }
    </TextElement>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}

Text.defaultProps = {
  disabled: false
}
