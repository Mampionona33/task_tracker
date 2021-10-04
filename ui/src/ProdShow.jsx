import React from 'react';
import { Box, Card, Typography, CardContent, CardHeader, Grid } from '@mui/material';

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
          <Card sx={{ background: 'linear-gradient(45deg, rgba(62,129,236,0.9976365546218487) 0%, rgba(49,147,240,1) 0%, rgba(62,129,236,1) 0%, rgba(0,212,255,1) 60%)', color: 'white' }}>
            <CardHeader title='Productivité Réel' />
            <CardContent>
              <Typography>Temps de prod : {this.state.heures.toLocaleTimeString()}</Typography>
              <Typography>Productivité: 98%</Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    );
  }
}
