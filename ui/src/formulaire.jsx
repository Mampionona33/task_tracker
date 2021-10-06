import React from 'react';
import db from './db.json';
import { Box, FormControl, TextField, InputLabel, Select, MenuItem, Paper, Button, Stack } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export default class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFich: '',
      portailSelect: 'DI',
      typeTrav: '---',
      statIvpn: 'I',
      etatFiche: 'Normal',
      statCom: '---',
      cat: '',
      nbAvant: '',
      nbApres: '',
      comment: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    target.reset();
    alert(`
    Num fiche : ${this.state.numFich}
    Le portail est : ${this.state.portailSelect} ; 
    Le type de travail est : ${this.state.typeTrav};
    Statut commercial est : ${this.state.statCom};
    Etat de la fiche est : ${this.state.etatFiche};
    Statut IVPN est : ${this.state.statIvpn}
    Le catégorie est : ${this.state.cat}
    Nombre avant : ${this.state.nbAvant}
    Nombre apres : ${this.state.nbApres}
    Comment : ${this.state.comment}
    `);
  }

  render() {
    const typeTache = db.typTrav.map((i, index) => {
      return (
        <MenuItem sx={{ fontSize: '12px' }} value={i.value} key={index}>
          {i.label}
        </MenuItem>
      );
    });
    const statutIvpn = db.statIvpn.map((i, index) => {
      return (
        <MenuItem sx={{ fontSize: '12px' }} value={i.value} key={index}>
          {i.label}
        </MenuItem>
      );
    });
    const statutCom = db.statCom.map((i, index) => {
      return (
        <MenuItem sx={{ fontSize: '12px' }} value={i.value} key={index}>
          {i.label}
        </MenuItem>
      );
    });

    const ITEM_HEIGHT = 54;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
      },
    };

    return (
      <Paper elevation={6} sx={{ m: '2rem', maxWidth: '100%' }}>
        <form>
          <Box display='grid' gap={2} padding={2} gridTemplateColumns='repeat(auto-fit, minmax(50%,1fr))'>
            <Box>
              <TextField label='Num Fiche' variant='outlined' values={this.props.children} size='small' />
            </Box>

            <Box>
              <TextField label='Url' variant='outlined' values={this.props.children} size='small' />
            </Box>

            <Box>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-autowidth-label'>Statut Com</InputLabel>
                <Select defaultValue=' --- ' size='small' MenuProps={MenuProps} labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Statut Com' size='small'>
                  {statutCom}
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-autowidth-label'>Statut IVPN</InputLabel>
                <Select size='small' defaultValue='I' labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Statut IVPN'>
                  {statutIvpn}
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-autowidth-label'>Type de Trav</InputLabel>
                <Select size='small' MenuProps={MenuProps} defaultValue=' --- ' labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Type de Trav'>
                  {typeTache}
                </Select>
              </FormControl>
            </Box>

            <Box>
              <TextField size='small' label='Catégorie' variant='outlined' values={this.props.children} />
            </Box>

            <Box>
              <TextField size='small' label='Nombre Avant' variant='outlined' values={this.props.children} />
            </Box>

            <Box>
              <TextField size='small' label='Nombre Apres' variant='outlined' values={this.props.children} />
            </Box>

            <Box gridRow={5} gridColumn='span 2'>
              <TextField multiline fullWidth label='Commentaire' variant='outlined' values={this.props.children} />
            </Box>
            <Box gridRow={6} gridColumn={1} gridColumn='span 2'>
              <Stack direction='row' spacing={1}>
                <Button variant='contained'>
                  <CheckOutlinedIcon />
                  Valider
                </Button>

                <Button variant='contained'>
                  <SaveOutlinedIcon />
                  Enregistrer
                </Button>
              </Stack>
            </Box>
          </Box>
        </form>
      </Paper>
    );
  }
}
