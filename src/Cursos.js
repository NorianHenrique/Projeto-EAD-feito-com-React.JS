import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase.js';
import {BrowserRouter as Router,Route, Routes, Link,useParams } from 'react-router-dom';
import logo from './imagens/logo-danki.png';
import perfil from './imagens/nadsistemas.png';


function Cursos() {

    const [cursos,setCursos] = useState([]);

    useEffect(()=>{
          db.collection('cursos').onSnapshot((snap)=>{
             setCursos(snap.docs);

          });
    },[]);

    return (

       

        <div className='app'>

            <div className='header'>
                  <div className='logo'>
                      <a href='/'><img src={logo} /></a>
                  </div>

                  <div className='foto-perfil'>
                       <p>Norian Henrique</p>
                       <img src={perfil} />

                  </div>
            </div>
             
             <div className='curso'>
             <h2>Todos os Cursos</h2>

            {
                cursos?.map(function(val){
                    return(
                        <div className='cursos-single'>
                          
                           <p className='titulo'><Link to={'/'+val.data().slug}>{val.id}</Link></p>
                           <img src={val.data().imagem}/>
                           <p className='texto'>Descrição do curso: {val.data().descricao} </p>
                        </div>
                    )
                })
            }

        </div>

          <div className='footer'>
                
                <img src={logo} />
          </div>

             </div>
          


    );

 }


 export default Cursos;