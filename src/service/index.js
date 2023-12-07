import {produtos} from "../dados/data-produtos";

//função para filtrar por texto digitado
export const buscarProduto = (textoDigitado) => {
    return produtos.filter(
        (produto) =>
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase) || 
            produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    );
};

//função para filtrar por categoria
export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
};

//função para filtrar somente entradas (pag inicial)
export const produtosEntradas = () => {
    return produtos.filter((produto) => produto.categoria === "Entradas");
};