import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  color: deeppink;
`

export function Test ({ children, className, ...props }) {
  return (
    <Div
        className={['CATEGORY__test', 'test', className].join(' ')}
        {...props}
    >
        Hello World !
    </Div>
  )
}

Test.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any
}
