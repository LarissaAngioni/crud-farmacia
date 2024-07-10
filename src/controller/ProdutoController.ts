import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    cadastrar(produto: Produto): void {
       this.listaProdutos.push(produto);
       console.log("Produto cadastrado!");
    }

    listarProdutos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar();
        }
    }

    consultarPorID(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
        if (buscaProduto !== null){
            buscaProduto.visualizar();
        } else {
            console.log(`Não foi encontrado produto com o ID ${id}`);
        }
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("Produto Atualizado!");
            
        } else {
            console.log(`Não foi encontrado produto com o ID ${produto.id}`);
        }
    }
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
        if (buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("Produto deletado!");
            
        } else {
            console.log(`Não foi encontrado produto com o ID ${id}`);
        }
    }

    public gerarId(): number{
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos){
            if(produto.id === id){
                return produto;
            }
        }
        return null;
    }  
}