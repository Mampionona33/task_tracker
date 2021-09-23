import React from 'react';
import ListSelection from './TaskAddComponents/listSelection';

const db = {
  portailList: [
    { value: 'di', label: 'DI' },
    { value: 'ae', label: 'AE' },
    { value: 'ne', label: 'NE' },
    { value: 'me', label: 'ME' },
    { value: 'aero', label: 'AERO' },
  ],
  typTrav: [
    { value: ' --- ', label: ' ---' },
    { value: ' Contenu ', label: ' Contenu' },
    { value: ' Contenu (Zappé) ', label: ' Contenu (Zappé)' },
    { value: ' Contenu (ContenuFullMAJ) ', label: ' Contenu (ContenuFullMAJ)' },
    { value: ' ContenuFullCréa ', label: ' ContenuFullCréa' },
    { value: ' ContenuFullCréaPrio ', label: ' ContenuFullCréaPrio' },
    { value: ' ContenuFullMAJ ', label: ' ContenuFullMAJ' },
    { value: ' ContenuFullMAJPrio ', label: ' ContenuFullMAJPrio' },
    { value: ' Créa ', label: ' Créa' },
    { value: ' CréaLight ', label: ' CréaLight' },
    { value: ' CréaLightPrio ', label: ' CréaLightPrio' },
    { value: ' CréaPrio ', label: ' CréaPrio' },
    { value: ' MAJ ', label: ' MAJ' },
    { value: ' MAJLight ', label: ' MAJLight' },
    { value: ' MAJLightPrio ', label: ' MAJLightPrio' },
    { value: ' MAJPrio ', label: ' MAJPrio' },
    { value: ' MAJFullPrio ', label: ' MAJFullPrio' },
    { value: ' MAJFull ', label: ' MAJFull' },
    { value: ' MAJSPEC ', label: ' MAJSPEC' },
    { value: ' PDF ', label: ' PDF' },
    { value: ' MAJ BOOST ', label: ' MAJ BOOST' },
    { value: ' Jugement ', label: ' Jugement' },
    { value: ' REASSOPROD ', label: ' REASSOPROD' },
    { value: ' AUTOVALIDCREA ', label: ' AUTOVALIDCREA' },
    { value: ' AUTOVALIDMAJ ', label: ' AUTOVALIDMAJ' },
    { value: ' RFQ ', label: ' RFQ' },
    { value: ' MAJ Prix ', label: ' MAJ Prix' },
    { value: ' Projet Prix ', label: ' Projet Prix' },
    { value: ' VALIDCLIENT ', label: ' VALIDCLIENT' },
    { value: ' VALIDOUT ', label: ' VALIDOUT' },
    { value: ' Matching Grille Tarifaire ', label: ' Matching Grille Tarifaire' },
    { value: ' Matching PDF ', label: ' Matching PDF' },
    { value: ' CREADemo ', label: ' CREADemo' },
    { value: ' MAJT ', label: ' MAJT' },
    { value: ' MAJNew ', label: ' MAJNew' },
    { value: ' AUTOVALIDCREADemo ', label: ' AUTOVALIDCREADemo' },
    { value: ' AUTOVALIDCREADemoLIGHT ', label: ' AUTOVALIDCREADemoLIGHT' },
    { value: ' AUTOVALIDCREADemoFULL ', label: ' AUTOVALIDCREADemoFULL' },
    { value: ' AUTOVALIDMAJT ', label: ' AUTOVALIDMAJT' },
    { value: ' AUTOVALIDMAJTLIGHT ', label: ' AUTOVALIDMAJTLIGHT' },
    { value: ' AUTOVALIDMAJTFULL ', label: ' AUTOVALIDMAJTFULL' },
    { value: ' AUTOVALIDMAJNew ', label: ' AUTOVALIDMAJNew' },
    { value: ' AUTOVALIDCREAPrio ', label: ' AUTOVALIDCREAPrio' },
    { value: ' AUTOVALIDCREALIGHTPrio ', label: ' AUTOVALIDCREALIGHTPrio' },
    { value: ' AUTOVALIDCREAFULLPrio ', label: ' AUTOVALIDCREAFULLPrio' },
    { value: ' AUTOVALIDMAJPrio ', label: ' AUTOVALIDMAJPrio' },
    { value: ' AUTOVALIDMAJLIGHTPrio ', label: ' AUTOVALIDMAJLIGHTPrio' },
    { value: ' AUTOVALIDMAJFULLPrio ', label: ' AUTOVALIDMAJFULLPrio' },
  ],
  statCom: [
    { value: ' --- ', label: ' ---' },
    { value: ' Abandon ', label: ' Abandon' },
    { value: ' Abonné ', label: ' Abonné' },
    { value: ' Dégradé ', label: ' Dégradé' },
    { value: ' DégradéDefinitif ', label: ' DégradéDefinitif' },
    { value: ' Essai ', label: ' Essai' },
    { value: ' EssaiNouveau ', label: ' EssaiNouveau' },
    { value: ' EssaiPayant ', label: ' EssaiPayant' },
    { value: ' Retiré ', label: ' Retiré' },
  ],
  statIvpn: [
    { value: 'I', label: 'I' },
    { value: 'V', label: 'v' },
    { value: 'p', label: 'p' },
    { value: 'N', label: 'N' },
  ],
  etatFiche: [
    { value: 'Normal', label: 'Normal' },
    { value: 'Sby', label: 'Sby' },
    { value: 'Paf', label: 'Paf' },
  ],
};

export default class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <input type='text' name='' id='' />
        </label>
        <br />
        <label htmlFor='portailSelect'>
          PORTAIL *
          <select name='portailSelect' id='portailSelect'>
            {pList}
          </select>
        </label>
        <br />
        <label htmlFor='typeTrav'>
          TYPE DE TRAV *
          <select name='typeTrav' id='typeTrav'>
            {typeTrav}
          </select>
        </label>
        <br />
        <label htmlFor='statCom'>
          STATUS COM *
          <select name='statCom' id='statCom'>
            {statCom}
          </select>
        </label>
        <br />
        <label htmlFor='statIvpn'>
          STATUS IVPN *
          <select name='statIvpn' id='statIvpn'>
            {statIvpn}
          </select>
        </label>
        <br />
        <label htmlFor='etatFiche'>
          ETAT FICHE *
          <select name='etatFiche' id='etatFiche'>
            {etatFiche}
          </select>
        </label>
        <br />
        <label htmlFor='cat'>
          CATEGORY
          <input type='text' name='cat' id='' />
        </label>
        <br />
        <label htmlFor='nbAvant'>
          NOMBRE AVANT
          <input type='text' name='nbAvant' id='nbAvant' />
        </label>
        <br />
        <label htmlFor='nbApres'>
          NOMBRE APRES
          <input type='text' name='nbApres' id='nbApres' />
        </label>
        <br />
        <label htmlFor='comment'>
          COMMENTS <br />
          <textarea name='comment' id='' cols='30' rows='10'></textarea>
        </label>
        <br />
        <input type='submit' value='Save' />
      </form>
    );
  }
}
