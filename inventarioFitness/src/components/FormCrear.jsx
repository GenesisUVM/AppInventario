import './FormCrear.css'

function FormCrear(){
return(
    <>
    <form action="send" className='formCrear'>
        <h3>CREAR PRODUCTO</h3>

        <label htmlFor="name">Nombre</label>
        <input type="text" id='name' placeholder='Nombre del producto' required />

        <label htmlFor="descripcion">Descripcion</label>
        <input type="text" id='descripcion' placeholder='Descripcion del producto' required />

        <label htmlFor="precio">Precio</label>
        <input type="number" id='precio' placeholder='Precio del producto' required />

        <label htmlFor="cantidad">Cantidad Disponible</label>
        <input type="number" id='cantidad' placeholder='Cantidad disponible' required />

        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria">
            <option value="shorts">Shorts</option>
            <option value="leggins">Leggins</option>
            <option value="franelas">Franelas</option>
            <option value="hoodies">Hoodies</option>
            <option value="faldas">Faldas</option>
            <option value="tops">Tops</option>
            <option value="monos">Monos</option>
        </select>

        <input type="image" id='img' required />
    </form>
    </>
)
};

export default FormCrear