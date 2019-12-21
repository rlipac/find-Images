import React  from 'react'
import Imagen from './Imagen'
import Pagination from './Pagination';

class Resultado extends React.Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0 ) return null;
        console.log(imagenes)
       
        return(
        <React.Fragment>
                <div className="row mx-auto p2" id="resultado">
                    {imagenes.map(imagen =>(
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    ))}
            
                </div>
                <Pagination 
                      paginaAnterior={this.props.paginaAnterior}
                      paginaSiguiente={this.props.paginaSiguiente}
                />

         </React.Fragment>
        )   
      
    }
    render(){
        return(
            

                <React.Fragment>
                    {this.mostrarImagenes()}
                </React.Fragment>
                
          
        )
    }
}

export default Resultado;