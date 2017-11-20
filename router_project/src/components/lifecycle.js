import React, {Component} from 'react'

class Lifecycle extends Component {
  // get default state
  constructor(props){
    super(props)
    // set initial state
    this.state = {
      title: 'Pulp fiction in cinemas',
      body: 'some dummy text'
    }
  }

  // before it gets created
  componentWillMount(){
    console.log('Before component gets created')
  }
  //render JSX
  render(){
    return(
      <div>
        <h4>{this.state.title}</h4>
        <br/>
        <div>{this.state.body}</div>
      </div>
      )
  }

  // after component is mounted

  componentDidMount(){
    console.log('After a component is mounted')
  }

}

export default Lifecycle