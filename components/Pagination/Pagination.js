import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
`
const Item = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  cursor: pointer;
  ${props => props.active && `
    background-color: #2196F3;
    color: white;
  `}
  &:hover {
    ${props => !props.active && `
      background-color: #ddd;
    `}
  }
`

function Pagination({rowsPerPage, total, page, onChange}) {
  const lastPage = Math.ceil(total/rowsPerPage)
  const items = []
  for (let i = 1; i <= lastPage; i ++) {
    items.push(i)
  }
  
  const navigateTo = (num) => () => onChange(num)
  return (
    <Container>
      <Item onClick={navigateTo(1)} data-testid="navigate-to-first-page">&laquo;</Item>
      {items.map(item =>
        <Item key={item} active={item === page} onClick={navigateTo(item)}>{item}</Item>
      )}
      <Item onClick={navigateTo(lastPage)} data-testid="navigate-to-last-page">&raquo;</Item>
    </Container>
  )
}

Pagination.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  rowsPerPage: 5,
  total: 100,
  page: 1,
  onChange: () => {}
}

export default memo(Pagination)