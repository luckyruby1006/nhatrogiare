import React from 'react';
import '../src/css/App.css';
import '../src/css/style.css'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import  SignIn  from './components/SignIn';
import Navigation from'./components/componentHomePage/Navigation'
import SignUp from './components/SignUp';
import Search from './components/Search';
import ShowHome from './components/ShowHome';
import Post  from './components/Post';
import EditPost from './components/EditPost';
import FixPost from './components/EditPost/FixPost';
function App() {
  return (
    <BrowserRouter>
  
     <Navigation/>
     <Switch>
        <Route exact path='/'  component={HomePage}/>
        <Route exact path='/signin'  component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/showhome/:id' component={ShowHome}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path='/editpost' component={EditPost}/>
        <Route exact path='/fixpost/:id' component={FixPost}/>


      </Switch>
        </BrowserRouter>
  );
}

export default App;
