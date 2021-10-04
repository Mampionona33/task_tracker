import React from 'react';
import { Box, Card, Typography, CardContent, CardHeader, Grid, TextField } from '@mui/material';

export default class SimulProdShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heures: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      heures: new Date(),
    });
  }

  render() {
    const time = new Date();
    const heure = ` ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    return (
      <Grid container>
        <Box display='flex'>
          <Card sx={{ background: 'linear-gradient(45deg, rgba(62,129,236,0.9976365546218487) 0%, rgba(49,147,240,1) 0%, rgba(216,105,255,1) 0%, rgba(250,91,169,1) 74%)', color: 'white' }}>
            <CardHeader title='Productivité simulée' />
            <CardContent>
              <Typography>
                Heures Fin Traitement :
                <Box display='flex' flexDirection='row' maxWidth={200} justifyContent='space-between'>
                  <TextField size='small' label='Hh' sx={{ m: '0 3px' }} />
                  <TextField size='small' label='Mm' sx={{ m: '0 3px' }} />
                  <TextField size='small' label='Ss' sx={{ m: '0 3px' }} />
                </Box>
              </Typography>
              <Typography>Productivité : 98%</Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    );
  }
}
