import React, { Component } from 'react';
import * as redux from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import {Header} from './components/partials/Header'
import {CategoriesList} from './components/categories/CategoriesList'
import {ListingCard} from './components/listings/ListingCard'
import ListingList from './components/listings/ListingList'
import {Listing} from './components/listings/Listing'



class App extends Component {
  render() {

    const store = redux.createStore(()=>{
      return{
        listings: [{
          id: 1,
          title: "BoomBox",
          state: "AZ",
          street: "Haupt strasse",
          category: "electronics",
          condition: "good",
          image: "http://via.placeholder.com/350x250",
          description: "Very nice item",
          dailyRate: 33,
          createdAt: "24/12/2017"
          },
          {
          id: 2,
          title: "BoomBox",
          state: "AZ",
          street: "Haupt strasse",
          category: "electronics",
          condition: "good",
          image: "http://via.placeholder.com/350x250",
          description: "Very nice item",
          dailyRate: 33,
          createdAt: "24/12/2017"
          },
          {
          id: 3,
          title: "BoomBox",
          state: "AZ",
          street: "Haupt strasse",
          category: "electronics",
          condition: "good",
          image: "http://via.placeholder.com/350x250",
          description: "Very nice item",
          dailyRate: 33,
          createdAt: "24/12/2017"
          },
          {
          id: 4,
          title: "BoomBox",
          state: "AZ",
          street: "Haupt strasse",
          category: "electronics",
          condition: "good",
          image: "http://via.placeholder.com/350x250",
          description: "Very nice item",
          dailyRate: 33,
          createdAt: "24/12/2017"
          }]
      }
    })

    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
