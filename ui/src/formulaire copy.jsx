import React from 'react';
import ListSelection from './Components/listSelection';
import db from './db.json';
import { FormControl, Input } from '@mui/material';

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
  /* permet de detecter les changements et de reccuperer les valeurs saisie par l'utilisateur */
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value,
    });
  }

  /* permet de capturer l'evenement click sur le boutton submit */
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
    const pList = db.portailList.map((i, index) => <ListSelection value={i.value} txt={i.label} key={index} />);
    const typeTrav = db.typTrav.map((i, index) => <ListSelection value={i.value} txt={i.label} key={index} />);
    const statCom = db.statCom.map((i, index) => <ListSelection value={i.value} txt={i.label} key={index} />);
    const statIvpn = db.statIvpn.map((i, index) => <ListSelection value={i.value} txt={i.label} key={index} />);
    const etatFiche = db.etatFiche.map((i, index) => <ListSelection value={i.value} txt={i.label} key={index} />);
    return (
      <fieldset className='formCont'>
        <form onSubmit={this.handleSubmit} className='formCont-formulaire'>
          <label htmlFor='numFiche' className='formCont-formulaire-label'>
            NUM FICHE *
            <input className='formCont-formulaire-label-input' type='text' name='numFich' id='numFich' value={this.state.value} onChange={this.handleChange} />
          </label>

          <label htmlFor='portailSelect' className='formCont-formulaire-label'>
            PORTAIL *
            <select className='formCont-formulaire-label-input' name='portailSelect' id='portailSelect' value={this.state.value} onChange={this.handleSelectChange}>
              {pList}
            </select>
          </label>

          <label htmlFor='typeTrav' className='formCont-formulaire-label'>
            TYPE DE TRAV *
            <select className='formCont-formulaire-label-input' name='typeTrav' id='typeTrav' value={this.state.value} onChange={this.handleChange}>
              {typeTrav}
            </select>
          </label>

          <label htmlFor='statCom' className='formCont-formulaire-label'>
            STATUS COM *
            <select className='formCont-formulaire-label-input' name='statCom' id='statCom' value={this.state.value} onChange={this.handleChange}>
              {statCom}
            </select>
          </label>

          <label htmlFor='statIvpn' className='formCont-formulaire-label'>
            STATUS IVPN *
            <select className='formCont-formulaire-label-input' name='statIvpn' id='statIvpn' value={this.state.value} onChange={this.handleChange}>
              {statIvpn}
            </select>
          </label>

          <label htmlFor='etatFiche' className='formCont-formulaire-label'>
            ETAT FICHE *
            <select className='formCont-formulaire-label-input' name='etatFiche' id='etatFiche' value={this.state.value} onChange={this.handleChange}>
              {etatFiche}
            </select>
          </label>

          <label htmlFor='cat' className='formCont-formulaire-label'>
            CATEGORY
            <input className='formCont-formulaire-label-input' type='text' name='cat' id='' value={this.state.value} onChange={this.handleChange} />
          </label>

          <label htmlFor='nbAvant' className='formCont-formulaire-label'>
            NOMBRE AVANT
            <input className='formCont-formulaire-label-input' type='text' name='nbAvant' id='nbAvant' value={this.state.value} onChange={this.handleChange} />
          </label>

          <label htmlFor='nbApres' className='formCont-formulaire-label'>
            NOMBRE APRES
            <input className='formCont-formulaire-label-input' type='text' name='nbApres' id='nbApres' value={this.state.value} onChange={this.handleChange} />
          </label>

          <label htmlFor='comment' className='formCont-formulaire-labelTxt'>
            COMMENTS <br />
            <textarea className='formCont-formulaire-labelTxt-txt' name='comment' id='' cols='30' rows='10' value={this.state.value} onChange={this.handleChange}></textarea>
          </label>
          <div className='formCont-formulaire-buttons'>
            <input type='submit' value='Submit' />
            <input type='button' value='Save' />
          </div>
        </form>
      </fieldset>
    );
  }
}
