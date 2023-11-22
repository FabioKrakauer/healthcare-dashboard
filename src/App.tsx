import { useEffect, useState } from 'react'
import './App.css'
import {getDatabase, onValue, ref} from 'firebase/database'
import { initializeApp } from 'firebase/app';
import Card from './Card';

interface IFeatures {
  heartRate: string;
  oxygen: string;
  oxygenLevel: string;
}
function App() {
  const [values, setValues] = useState<IFeatures>({heartRate: "-", oxygen: "-", oxygenLevel: "-"})
  const firebaseConfig = {
    apiKey: "AIzaSyACthjuEunvWaigaarHUOeDirSYrzfKmUA",
    authDomain: "projeto-healthcare-808d1.firebaseapp.com",
    databaseURL: "https://projeto-healthcare-808d1-default-rtdb.firebaseio.com",
    projectId: "projeto-healthcare-808d1",
    storageBucket: "projeto-healthcare-808d1.appspot.com",
    messagingSenderId: "786236599359",
    appId: "1:786236599359:web:cc7faed271fe0dc86ddc8a",
    measurementId: "G-1EHMFVEBK4"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  useEffect(() => {
    const query = ref(db, "project");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setValues(data)
      }
    });
  }, []);

  return (
    <div>
      <h1>Dados do paciente</h1>
      <div className="cards d-flex">
        <Card
          featureName="Batimento Cardiaco"
          icon='fa-solid fa-heart'
          unit='bpm'
          value={values.heartRate} 
          color="bg-danger"
        />
        <Card
          featureName="Oxigenio"
          icon='fa-solid fa-viruses'
          unit=''
          value={values.oxygen} 
          color="bg-info"
        />
        <Card
          featureName="Saturação"
          icon='fa-solid fa-hands-bubbles'
          unit='%'
          value={values.oxygenLevel} 
          color="bg-success"
        />
      </div>
    </div>
)}

export default App;
