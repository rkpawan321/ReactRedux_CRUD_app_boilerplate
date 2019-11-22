import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import BlogCreate from './blogs/BlogCreate';
import BlogEdit from './blogs/BlogEdit';
import BlogDelete from './blogs/BlogDelete';
import BlogList from './blogs/BlogList';
import BlogShow from './blogs/BlogShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <Router history={history}>
        <Header/>
        <Switch> 
            <Route path="/" exact component={BlogList}/>
            <Route path="/blogs/new" component={BlogCreate}/>
            <Route path="/blogs/edit/:id" component={BlogEdit}/>
            <Route path="/blogs/delete/:id" component={BlogDelete}/>
            <Route path="/blogs/:id" component={BlogShow}/>
             </Switch>
             </Router>
    )
};

export default App;