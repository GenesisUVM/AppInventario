import './SideBar.css'

function SideBar(){
    return(
        <nav className="sideBar">
            <h3>Categorias</h3>
            <ul className='listaCategorias'>
                <li><a>Todas</a></li>
                <li><a>Shorts</a></li>
                <li><a>Leggins</a></li>
                <li><a>Franelas</a></li>
                <li><a>Hoodies</a></li>
                <li><a>Faldas</a></li>
                <li><a>Tops</a></li>
                <li><a>Monos</a></li>
            </ul>
        </nav>
    )
};

export default SideBar;