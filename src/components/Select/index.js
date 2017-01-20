import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addSelect } from './SelectActions'
import Option from './Option'

class Select extends Component {
  render () {
    const { addSelect, selectId, selects } = this.props
    const options = this.props.options.map(option => (
      <Option key={uuid()} value={option.value} text={option.text} />
    ))

    return (
      <select value={selects[selectId]} onChange={(e) => addSelect(selectId, e.target.value)}>
        {options}
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  selects: state.selects
})

const mapDispatchToProps = (dispatch) => ({
  addSelect: bindActionCreators(addSelect, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Select)
