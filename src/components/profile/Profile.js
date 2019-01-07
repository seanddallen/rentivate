import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileDividers from './ProfileDividers';
import ReviewCard from './ReviewCard';

// import * as action from '../../actions/authActions';

class Profile extends React.Component {

  // componentWillMount() {
  //   this.props.dispatch(actions.fetchUserBookings());
  // }

  render() {

    console.log(this.props.auth)

    return (
      <div>
        <div className="row-full">
          <div className="outer">
            <h5 className="text-center" style={{paddingTop: '40px'}}>{this.props.auth.username}</h5>
            <img className="inner thumbnail" src="http://lorempixel.com/180/180/people/9/" />
          </div>
        </div>
        <div className="text-center" style={{marginTop: '250px'}}>
          <ProfileDividers />
        </div>
        <div className="" style={{marginTop: '60px'}}>
          <h5 className="text-center"> Owner Reviews </h5>
          <ReviewCard />
          <h5 className="text-center" style={{marginTop: '40px'}}> Renter Reviews </h5>
          <ReviewCard />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Profile)
