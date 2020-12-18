import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import {toggleCompletion, removeItem, addItem, addItemFromWeb } from '../actions'
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import ls from 'local-storage'
import Axios from "axios";
import MyNavbar from "./my-navbar/my-navbar.component";
import ContactForm from "./contact-form/contact-form.component";
import Expertise from '../components/Expertise/Expertise'
import Skills from "./skills/skills.component";

 
class App extends Component {
   
  componentDidMount() {  
    this.props.addItemFromWeb();
    
  }

  renderList() {
    return this.props.todos.map(item => {
      return (
        <li  
          key={item.id}
          className={"todo " + (item.completed ? "completed" : "")}
          onClick={() => this.props.toggleCompletion(item.id)}
          >
          <div className="view">
            <label> { item.title } </label>
            <button className="destroy" 
              onClick={() => this.props.removeItem(item.id)}
            />
          </div>
        </li>
      )
    })
  }

  completedList() {
    return this.props.todos.filter(item => item.completed === true);
  }

  addItemToList(event) {
    if(event.keyCode === 13 && event.target.value.trim()) {
      this.props.addItem(event.target.value);
      event.target.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
     <MyNavbar/>
     <Switch>
      <Route exact path='/' render={()=>{
        return(
          <section>
 <div  className="todos">
          <h1>TO DO LIST</h1>
        <div className="todoapp">
          <header className="header">
            <input
              className="new-todo"
              autoFocus
              autoComplete="off"
              placeholder="What's on your Mind?"
              onKeyUp = {(event) => this.addItemToList(event)}
            />
          </header>
          {this.props.todos.length ?
            <div>
              <section className="main">
                <ul className="todo-list">
                  {this.renderList()}
                </ul>
              </section>
            <footer className="footer">
              <div className="total">Items: {this.props.todos.length}</div>
              <button  onClick={this.props.addItemFromWeb}> Async Add </button>
              <div className="completed">Completed: {this.completedList().length}</div>
            </footer>
            </div>
          : null }
        </div>
          </div>
          </section>
         
        )
      }}  />

<Route exact path='/contact' render={()=>{
        return(
         <div>
           <ContactForm/>
         </div>
         
        )
      }}  />

<Route exact path='/skills' render={()=>{
        return(
         <div className="skills">
           <Skills/>
         </div>
         
        ) 
      }}  />

<Route exact path='/expertise' render={()=>{
        return(
         <div className="expertise">
          <Expertise/>
         </div>
         
        ) 
      }}  />

       </Switch>
   </BrowserRouter>

      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state };
}

const mapDispatcherstoProps = dispatch =>  {
  return {
    toggleCompletion: (id) => dispatch(toggleCompletion(id)),
    removeItem: (id) => dispatch(removeItem(id)),
    addItem: (title)=> dispatch(addItem(title)),
    addItemFromWeb: ()=> dispatch(addItemFromWeb())   
  }
}


export default connect(mapStateToProps, mapDispatcherstoProps)(App);
