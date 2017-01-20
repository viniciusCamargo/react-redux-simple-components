import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Select from './Select'
import Radio from './Radio'

const optionsSelect = [
  { value: 'volvo', text: 'Volvo' },
  { value: 'saab', text: 'Saab' },
  { value: 'fiat', text: 'Fiat' },
  { value: 'audi', text: 'Audi' }
]

const optionsRadio = [
  { label: 'Volvo' },
  { label: 'Saab' },
  { label: 'Fiat' },
  { label: 'Audi' }
]


const App = () => (
  <div>
    <Input cara='primeiroInput' placeholder='eae' />
    <Input cara='segundoInput' placeholder='pqp' />
    <Input cara='terceiroInput' />
    <Input cara='quartoInput' />
    <Checkbox value='primeiroCheckbox' />
    <Checkbox value='segundaCheckbox' />
    <Select selectId='primeiroSelect' options={optionsSelect} />
    <Select selectId='segundooSelect' options={optionsSelect} />
    <Radio name='primeiroRadio' options={optionsRadio} />
    <Radio name='segundoRadio' options={optionsRadio} />
  </div>
)

export default App
