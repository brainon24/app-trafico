import { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppBar, IconButton, Toolbar, Typography, Link, Box } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import UIContext from '../../context/ui/UIContext';
import NextLink from 'next/link';


export const Navbar: FC = () => {

  const { openSideMenu } = useContext( UIContext );
  const router = useRouter();

  // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // const currentDateTime = new Date();

  return (
    <AppBar position='sticky' elevation={ 8 }>
        <Toolbar>
            <IconButton 
                size='large'
                edge='start'
                onClick={ openSideMenu }
                sx={{ color: '#fff' }}
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Box>
              <NextLink href='/' passHref>
                <Link underline='none' color='white'>
                  {<Typography variant='h6'>brainon24 Tasks - DDH</Typography>}
                </Link>
              </NextLink>
              {/* {<Typography>{currentDateTime.toLocaleDateString('es-ES', options)}.</Typography>} */}
            </Box>
        </Toolbar>
    </AppBar>
  )
}
