import React from 'react';
import ListSelection from './Components/listSelection';
import db from './db.json';
import { Box, FormControl, TextField, InputLabel, Select, MenuItem, Paper, Button, Stack } from '@mui/material';

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
      <Box sx={{ display: 'flex' }} margin={(0, 2, 0, 0)}>
        <Paper elevation={3} sx={{ minWidth: '35%', m: '2rem' }}>
          <form>
            <Box display='grid' gap={2} padding={2}>
              <Box gridColumn={1} gridRow={1}>
                <TextField label='Num Fiche' variant='outlined' values={this.props.children} size='small' />
              </Box>

              <Box gridColumn={2} gridRow={1}>
                <TextField label='Url' variant='outlined' values={this.props.children} size='small' />
              </Box>

              <Box gridColumn={1} gridRow={2}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-autowidth-label'>Statut Com</InputLabel>
                  <Select size='small' MenuProps={MenuProps} defaultValue='' labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Statut Com' size='small'>
                    {statutCom}
                  </Select>
                </FormControl>
              </Box>

              <Box gridColumn={2} gridRow={2}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-autowidth-label'>Statut IVPN</InputLabel>
                  <Select size='small' defaultValue='' labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Statut IVPN'>
                    {statutIvpn}
                  </Select>
                </FormControl>
              </Box>

              <Box gridColumn={1} gridRow={3}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-autowidth-label'>Type de Trav</InputLabel>
                  <Select size='small' MenuProps={MenuProps} defaultValue='' labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Type de Trav'>
                    {typeTache}
                  </Select>
                </FormControl>
              </Box>

              <Box gridColumn={2} gridRow={3}>
                <TextField size='small' label='Catégorie' variant='outlined' values={this.props.children} />
              </Box>

              <Box gridColumn={1} gridRow={4}>
                <TextField size='small' label='Nombre Avant' variant='outlined' values={this.props.children} />
              </Box>

              <Box gridColumn={2} gridRow={4}>
                <TextField size='small' label='Nombre Apres' variant='outlined' values={this.props.children} />
              </Box>

              <Box gridRow={5} gridColumn='span 2'>
                <TextField multiline fullWidth label='Commentaire' variant='outlined' values={this.props.children} />
              </Box>
              <Box gridRow={6} gridColumn={1}>
                <Stack direction='row' spacing={1}>
                  <Button variant='contained'>Valider</Button>
                  <Button variant='contained'>Enregistrer</Button>
                </Stack>
              </Box>
            </Box>
          </form>
        </Paper>
      </Box>
    );
  }
}
