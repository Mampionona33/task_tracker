import React from 'react';
import { Box, Paper, Card, Typography, CardContent, CardHeader, Grid, Divider } from '@mui/material';

export default class ProdShow extends React.Component {
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
          <Card raised sx={{ background: 'linear-gradient(45deg, rgba(62,129,236,0.9976365546218487) 0%, rgba(49,147,240,1) 0%, rgba(62,129,236,1) 0%, rgba(0,212,255,1) 60%)', color: 'white' }}>
            <CardHeader title='Productivité Réel' />
            <Divider />
            <CardContent>
              <Box display='flex' justifyContent='center' marginBottom={2}>
                <Paper sx={{ textAlign: 'center', p: 1.2, maxWidth: 'fit-content' }}>
                  <Box p={0}>
                    <Typography variant='h2'>98%</Typography>
                  </Box>
                </Paper>
              </Box>
              <Divider />
              <Box marginTop={2}>
                <Typography variant='h5'>Temps de prod : {this.state.heures.toLocaleTimeString()}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    );
  }
}
