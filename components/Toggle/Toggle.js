import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
`
const CheckBox = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
const Label = styled.label`
  margin-right: 10px;
  color: #2196F3;
`
const Control = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196F3;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`

function Toggle({label, value, onChange}) {
  const handleChange = (e) => onChange(e.target.checked)
  return (
    <Container>
      <Label>{label}</Label>
      <CheckBox>
        <Control type="checkbox" checked={value} onChange={handleChange} data-testid="toggle-change"/>
        <Slider />
      </CheckBox>
    </Container>
  )
}

Toggle.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

Toggle.defaultProps = {
  label: '',
  value: true,
  onChange: () => {}
}

export default memo(Toggle)