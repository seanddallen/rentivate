import React from 'react';
import { withRouter } from 'react-router-dom';

class RentalSearchInput extends React.Component {

  constructor() {
    super();

    this.searchInput = React.createRef();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    // const { history } = this.props;
    // const city = this.searchInput.current.value;
    //
    // city ? history.push(`/rentals/${city}/items`) : history.push('/rentals');
    const { history, query } = this.props;
    const city = this.searchInput.current.value;

    let url = city ? `/rentals/${city}/items` : '/rentals';

    if (query) {
      url += `?${query}`
    }

    history.push(url);
  }


  render() {
    return (
      <div className='form-inline my-2 my-lg-4'>
        <div style={{margin: '0 auto'}}>
          <input onKeyPress={(event) => { this.handleKeyPress(event)}}
                 ref={this.searchInput}
                 className='form-control mr-sm-2 rtv-search'
                 type='search'
                 placeholder='Type city name'
                 aria-label='Search'></input>
          <button onClick={() => {this.handleSearch()}}
                  className='btn btn-outline-success my-2 my-sm-0 btn-rtv-search'
                  type='submit'>Search</button>
        </div>
      </div>
    )
  }
}


export default withRouter(RentalSearchInput)
