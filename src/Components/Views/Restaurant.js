import React from "react";
import {
  Grid,
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
//import StarIcon from "@material-ui/icons/Star";
// import Rating from "@material-ui/lab/Rating";
import Menu from "../Menu";

const useStyles = makeStyles({
  resHead: {
    marginTop: 20,
    width: "100%"
  },
  media: {
    height: 340
  },
  resName: {
    paddingTop: 20
  }
});
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function Restaurant() {
  const classes = useStyles();
  return (
    <Grid container >
      <Card className={classes.resHead} style={{ background: "black", opacity:"0.90" }}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="https://static01.nyt.com/images/2018/08/08/dining/08Seasons1/08Seasons1-videoSixteenByNineJumbo1600.jpg"
              title="Food Food"
            />
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.resName}
              style={{color:"#F05"}}
            >
              Naveen Tea Stall
            </Typography>
            <Box component="fieldset" mb={7} borderColor="transparent" align="right">
              <Grid container>
        <Grid item xs={6}>
        <Typography  style={{color:"white",}} align="left">CnD Atrium </Typography>
        </Grid>
        <Grid item xs={6}>
        <Rating
          name="customized-icons"
          defaultValue={4}
          readOnly
          IconContainerComponent={IconContainer}
          style={{color:"#F05"}}
        />
        </Grid>
        <Grid item xs={6} align="left">
        <Typography style={{color:"white"}} align="left" variant="p">Delivery Time: 45mins</Typography>
        </Grid>
        </Grid>
        <Grid item xs={12} align="left" style={{paddingTop:"8px"}}>
        <Typography style={{color:"white"}} align="left" variant="p">Cost for Two: Rs. 150</Typography>
        </Grid>
      </Box>
          </CardContent>
        </CardActionArea>
        <Menu/>
        
        <CardActions>
          <Grid container alignItems="flex-start">
            <Typography style={{ paddingRight: 10, paddingLeft: 10,color:"#EFF" }}>
              Rate This Restaurant
            </Typography>
          </Grid>
          {/* {value !== null && (
            <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
          )} */}
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Grid
            container
            alignItems="flex-start"
            justify="flex-end"
            direction="row"
          >
            <Button size="small" color="secondary">
              Learn More
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Restaurant;
