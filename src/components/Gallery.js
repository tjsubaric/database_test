import React, { useState } from 'react';
import './Gallery.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import WalletIcon from '@mui/icons-material/Wallet';
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Gallery({ setToken }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <><Typography variant="body2" color="text.secondary">
      NFTicket Title and logo
    </Typography><><Stack direction="row" spacing={2} justifyContent="center"
  alignItems="center">
      <Button variant="outlined" startIcon={<WalletIcon />} >
        Connect Wallet
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Mint NFT
      </Button>
    </Stack>
        <Typography variant="body2" color="text.secondary">
          Some Description of what our website does
        </Typography>
        <Stack direction="row" spacing={2}>
          <Card sx={{ width: 450, overflow: "auto" }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>}
              title="Chicago One"
              subheader="February 23, 2023" />
            <CardMedia
              component="img"
              height="194"
              image="/src/images/Chicago.jpg"
              alt="Chicago One" />
            <CardContent>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="view details" onClick={handleOpen}>
                <VisibilityIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    NFT Title
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Some description for the NFT and includes price and add to cart
                </Typography>
              </Box>
            </Modal>
            </CardActions>
          </Card>
          <Card sx={{ width: 450, overflow: "auto" }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>}
              title="Bright Blue"
              subheader="September 14, 2016" />
            <CardMedia
              component="img"
              height="194"
              image="/src/images/BrightBlue.jpg"
              alt="Bright Blue" />
            <CardContent>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="view details" onClick={handleOpen}>
                <VisibilityIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    NFT Title
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Some description for the NFT and includes price and add to cart
                </Typography>
              </Box>
            </Modal>
            </CardActions>
          </Card>
          <Card sx={{ width: 450, overflow: "auto" }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>}
              title="Lightning McQueen"
              subheader="September 14, 2016" />
            <CardMedia
              component="img"
              height="194"
              image="/src/images/LightningMcQueen.jpg"
              alt="lightning mcqueen" />
            <CardContent>

            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="view details" onClick={handleOpen}>
                <VisibilityIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    NFT Title
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Some description for the NFT and includes price and add to cart
                </Typography>
              </Box>
            </Modal>
            </CardActions>
          </Card>
          <Card sx={{ width: 450, overflow: "auto" }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>}
              title="Black Menta"
              subheader="September 14, 2016" />
            <CardMedia
              component="img"
              height="194"
              image="/src/images/BlackMenta.jpg"
              alt="Black Menta" />
            <CardContent>
          
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="view details" onClick={handleOpen}>
                <VisibilityIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    NFT Title
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Some description for the NFT and includes price and add to cart
                </Typography>
              </Box>
            </Modal>
            </CardActions>
          </Card>
        </Stack></></>
      )
  }

  Gallery.propTypes = {
    setToken: PropTypes.func.isRequired
};