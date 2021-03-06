import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2px 16px 16px 16px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Line = styled.p`
  margin: 4px;
`

function Card({userId, title, description}) {
  const textLines = description.split('\n')
  return (
    <Container>
      <h4><b>{`User ${userId}`}</b> - {title}</h4>
      {textLines.map((line, index) => <Line key={index}>{line}</Line>)}
    </Container>
  )
}

Card.propTypes = {
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

Card.defaultProps = {
  userId: 1,
  title: 'qui est esse',
  description: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
}

export default memo(Card)