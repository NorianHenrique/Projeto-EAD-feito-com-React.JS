import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase.js';
import {BrowserRouter as Router,Route, Routes, Link,useParams } from 'react-router-dom';
import logo from './imagens/logo-danki.png';
import perfil from './imagens/nadsistemas.png';


function Home() {

    const [cursos,setCursos] = useState([]);

    useEffect(()=>{
          db.collection('cursos').onSnapshot((snap)=>{
             setCursos(snap.docs);

          });
    },[]);

    return (

       

        <div className='app'>

  
                <div className='header_login'>
                <img src={logo} />
                <div className='login-flex'>

                  <div className='login'>
                
                      <h2>Acesse sua conta</h2>

                      <form>
                      <label>E-mail:</label>
                      <input type='email' placeholder="Digite seu Email.."/>

                      <label>Senha:</label>
                      <input type='password' placeholder="Digite sua Senha.."/>

                      <input type='submit' placeholder='Entrar!'/>
                      </form>

                  </div>

                  <div className='criar-conta'>
                       <p>Não possui conta ainda?</p>
                       <a href=''>Crie agora grátis</a>
                  </div>
                  </div>
                </div>

             </div>
          


    );

 }


 export default Home;