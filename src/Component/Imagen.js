import React from 'react'

const Imagen = (props) => {

    const { likes, tags, previewURL, largeImageURL, views , webformatURL, userImageURL} = props.imagen;
    return(
       <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
           <div className="card" >
         
               <img src={webformatURL} alt={tags} className="card-img-top " />
               <div className="card-body">
                    <p className="card-text">Vistas: {views}</p>
                    <p className="card-text">Likes: {likes}</p>
                    <p className="card-text">tags: {tags}</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">ver mas</a>
               </div>
               
           </div>

          
       </div>
    )
}


export default Imagen