import React from 'react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

const ProfileDividers = () => (
  <React.Fragment>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        <h5> User Details </h5>
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Contact </Table.Cell>
          <Table.Cell>email@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Joined</Table.Cell>
          <Table.Cell>1-3-2019</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total Listings</Table.Cell>
          <Table.Cell>4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total Bookings</Table.Cell>
          <Table.Cell>17</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Average Owner Rating</Table.Cell>
          <Table.Cell>3.6/5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Average Renter Rating</Table.Cell>
          <Table.Cell>3.6/5</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
)

export default ProfileDividers
