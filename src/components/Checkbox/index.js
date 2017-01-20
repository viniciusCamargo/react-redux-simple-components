import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCheckbox } from './CheckboxActions'

class Checkbox extends Component {
  render () {
    const { addCheckbox, checkbox, value } = this.props
    return (
      <input
        type='checkbox'
        checked={checkbox[value] || false}
        onChange={(e) => addCheckbox(value, e.target.checked)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  checkbox: state.checkboxes
})

const mapDispatchToProps = (dispatch) => ({
  addCheckbox: bindActionCreators(addCheckbox, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)
