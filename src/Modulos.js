import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase.js';
import {BrowserRouter as Router,Route, Routes, Link,useParams } from 'react-router-dom';
import {AiFillVideoCamera} from 'react-icons/ai';
import logo from './imagens/logo-danki.png';
import perfil from './imagens/nadsistemas.png';


function Modulos(props) {

    const [modulos,setModulos] = useState([]);

    const {nomeCurso} = useParams();

    useEffect(()=>{
          db.collection('cursos').where("slug", "==", nomeCurso).get().
           then(querySnapshot =>{

                querySnapshot.docs[0].ref.collection('modulos').onSnapshot(querySnapshot2 =>{
                      setModulos(querySnapshot2.docs);
                });
        
           })
            
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
             
            <div className='modulos'>
            <h2>Todos os Módulos </h2>
            {
                modulos?.map(function(val){
                    let url = `/${nomeCurso}/${val.data().slug}`
                    return(
                        <div className='modulo-single' >
                             
                         <p className='titulo'> <Link to={url}>{val.data().titulo}</Link></p>
                         <p className='texto'>Descrição: {val.data().descricao}</p>

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


 export default Modulos;