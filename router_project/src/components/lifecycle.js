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

  componentWillRecieveProps(){
    console.log("this is after you click a link; when props are sent somewhere")
  }

  // before it gets created
  componentWillMount(){
    console.log('Before component gets created')
  }


  componentWillUpdate(){
    console.log("BEFORE UPDATE")
  }

  componentDidUpdate(){
    console.log("AFTER UPDATE")
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.title === "NewTitle"){return false}
    return true
  }

  //render JSX
  render(){
    return(
      <div>
        <h4>{this.state.title}</h4>
        <br/>
        <div>{this.state.body}</div>
        <div onClick={()=>this.setState({title: "NewTitle"})}> clickme</div>
      </div>
      )
  }

  // after component is mounted

  componentDidMount(){
    console.log('After a component is mounted')
  }

  componentWillUnmount(){
    console.log('goodbye!')
  }

}

export default Lifecycle