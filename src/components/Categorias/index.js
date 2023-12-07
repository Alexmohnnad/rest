import icone1 from "../../Assets/entrada.png";
import icone2 from "../../Assets/massa.png";
import icone3 from "../../Assets/carne.png"
import icone4 from "../../Assets/bebidas.png";
import icone5 from "../../Assets/salada.png";
import icone6 from "../../Assets/sobremesa.png";

const Categorias = ({handleFiltro, botaoClicado}) => {
    return(
        <section>
            <div>
                <button onClick={()=>handleFiltro("Entradas")}> 
                <image src={icone1} alt="icone"/> Entradas
                </button>
                <button onClick={()=>handleFiltro("Massas")}> 
                <image src={icone2} alt="icone"/> Massas
                </button>
                <button onClick={()=>handleFiltro("Carnes")}> 
                <image src={icone3} alt="icone"/> Carnes
                </button>
                <button onClick={()=>handleFiltro("Bebidas")}> 
                <image src={icone4} alt="icone"/> Bebidas
                </button>
                <button onClick={()=>handleFiltro("Saladas")}> 
                <image src={icone5} alt="icone"/> Saladas
                </button>
                <button onClick={()=>handleFiltro("Sobremesas")}> 
                <image src={icone6} alt="icone"/> Sobremesas
                </button>
            </div>
        </section>
    )
}

export default Categorias;