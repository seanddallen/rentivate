import React from 'react';
import { toUpperCase, pretifyDate } from '../../../services/helpers';
import { Link } from 'react-router-dom';

export class RentalManageCard extends React.Component {

  constructor() {
    super();

    this.state = {
      wantDelete: false
    }
  }

  showDeleteMenu() {
    this.setState({
      wantDelete: true
    });
  }

  closeDeleteMenu() {
    this.setState({
      wantDelete: false
    })
  }

  deleteRental(rentalId, rentalIndex) {
    this.setState({wantDelete: false});

    this.props.deleteRentalCb(rentalId, rentalIndex);
  }


  render() {
    const { rental, modal, rentalIndex } = this.props;
    const { wantDelete } = this.state;

    const deleteClass = wantDelete ? 'toBeDeleted' : '';

    return (
      <div className='col-md-4'>
        <div className={`card text-center ${deleteClass}`}>
          <div className='card-block'>
            <h4 className='card-title'>{rental.title} - {toUpperCase(rental.city)}</h4>
            <Link className='btn btn-bwm' to={`/rentals/${rental._id}`}>View Rental</Link>
            { rental.bookings && rental.bookings.length > 0 && modal }
          </div>
          <div className='card-footer text-muted'>
              <div>
                Created at {pretifyDate(rental.createdAt)}
              </div>
            { !wantDelete &&
              <React.Fragment>
                <i onClick={() => { this.showDeleteMenu() }} className='fa fa-trash' style={{color: 'grey', fontSize: '2em', cursor: 'pointer', margin: '0 20px'}}></i>
                <Link to={{pathname: `/rentals/${rental._id}/edit`, state: { isUpdate: true }}}><i className='fa fa-edit' style={{color: 'grey', fontSize: '2em', cursor: 'pointer', margin: '10px 20px 0 0'}}></i> </Link>
              </React.Fragment>
            }
            { wantDelete &&
              <div className='delete-menu'>
                Do you confirm?
                <button onClick={() => {this.deleteRental(rental._id, rentalIndex)}} className='btn btn-danger'> Yes </button>
                <button onClick={() => { this.closeDeleteMenu() }} className='btn btn-success'> No </button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
