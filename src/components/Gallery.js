import React, { useState } from 'react';
import './Gallery.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';


export default function Gallery({ setToken }) {

  return(
    <><Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Connect Wallet
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Mint NFT
      </Button>
    </Stack><Stack direction="row" spacing={2}>
        <Card sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>}
            title="Chicago"
            subheader="February 23, 2023" />
          <CardMedia
            component="img"
            height="194"
            image="/src/images/Jordan1.png"
            alt="Chicago" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <ShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>}
            title="NFT Event Name"
            subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="NFT name" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <ShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>}
            title="NFT Event Name"
            subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="NFT name" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <ShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>}
            title="NFT Event Name"
            subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="NFT name" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart">
              <ShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Stack></>

    )
  }

  Gallery.propTypes = {
    setToken: PropTypes.func.isRequired
};