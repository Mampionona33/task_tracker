import React from 'react';
import ListSelection from './Components/listSelection';
import db from './db.json';
import { FormControl, Grid, TextField, InputLabel, Select, MenuItem, Paper } from '@mui/material';

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
      <Paper elevation={3}>
        <form>
          <Grid container item xl={2}>
            <Grid item>
              <TextField label='Num Fiche' variant='outlined' values={this.props.children} sx={{ m: 1 }} />
            </Grid>

            <Grid>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id='demo-simple-select-autowidth-label'>Type de Trav</InputLabel>
                <Select MenuProps={MenuProps} defaultValue='' labelId='demo-simple-select-autowidth-label' id='demo-simple-select-autowidth' value={this.state.value} onChange={this.handleChange} autoWidth label='Type de Trav'>
                  {typeTache}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}
