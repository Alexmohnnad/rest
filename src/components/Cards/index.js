
const Cards =({produto}) => {
    return(
        <div>
            <figure>
                <image src={produto.image} alt={produto.nome}/>
            </figure>
            <div>
                <h3>{produto.nome}</h3>
                <small>{produto.categoria}</small>
                <p>{produto.descricao}</p>
            </div>
            <div>
                <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
            </div>
        </div>
    )
}

export default Cards;