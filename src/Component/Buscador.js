import React, {Component} from 'react';


class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

       // Tomammos el valor del input 
        const palabra = this.busquedaRef.current.value;

        // Lo enviamos al componente App
        this.props.datosBusqueda(palabra);

    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row container" >
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg"
                         placeholder="Busca tu Imagen Ejemplo:Futbool" />
                         
                    </div>
                    <div className="form-group col-md-4">
                    <input className="btn btn-primary btn-lg btn-block" type="submit" value="busca..." />
                    </div>
                   
       
                    {/* <h2>{this.props.mensage}</h2> recibe los datos del componente padre */}
                   
                </div>
            </form>
        )
    }
}
export default Buscador;