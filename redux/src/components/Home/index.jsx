import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/acoes'


class Home extends Component {


    render(){

        return(
            <div>
                <h1>Home Page</h1>
                <h1>{this.props.count}</h1>
                <br />
                <button onClick={()=>this.props.addOne()}>+</button>
                <button onClick={()=>this.props.removeOne()}>-</button>
                <br />
                <h1>{this.props.text}</h1>
                <br />
                <input type="text" onChange={event=> this.props.addText(event)} /> 
            </div>
        )
    }
}

const mapStateToProps = state =>({
    count : state.counts.count,
    text : state.counts.text
})

export default connect(mapStateToProps, actions)(Home)