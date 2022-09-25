import React, { Component } from 'react';
class Counter extends Component {

     state = { 
        count:this.props.value,
        tags: ['tag1','tag2','tag3']
      } ;

//constructor(){
 //   super();
   // this.handleIncrement=this.handleIncrement.bind(this);
//  }
//{this.renderTags()}


      handleIncrement = ()=>{
    //console.log('increment Clicked !',this);
    this.setState({count : this.state.count + 1});
    };
    

    render() { 
        console.log('prop',this.props);
         return (
        <div>
        <h4>Counter #{this.props.id},{this.props.children}</h4>
        <span className={this.badges()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Ajouter</button>
        {this.state.tags.length ==0 && "create a new tag!"}
         <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Supprimer! </button>
        
        </div>
        );
    }


 renderTags(){
    if(this.state.tags.length==0)return <p>there is no tags!</p>
    return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>
 }


    badges() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

formatCount(){
const { count}= this.state;
return count===0?"zero" : count ;

}


}
 
export default Counter;