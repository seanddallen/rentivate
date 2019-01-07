import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    minWidth: 300,
    maxWidth: 1000,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    margin: 15,

    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'https://learn.compactappliance.com/wp-content/uploads/2018/02/appliances-on-wood-floor.jpg',
    title: 'Appliances',
    width: '30%',
  },
  {
    url: 'http://www.campingtourist.com/wp-content/uploads/2011/05/Get-Cheap-Camping-Gear-with-These-Amazing-Resources.jpg',
    title: 'Camping',
    width: '30%',
  },
  {
    url: 'https://www.palaisdesaromes.com/wp-content/uploads/2015/06/Womens-Clothes-17.jpg',
    title: 'Clothing',
    width: '30%',
  },
  {
    url: 'https://www.creditwalk.ca/wp-content/uploads/2017/11/Linda-electronics-1-e1510481621452.jpg',
    title: 'Electronics',
    width: '30%',
  },
  {
    url: 'https://i.ytimg.com/vi/7ceoy-T52UM/maxresdefault.jpg',
    title: 'Equipment',
    width: '30%',
  },
  {
    url: 'https://secure.img1-fg.wfcdn.com/im/63684704/compr-r85/4370/43707159/default_name.png',
    title: 'Furniture',
    width: '30%',
  },
  {
    url: 'http://www.hiddenlevelgamesnj.com/uploads/1/1/2/1/112114593/editor/photo-tabletopvsvideo-00_2.jpg?1506259505',
    title: 'Games',
    width: '30%',
  },
  {
    url: 'https://c1.staticflickr.com/5/4077/4816174168_a7cfa559bd_b.jpg',
    title: 'General',
    width: '30%',
  },
  {
    url: 'https://www.2020videoreviews.com/uploads/1/0/5/2/105227211/home-appliances_orig.jpg',
    title: 'Household',
    width: '30%',
  },
  {
    url: 'http://www.bds-bg.org/en/resize_image_to/700/401/Novini/images/musicalinstruments.gif',
    title: 'Instruments',
    width: '30%',
  },
  {
    url: 'https://www.videoconverterfactory.com/tips/imgs-self/are-dvds-obsolete/are-dvds-obsolete-4.jpg',
    title: 'Media',
    width: '30%',
  },
  {
    url: 'http://recwell.umn.edu/sites/g/files/pua4056/f/styles/slider/public/gear-bannerimage.png?itok=5bAxOAyA',
    title: 'Recreational',
    width: '30%',
  },
  {
    url: 'https://www.jamessnowstorage.com/images/sport-gear1.jpg',
    title: 'Sporting',
    width: '30%',
  },
  {
    url: 'https://www.growly.io/wp-content/uploads/2016/08/15-must-have-tools-for-small-business.jpg',
    title: 'Tools',
    width: '30%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfj1KavqEmECtPyFkG9efkmaaEB6Pzgz9YgjGZgeV1XvrXoRTZA',
    title: 'Vehicles',
    width: '30%',
  },
];

function Categories(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            {/* <Link className='' to={'/rentals'}> */}
            <Link className='' to={`/categories/${image.title.toLowerCase()}`}>
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </Link>
          </ButtonBase>
      ))}
    </div>
  );
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);
