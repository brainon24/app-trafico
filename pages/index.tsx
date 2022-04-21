import type { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Layout } from "../components/layouts/";
import { EntryList, NewEntry } from "../components/ui";
import { Box } from '@mui/system';

const HomePage: NextPage = () => {

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDateTime = new Date();

  return (
    <Layout title='Traffic App'>
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' /**backgroundColor: '#f0f2f5' */ }}> 
            <Box display='flex' justifyContent='space-between'>
              <CardHeader title='Pendientes' />
              <Typography margin='17px 15px 0 0'>{currentDateTime.toLocaleDateString('es-ES', options)}.</Typography>
            </Box>
            
            <NewEntry />
            <CardContent/>
              <EntryList status='pending' />
            <CardContent/>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
            <CardContent/>
              <EntryList status='in-progress'/>
            <CardContent/>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent/>
              <EntryList status='finished'/>
            <CardContent/>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  );
};

export default HomePage;
