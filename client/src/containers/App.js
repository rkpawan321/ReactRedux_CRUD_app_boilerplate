import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import BlogCreate from '../components/blogs/BlogCreate';
import BlogEdit from '../components/blogs/BlogEdit';
import BlogDelete from '../components/blogs/BlogDelete';
import BlogList from '../components/blogs/BlogList';
import BlogShow from '../components/blogs/BlogShow';
import Header from '../components/Header';
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