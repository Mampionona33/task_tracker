// Initialisation of db run this command : node init.mongo.js

// Atlas URL - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/task_tracker?retryWrites=true';
const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://mampionona:daddy4806@cluster0.tksr3.mongodb.net/task_tracker?retryWrites=true';

async function resetMongo() {
  console.log('\n--- initialising Mongodb --- \n');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDb');
    const db = client.db();
    const collection = db.collection('fiches');
    const initialFiches = [
      {
        id: 1,
        typeTrav: 'Contenu',
        numFiche: '15454',
        statuCom: 'Abandon',
        statuIvpn: 'I',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=174711&w=1232305TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Normal',
        submiteState: false,
        nbBefor: 5,
        nbAft: 50,
        startDate: '29/10/2021',
        validDate: '29/10/2021',
        duree: '03:15:00',
        productivity: '100%',
      },

      {
        id: 2,
        typeTrav: 'ContenuMaj',
        numFiche: '4545',
        statuCom: '---',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=174711&w=1232305TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Paf',
        submiteState: false,
        nbBefor: 5,
        nbAft: 50,
        startDate: '29/10/2021',
        validDate: '29/10/2021',
        duree: '03:15:00',
        productivity: '102%',
      },
      {
        id: 3,
        typeTrav: 'AUTOVALIDCREAPrio',
        numFiche: '188595',
        statuCom: '---',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=188595&w=1636487TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Sby',
        submiteState: false,
        nbBefor: 0,
        nbAft: 22,
        startDate: '29/10/2021',
        validDate: '29/10/2021',
        duree: '03:15:00',
        productivity: '103%',
      },
      {
        id: 4,
        typeTrav: 'AUTOVALIDCREAPrio',
        numFiche: '126963',
        statuCom: 'Dégradé',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/restricted/FicheSociete.php?&s=126963&w=1277939TiNo4Hs6tZmC5l2D56Z41Y1Z2l2V7pzgri52S4p3T3&droit=on',
        state: 'Normal',
        submiteState: false,
        nbBefor: 11,
        nbAft: 11,
        startDate: '29/10/2021',
        validDate: '29/10/2021',
        duree: '03:15:00',
        productivity: '100%',
      },
      {
        id: 5,
        typeTrav: 'CréaPrio',
        numFiche: '239657',
        statuCom: '---',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=239657&w=1789817fs!RiGhtOwtSrCing&droit=stag&user=Mampionona',
        state: 'Normal',
        submiteState: true,
        nbBefor: 11,
        nbAft: 11,
        startDate: '29/10/2021',
        validDate: '29/10/2021',
        duree: '03:15:00',
        productivity: '100%',
      },
      {
        id: 6,
        typeTrav: 'MAJPrio',
        numFiche: '14922',
        statuCom: 'Abonné',
        statuIvpn: 'P',
        url: 'http://www.directindustry.com/r/FicheSociete.php?s=14922&w=98456ERfs!RiGhtOwtSrCing&droit=stag&user=mampionona',
        state: 'Normal',
        submiteState: true,
        nbBefor: 178,
        nbAft: 164,
        startDate: '29/10/2021',
        validDate: '29/10/2021',
        duree: '03:15:00',
        productivity: '100%',
      },
    ];
    await collection.deleteMany({});
    await collection.insertMany(initialFiches);
    const result = await collection.find({}).toArray();
    console.log('Result of insert: \n', result);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

resetMongo();
