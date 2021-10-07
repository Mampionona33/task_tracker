import React from 'react';
import { Box, Button, Paper, Card, Typography, CardContent, CardHeader, Grid, TextField, Divider } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

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
          <Card raised sx={{ background: 'linear-gradient(45deg, rgba(62,129,236,0.9976365546218487) 0%, rgba(49,147,240,1) 0%, rgba(216,105,255,1) 0%, rgba(250,91,169,1) 74%)', color: 'white' }}>
            <CardHeader title='Productivité simulée' />
            <Divider />
            <CardContent>
              <Box marginBottom={2} display='flex' justifyContent='center'>
                <Paper sx={{ textAlign: 'center', p: 1.2, maxWidth: 'fit-content' }}>
                  <Box p={0}>
                    <Typography variant='h2'>98%</Typography>
                  </Box>
                </Paper>
              </Box>

              <Divider sx={{ m: 2 }} />

              <Box display='flex' flexDirection='column'>
                <Paper>
                  <Box display='grid' padding={2}>
                    <Box display='flex' flexDirection='column'>
                      <Typography>Heures Fin Traitement :</Typography>
                      <Box sx={{ m: '0px 2px 0px 2px' }} display='flex' flexDirection='row' maxWidth={200} justifyContent='space-between'>
                        <TextField size='small' label='Hh' sx={{ m: '0 3px' }} />
                        <TextField size='small' label='Mm' sx={{ m: '0 3px' }} />
                        <TextField size='small' label='Ss' sx={{ m: '0 3px' }} />
                      </Box>
                    </Box>
                    <Divider sx={{ m: 2 }} />
                    <Box>
                      <TextField size='small' label='Nombre Apres' sx={{ m: '0 3px' }} />
                    </Box>
                  </Box>
                </Paper>
              </Box>

              <Box sx={{ m: 2 }} display='grid' gap={1.5} gridTemplateColumns='repeat(auto-fill , minmax(75px, 1fr) )'>
                <Button variant='contained' sx={{ maxWidth: 'fit-content' }}>
                  <DeleteForeverOutlinedIcon />
                  Vider
                </Button>
                <Button variant='contained' sx={{ maxWidth: 'fit-content' }}>
                  <AssessmentOutlinedIcon />
                  Tester
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    );
  }
}
