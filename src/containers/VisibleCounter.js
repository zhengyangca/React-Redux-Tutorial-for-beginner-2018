import React, {Component} from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import * as actions from '../actions'


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count,
        wish_value: state.wish_value
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(actions.increaseTodo()),
        onUpdateClick: event => dispatch((
            actions.updateTodo(event.target.value)
        )),
    }
}

// Connected Component
const VisibleCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default VisibleCounter;