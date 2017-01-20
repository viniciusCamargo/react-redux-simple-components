import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addRadio } from './RadioActions'

class Radio extends Component {
  render () {
    const { addRadio, radio, name } = this.props
    const options = this.props.options.map(option => (
      <label key={uuid()}>
        <input
          type='radio'
          name={name}
          checked={radio[name] === option.label}
          onChange={() => {
            addRadio(name, option.label)
          }}
        />
        {option.label}
      </label>
    ))

    return (
      <div>
        {options}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  radio: state.radios
})

const mapDispatchToProps = (dispatch) => ({
  addRadio: bindActionCreators(addRadio, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Radio)
