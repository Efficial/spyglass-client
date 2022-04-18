import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import Container from '@mui/material/Container';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
    <Container maxWidth="md" style={{display:"flex", flexDirection:"Column", height:'100vh'}}
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
