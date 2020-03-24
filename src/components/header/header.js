import React from 'react';
import './assets/header.css'
import { Link } from 'react-router-dom';
import cerrar from './assets/cerrar.png'
import creditos from './assets/creditos.png'
import instruccion from './assets/instruccion.png'
const Header = () => (
<section id="modal">
        
        <div id="fondomodalconfig">
            <a href='/Classic'><img src={cerrar} alt="cerrar" className="close-modal"/></a>
            <div id="modalcontentconfig">
                <header>
                    <h2>Configuraciones</h2>            
                </header>
                <article>
                    <Link to='/Credits'>    
                        <button id="pestanacreditos" className="pestanaconfig">
                            <img src={creditos} alt="creditos" className="icon"/>
                            <h4 className="tituloconfig">Créditos</h4>
                        </button> 
                    </Link>
                    <Link to ='/Instructions'>
                        <button id="pestanainstrucciones"className="pestanaconfig">
                            <img src={instruccion} alt="instruccion" className="icon"/>
                            <h4 className="tituloconfig">Instrucciones</h4>
                        </button> 
                    </Link>
                </article>
            </div>
        </div>
    </section>
);
export default Header;
