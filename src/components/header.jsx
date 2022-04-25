import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function header({handleCart}) {
  return (
    <AppBar
      position='static'
    >
        <Toolbar>
            <Typography 
                variant='h6'
                component = "span"
                sx={{flexGrow: 1}}

            >
                My shop
            </Typography>
            <IconButton
              color='inherit'
              onClick={handleCart}
            >
                <ShoppingBasket />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default header