import React, { useState } from 'react';
import api from './Servies/api'
import './App.css';
import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');


 async function handleSubmit(event) {
   event.preventDefault();
   
   const response = await api.post('/sections', { email })
   const { _id } = response.data
   localStorage.setItem('use', _id)
   
 }


  return (
    <div className="container">
      <img src={logo} alt='imagem' />
      <div className='content'>
       <p>
       Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
       </p>
       <form onSubmit={handleSubmit}>
         <label htmlFor='email'>E-mail</label>
         <input 
            type='email' 
            id='email'
            placeholder='Seu email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            />

            <button className='btn' type='submit'>Enter</button>
        </form>
       </div>
    </div>
  );
}
export default App;

