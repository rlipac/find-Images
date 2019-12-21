import React from 'react';

import './App.css';
import Buscador from './Component/Buscador';
import Resultado from './Component/Resultado'


class App extends React.Component{



// Initially load some items.


  state = {
    palabra: '',
    imagenes : [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }

  paginaAnterior = () =>{

     //leer el state de la pagina actual
     let pagina = this.state.pagina;


     if(pagina > 1){
       pagina -=1;
     }
     //sumar uno  a la pagina actual
     

     // agregar el cambio al state

       this.setState({
         pagina
       }, () => {
         this.consultarApi();
         this.scroll();
       });
   //  console.log(pagina);

  }

  paginaSiguiente = () =>{
    
      //leer el state de la pagina actual
      let pagina = this.state.pagina;

      //sumar uno  a la pagina actual
        pagina +=1;

      // agregar el cambio al state

        this.setState({
          pagina
        }, () => {
          this.consultarApi();
          this.scroll();
        });
     // console.log(pagina);
  }



  consultarApi = () => {
    const palabra = this.state.palabra;
    const pagina = this.state.pagina;
    // guarda la petision en una variable llamada url con su key y q(query)
    const url = `https://pixabay.com/api/?key=8896257-bd414241fbaed86d7ad4bfc68&q=${palabra}&per_page=12&page=${pagina}`;
    // consumimos la api con fetch ya viene con javascrip y le pasamos la url coo parametro

    console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json() )
    //.then(resultado => console.log(resultado.hits))// muestra todos lo ele emntos de la peticion
    .then(resultado => this.setState({imagenes: resultado.hits}))
   
  }
 
    datosBusqueda = (palabra) => {
     
      this.setState({
        palabra: palabra,
        pagina: 1
      }, () => { // Consulta la Api pixabay
         this.consultarApi();
      })
    }


      render(){ 

        return(
          <div className="app container">
            <div className="jumbotron">
              <h1 className="display-3" id="buscador">Buscador der Imagenes</h1>
                <Buscador
                // mensage="buscador..." // pasa datos al componente hijo(buscador)
                datosBusqueda = {this.datosBusqueda}
                />
            </div>
             <div className="row justify-content-center">
              <Resultado 
                imagenes={this.state.imagenes}
              paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
              
              />
             </div>

            
          </div>
        )
  
    }
  }

export default App;
