import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    cadastrar(produto: Produto): void;
    listarProdutos(): void;
    consultarPorID(id: number): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

}
