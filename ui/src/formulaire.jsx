import React from 'react';
import ListSelection from './TaskAddComponents/listSelection';
import db from './db.json';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='numFiche'>
          NUM FICHE *
          <input type='text' name='numFich' id='numFich' value={this.state.value} onChange={this.handleChange} />
        </label>

        <br />

        <label htmlFor='portailSelect'>
          PORTAIL *
          <select name='portailSelect' id='portailSelect' value={this.state.value} onChange={this.handleSelectChange}>
            {pList}
          </select>
        </label>

        <br />

        <label htmlFor='typeTrav'>
          TYPE DE TRAV *
          <select name='typeTrav' id='typeTrav' value={this.state.value} onChange={this.handleChange}>
            {typeTrav}
          </select>
        </label>

        <br />

        <label htmlFor='statCom'>
          STATUS COM *
          <select name='statCom' id='statCom' value={this.state.value} onChange={this.handleChange}>
            {statCom}
          </select>
        </label>

        <br />

        <label htmlFor='statIvpn'>
          STATUS IVPN *
          <select name='statIvpn' id='statIvpn' value={this.state.value} onChange={this.handleChange}>
            {statIvpn}
          </select>
        </label>

        <br />

        <label htmlFor='etatFiche'>
          ETAT FICHE *
          <select name='etatFiche' id='etatFiche' value={this.state.value} onChange={this.handleChange}>
            {etatFiche}
          </select>
        </label>

        <br />

        <label htmlFor='cat'>
          CATEGORY
          <input type='text' name='cat' id='' value={this.state.value} onChange={this.handleChange} />
        </label>

        <br />

        <label htmlFor='nbAvant'>
          NOMBRE AVANT
          <input type='text' name='nbAvant' id='nbAvant' value={this.state.value} onChange={this.handleChange} />
        </label>

        <br />

        <label htmlFor='nbApres'>
          NOMBRE APRES
          <input type='text' name='nbApres' id='nbApres' value={this.state.value} onChange={this.handleChange} />
        </label>

        <br />

        <label htmlFor='comment'>
          COMMENTS <br />
          <textarea name='comment' id='' cols='30' rows='10' value={this.state.value} onChange={this.handleChange}></textarea>
        </label>

        <br />

        <input type='submit' value='Submit' />
        <input type='button' value='Save' />
      </form>
    );
  }
}
