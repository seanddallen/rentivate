import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    // height: 350,
    width: 340,
    margin: '20px'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RentalCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const rental = this.props.rental;
    const date = this.props.rental.createdAt.slice(0,10)

    return (
      <Card className={classes.card}>
        <CardHeader className="card-header"
          avatar={
            <Avatar className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <FavoriteIcon className="favorite"/>
            </IconButton>
          }
          title={rental.title}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={rental.image}
        />
        <CardActions className={classes.actions} disableActionSpacing style={{display: 'flex', justifyContent: 'space-between'}}>
          <CardContent>
            ${rental.rate} / Day
          </CardContent>
          <Link className='rental-detail-link' to={`/rentals/${rental._id}`}>
            <button className='btn btn-outline-danger' style={{outline: 'solid 1px $secondary-color !important'}}>View</button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

RentalCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RentalCard);
