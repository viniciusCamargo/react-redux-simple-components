import React from 'react'

const Option = ({ id, value, text }) => (
  <option
    key={id}
    value={value}
  >
    {text}
  </option>
)

export default Option
