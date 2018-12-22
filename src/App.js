import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import {Header} from './components/partials/Header'
import {CategoriesList} from './components/categories/CategoriesList'
import {ListingCard} from './components/listings/ListingCard'
import ListingList from './components/listings/ListingList'
import {Listing} from './components/listings/Listing'



class App extends Component {
  render() {

    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className='container'>
              // <Route exact path="/" component={CategoriesList}/>
              <Route exact path="/listings" component={ListingList}/>
              <Route exact path="/listings/:id" component={Listing}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
