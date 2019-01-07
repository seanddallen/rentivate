import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from "mdbreact";

const ReviewCard = props => {
return (
<MDBContainer>
  <MDBCardGroup deck>
    <MDBCard>
      <MDBCardFooter small muted>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div>Reviewer: </div>
            <div>Date: </div>
          </div>
          <img src={require("../../img/rating.png")} />
        </div>

      </MDBCardFooter>
      <MDBCardBody>
        <MDBCardTitle tag="h5">Review: </MDBCardTitle>
        <MDBCardText>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCardGroup>
</MDBContainer>
);
};

export default ReviewCard;
