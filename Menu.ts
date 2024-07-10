import leia = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";

export function main() {
    let opcao, tipo, preco, id: number;
    let nome, fragrancia, generico: string;

    const tipoProdutos = ["Medicamento", "Cosmético"];

    const produtos: ProdutoController = new ProdutoController();

    produtos.cadastrar(new Medicamento(produtos.gerarId(), "Valerimed", 1, 30.00, "Valeriana"));
    produtos.cadastrar(new Medicamento(produtos.gerarId(), "Tylenol", 1, 40.00, "Paracetamol"));

    produtos.cadastrar(new Cosmetico(produtos.gerarId(), "Shampoo Dove", 2, 15.00, "Detox de Abacate"));
    produtos.cadastrar(new Cosmetico(produtos.gerarId(), "Sabonete Dove", 2, 5.00, "Leite de Aveia"));


    do {
        console.log("-----------------------------------------------------");
        console.log("                                                     ");
        console.log("                       Pharmas                       ");
        console.log("                                                     ");
        console.log("-----------------------------------------------------");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Consultar produto por ID             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("-----------------------------------------------------");
        console.log("                                                     ");

        console.log("Digite a opção desejada:");
        opcao = leia.questionInt("");

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produto\n\n");

                console.log("Digite o Nome do Produto: ");
                nome = leia.question("");

                console.log("Digite o Tipo do Produto: ");
                tipo = leia.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

                console.log("Digite o preço do produto: ");
                preco = leia.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o Nome Genérico: ");
                        generico = leia.question("");

                        produtos.cadastrar(
                            new Medicamento(produtos.gerarId(), nome, tipo, preco, generico)
                        );
                        break;
                    case 2:
                        console.log("Digite a Fragrância do Produto: ");
                        fragrancia = leia.question("");

                        produtos.cadastrar(
                            new Cosmetico(produtos.gerarId(), nome, tipo, preco, fragrancia)
                        );
                        break;
                }
                
                break;
        
            case 2:
                console.log("\n\nListar Todos os Produtos\n\n");
                produtos.listarProdutos();
                break;

            case 3:
                console.log("\n\nConsultar Produto por ID\n\n");
                console.log("Digite o ID do Produto: ");
                id = leia.questionInt("");

                produtos.consultarPorID(id);

                break;
            
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = leia.questionInt("");
                

                let produto = produtos.buscarNoArray(id);

                if (produto){
                    console.log("Digite o Nome do Produto: ");
                    nome = leia.question("");

                    console.log("Digite o Tipo do Produto: ");
                    tipo = leia.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

                    console.log("Digite o preço do produto: ");
                    preco = leia.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Nome Genérico: ");
                            generico = leia.question("");
    
                            produtos.atualizar(
                                new Medicamento(id, nome, tipo, preco, generico)
                            );
                            break;
                        case 2:
                            console.log("Digite a Fragrância do Produto: ");
                            fragrancia = leia.question("");
    
                            produtos.atualizar(
                                new Cosmetico(id, nome, tipo, preco, fragrancia)
                            );
                            break;
                    }
                } else {
                    console.log(`Produto de ID ${id} não encontrado!`);
                    
                }
                break;

            case 5:
                console.log("\n\nApagar Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = leia.questionInt("");

                produtos.deletar(id);

                break;

            case 6:
                console.log("Programa encerrado!");
                break;
                
            default:
                console.log("Opção inválida!");
                break;
        }

    } while (opcao != 6);
}

main();
