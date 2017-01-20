import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInput } from './InputActions'

class Input extends Component {
  render () {
    const { changeInput, inputs, cara, placeholder } = this.props
    return (
      <input
        type='text'
        defaultValue={inputs[cara]}
        onChange={(e) => {
          const inputValue = e.target.value
          changeInput(inputValue, cara)
        }}
        placeholder={placeholder}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: state.inputs
})

const mapDispatchToProps = (dispatch) => ({
  changeInput: bindActionCreators(changeInput, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
