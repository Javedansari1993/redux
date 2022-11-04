import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function IceCreamContainer(props) {
    // console.log("props",props)
  return (
    <div>
        <h2>Number of IceCreams - {props.numofIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    // console.log("state",state)
    return {
        numofIceCreams:state.iceCream.numofIceCreams
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer);