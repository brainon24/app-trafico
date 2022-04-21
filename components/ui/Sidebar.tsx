import { useContext } from "react";
import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../context/ui';
import CardMedia from '@mui/material/CardMedia';
import logoIMG from './../../public/cropped-trans.png';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext( UIContext )

    const currentYear = new Date();

  return (
    <Drawer
        anchor="left"
        open={ sidemenuOpen }
        onClose={ closeSideMenu }
    >

        <Box sx={{ width: 250 }}>

            <Box sx={{ padding: '50px 0px 10px 0px' }}>
                {/* {<Typography variant="h4" style={{textAlign: 'center'}}>Menu</Typography>}  */}
                {<Avatar style={{ margin: 'auto' }} src='../../public/logo.png' alt='' />}
                {/* <CardMedia
                    component='img'
                    height='200'
                    image="./static/public/cropped-trans.png"
                /> */}
            </Box>

            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItem>
                    ))
                }
            </List>

            <Divider />

            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItem>
                    ))
                }
            </List>

            <Box sx={{ margin: '40px 0px 10px 0px' }}>
                <Typography variant="h6" style={{textAlign: 'center', margin: '0px 10px'}}> Powered By: Ing. David Diaz H. para brainon24</Typography>
                <Typography variant="body1" style={{textAlign: 'center'}}>{currentYear.getFullYear()}.</Typography>
            </Box>

        </Box>

    </Drawer>
  )
}
