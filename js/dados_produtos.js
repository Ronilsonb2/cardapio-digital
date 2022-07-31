let dados_cardapio = [
    {
      "categ": "ofertas_do_dia",
      "pratos": [
        {
            nome: "Lagosta ao thermidor",
            descricao: "Lagosta feita com creme de leite, cenoura, cebola, conhaque e queijo",
            imagem: "assets/prato1.jpg",
            preco: "19,90"
        },
        {
            nome: "Feijão tropeiro",
            descricao: "Deliciosa, acompanha arroz, feijão, couve refogada e fritas",
            imagem: "assets/prato2.jpg",
            preco: "19,90"
        },
        {
            nome: "Espaguete ao frutos do mar",
            descricao: "Espaguete com camarão, mexilhões, lula e polvo ao molho do chef.",
            imagem: "assets/prato3.jpg",
            preco: "24,90"
        },
        {
            nome: "Camarão na champagne com arroz de maçã",
            descricao: "Camarão ao molho, cebola, creme de leite, caldo de peixe e champagne.",
            imagem: "assets/prato1.jpg",
            preco: "29,90"
        },
        {
            nome: "Paella",
            descricao: "Saborosa e tradicional paella que leva camarão, mexilhões, lula e polvo.",
            imagem: "assets/prato2.jpg",
            preco: "9,90"
        },
        {
            nome: "Stroganov",
            descricao: "Versão de strogonoff do Marettimo com frutos do mar flambados no conhaque",
            imagem: "assets/prato3.jpg",
            preco: "29,90"
        },
        {
            nome: "Lula grelhada com arroz negro",
            descricao: "Acompanhado com o delicioso arroz negro ao vinho branco e parmesão",
            imagem: "assets/prato1.jpg",
            preco: "49,90"
        },
        {
            nome: "Costela de panela",
            descricao: "Lagosta feita com creme de leite, cenoura, cebola, conhaque e queijo acompanhado de arroz branco.",
            imagem: "assets/prato2.jpg",
            preco: "69,90"
        }
      ]
    },
    {
      "categ": "semanais",
      "pratos": [
        {
            nome: "Lagosta ao thermidor",
            descricao: "Lagosta feita com creme de leite, cenoura, cebola, conhaque e queijo",
            imagem: "assets/prato1.jpg",
            preco: "19,90"
        },
        {
            nome: "Feijão tropeiro",
            descricao: "Deliciosa, acompanha arroz, feijão, couve refogada e fritas",
            imagem: "assets/prato2.jpg",
            preco: "19,90"
        },
        {
            nome: "Espaguete ao frutos do mar",
            descricao: "Espaguete com camarão, mexilhões, lula e polvo ao molho do chef.",
            imagem: "assets/prato3.jpg",
            preco: "24,90"
        },
        {
            nome: "Camarão na champagne com arroz de maçã",
            descricao: "Camarão ao molho, cebola, creme de leite, caldo de peixe e champagne.",
            imagem: "assets/prato1.jpg",
            preco: "29,90"
        },
        {
            nome: "Paella",
            descricao: "Saborosa e tradicional paella que leva camarão, mexilhões, lula e polvo.",
            imagem: "assets/prato2.jpg",
            preco: "9,90"
        },
        {
            nome: "Lula grelhada com arroz negro",
            descricao: "Acompanhado com o delicioso arroz negro ao vinho branco e parmesão",
            imagem: "assets/prato3.jpg",
            preco: "49,90"
        },
        {
            nome: "Carne de panela",
            descricao: "Lagosta feita com creme de leite, cenoura, cebola, conhaque e queijo acompanhado de arroz branco.",
            imagem: "assets/prato1.jpg",
            preco: "69,90"
        }
      ]
    },
    {
      "categ": "sobremesas",
      "pratos": [
        {
            nome: "Frozen Yogurt",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            imagem: "assets/prato1.jpg",
            preco: "19,90"
        },
        {
            nome: "Suflê de Banana e Canela",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            imagem: "assets/prato2.jpg",
            preco: "19,90"
        },
        {
            nome: "Mousse de Chocolate Light",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            imagem: "assets/prato3.jpg",
            preco: "24,90"
        },
        {
            nome: "Petit Gâteau Tradicional",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            imagem: "assets/prato1.jpg",
            preco: "29,90"
        },
        {
            nome: "Crème Brûlée",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            imagem: "assets/prato2.jpg",
            preco: "9,90"
        }
      ]
    }
  ];
  
let array_pratos;
let prod;
let aux= [];

for(i in dados_cardapio) {
    
    prod = dados_cardapio[i];
    // console.log(prod.categ, prod.pratos);
    // console.log("total de elementos: "+prod.pratos.length);

    let num_id;

    let num = 1;
    
    array_pratos = (prod.categ, prod.pratos);
    
    if((prod.categ == 'ofertas_do_dia') && (prod.pratos.length > 0)){
        
        for(e in prod.pratos){

            let conteudo = `<div class="box" id="oferta-destaque-${num}">
                <div class="pratos">
                    <img src="${prod.pratos[e].imagem}" alt="">
                </div>
                <div class="info-pratos">
                    <h3 class="title">${prod.pratos[e].nome}</h3>
                    <p class="descritivo">${prod.pratos[e].descricao}</p>
                    <p class="price">R$ <span>${prod.pratos[e].preco}</span></p>
                </div>
                <div class="seleciona-qtd seleciona_qtd_geral">
                    <button onclick="escolherItens(this)" data-incremento="#oferta-destaque-${num}" name="btn-qtd-menos" class="btn-qtd btn-qtd-menos">-</button>
                    <input type="text" name="quantidade" value="0" class="gtd-pedido">
                    <button onclick="escolherItens(this)" data-incremento="#oferta-destaque-${num}"  name="btn-qtd-mais" class="btn-qtd btn-qtd-mais">+</button>
                </div>
            </div>`;
            document.querySelector('#section-1').innerHTML += conteudo;

            num++;
        }
        
        // console.log("va;or de num id " + num_id);
    }

    if((prod.categ == 'semanais') && (prod.pratos.length > 0)){

        let title_diarios = `<h1>Pratos diários</h1><div class="destaques"  id="pratos_diarios"></div>`;
        document.querySelector('#semanais').innerHTML += title_diarios;

        for(x in prod.pratos){
            let conteudo = `
                <div class="box" id="ofertas-diaria-${num}">
                    <div class="pratos">
                        <img src="${prod.pratos[x].imagem}" alt="">
                    </div>
                    <div class="info-pratos">
                        <h3 class="title">${prod.pratos[x].nome}</h3>
                        <p class="descritivo">${prod.pratos[x].descricao}</p>
                        <p class="price">R$ <span>${prod.pratos[x].preco}</span></p>
                    </div>
                    <div class="seleciona-qtd seleciona_qtd_geral">
                        <button onclick="escolherItens(this)" data-incremento="#ofertas-diaria-${num}" name="btn-qtd-menos" class="btn-qtd btn-qtd-menos">-</button>
                        <input type="text" name="quantidade" value="0" class="gtd-pedido">
                        <button onclick="escolherItens(this)" data-incremento="#ofertas-diaria-${num}" name="btn-qtd-mais" class="btn-qtd btn-qtd-mais">+</button>
                    </div>
                </div>`;
            document.querySelector('#pratos_diarios').innerHTML += conteudo;
            num++;
        }
    }

    if((prod.categ == 'sobremesas') && (prod.pratos.length > 0)){

        let title_sobremesas = `<h1>Sobremesas</h1><div class="grid sobremesas"  id="sobremesas"></div>`;
        document.querySelector('.sobremesas').innerHTML += title_sobremesas;

        for(y in prod.pratos){
            let conteudo = `
                <div class="box" id="sobremesas-${num}">
                    <div class="pratos">
                        <img src="${prod.pratos[y].imagem}" alt="">
                    </div>
                    <div class="info-pratos">
                        <h3 class="title">${prod.pratos[y].nome}</h3>
                        <p class="descritivo">${prod.pratos[y].descricao}</p>
                        <p class="price">R$ <span>${prod.pratos[y].preco}</span></p>
                    </div>
                    <div class="seleciona-qtd seleciona_qtd_geral">
                        <button onclick="escolherItens(this)" data-incremento="#sobremesas-${num}" name="btn-qtd-menos" class="btn-qtd btn-qtd-menos">-</button>
                        <input type="text" name="quantidade" value="0" class="gtd-pedido">
                        <button onclick="escolherItens(this)" data-incremento="#sobremesas-${num}" name="btn-qtd-mais" class="btn-qtd btn-qtd-mais">+</button>
                    </div>
                </div>`;
            document.querySelector('#sobremesas').innerHTML += conteudo;
            num++;
        }
    }
}
