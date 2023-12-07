import lupa from "../../Assets/lupa.png"

const CampoDeBusca = ({textoBuscaDigitado, handleBusca}) => {
    return(
        <div>
            <image src={lupa} alt="icone"/>
            <input
                type="text"
                value={textoBuscaDigitado}
                onChange={(event) => handleBusca(event.target.value)}
                placeholder="Pesquise aqui os pratos do nosso cardapio"
            />    
        </div>
    );
};

export default CampoDeBusca;