import React, { Component } from 'react';

class hideble extends Component {
   state ={
       isHidden: false
   }
  toggleIsHidden = ()=>{
    //   this.setState({
    //       isHidden: !this.state.isHidden
    //   })
      this.setState(currentState=>({
        isHidden : !currentState.isHidden
      }))
  }
  
    render() {
        return (
            <div>
                <button onClick={this.toggleIsHidden}>dishid</button>
                {!this.state.isHidden&&this.props.text}
            </div>
        );
    }
}

export default hideble;