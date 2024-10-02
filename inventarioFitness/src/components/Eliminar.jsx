import './Eliminar.css'

function Eliminar(){
    return(
        <div className='contenedorEliminar'>
            <h3>Esta seguro de que quiere eliminar el producto?</h3>
            <div className='botones'>
                <button className='botonSi'>Si</button>
                <button className='botonNO'>No</button>
            </div>
        </div>
    )
};

export default Eliminar