import axios from 'axios';

//URL pour recuperer les requetes dans le backend
const localhost = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default localhost;