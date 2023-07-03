// import dados_cardapio from './dados_produtos.js';

const c = (el) => document.querySelector(el);

let headerHeight = c(".header").clientHeight;
console.log(`${headerHeight}px`);

c(".conteudo").style.marginTop = `${headerHeight +20}px`;
// c('.fazer-pedido').style.top = `${headerHeight - 4}px`;

let incluirIdsUnicos = [];
const salvarId = [];
const pedidos = [];
let cont = 1;

let quantidadeItens = 0;
let price_atualizado = 0;
let cta_name;

const qtd_carrinho = [];

function escolherItens(elemento) {
    // captando o valor de texto do atributo data
    let value_data_incremento = elemento.getAttribute('data-incremento');
    console.log('value data :' + value_data_incremento);

    cta_name = elemento.getAttribute('name');

    definirQuantidade(value_data_incremento, cta_name);
}

function definirQuantidade(value_data_incremento, cta_name) {
    //adiciona cada ID do box clicado ao array
    salvarId.push({ idDiv: value_data_incremento });

    // percorremos todo array e removemos IDs duplicados
    incluirIdsUnicos = new Set(salvarId.map(obj => obj.idDiv));

    const price = c(`${value_data_incremento} .price_auxiliar`).innerHTML; // pegando o preço do produto

    quantidadeItens = parseInt((c(`${value_data_incremento} .gtd-pedido`)).value);

    price_atualizado;

    if (typeof (quantidadeItens) == "number") {
        if (cta_name === "btn-qtd-mais") {
            if (quantidadeItens >= 0) {
                c(`${value_data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeItens + 1));

                price_atualizado = (formatarMoeda(price, quantidadeItens + 1)).replace('R$ ', '');
                c(`${value_data_incremento} .price span`).innerHTML = price_atualizado;
                c(`${value_data_incremento}`).style.backgroundColor = '#a6888842';
                quantidadeItens + 1;

                // qtd_carrinho.push({ value_data_incremento: quantidadeItens });
                console.log("quantidade de itens: +++ " + quantidadeItens + 1);

                atualizarTotalItensCarrinho(quantidadeItens + 1);
            }
            else {
                c(`${value_data_incremento}`).style.backgroundColor = '#fff';
                console.log(quantidadeItens);
            }
        }
        if (cta_name === "btn-qtd-menos") {
            if (quantidadeItens >= 1) {
                c(`${value_data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeItens - 1));

                price_atualizado = (formatarMoeda(price, quantidadeItens - 1)).replace('R$ ', '');
                c(`${value_data_incremento} .price span`).innerHTML = price_atualizado;

                // qtd_carrinho.push({ value_data_incremento: quantidadeItens });
                console.log("quantidade de itens --- : " + quantidadeItens - 1);

                atualizarTotalItensCarrinho(quantidadeItens - 1);
            }
            else {
                c(`${value_data_incremento} .gtd-pedido`).setAttribute('value', 0);
                c(`${value_data_incremento}`).style.backgroundColor = '#fff';

                c(`${value_data_incremento} .price span`).innerHTML = price;

                console.log(quantidadeItens);
            }
        }
    } else {
        throw "Tipo inválido";
    }
}

function atualizarTotalItensCarrinho(qtd) {
    c('.qtd-itens-carrinho').innerHTML = qtd;

}

function abrirModal() {

    if (incluirIdsUnicos.size > 0) {

        incluirIdsUnicos.forEach(function (value) {

            let img = c(`${value} .itens`).innerHTML;
            let title = c(`${value} .title`).innerHTML;
            let descritivo = c(`${value} .descritivo`).innerHTML;
            let quantidade = c(`${value} .gtd-pedido`).value;
            let price = c(`${value} .price span`).innerHTML;

            // const c = formatarMoeda(price, quantidade);
            // const price_real = c.replace('R$ ', '');
            console.log(price);

            if (quantidade != 0) {

                let id = value.replace('#', '');

                let pedidos = `
                        <div class="box-item" id="${id}-modal">
                            ${img}
                            <div class="descricao-item">
                            <strong>${title}</strong>
                            <p>${descritivo}</p>
                            <div class="seleciona-qtd">
                                <button onclick="escolherItensModal(this)" data-incremento="${value}-modal" name="btn-qtd-menos" value="1"  class="intem-1 btn-qtd btn-qtd-menos">-</button>
                                <input type="text" name="quantidade" value="${quantidade}" class="gtd-pedido">
                                <button onclick="escolherItensModal(this)" data-incremento="${value}-modal" name="btn-qtd-mais" value="1"  class="intem-1 btn-qtd btn-qtd-mais">+</button>
                                <p class="price" style="margin-left: 10px;">Total: R$ <span>${price}</span></p>
                            </div>
                        </div>
                    </div>`;

                c('#pedido-itens').innerHTML += pedidos;
            };

        });

        //Abrir MODAL
        c("#fazer-pedido").style.display = 'block';

    } else {
        alert('Nenhum pedido selecionado');
    }
}

function fecharModal() {
    c("#fazer-pedido").style.display = 'none';

    let pedidos = ``;
    c('#pedido-itens').innerHTML = pedidos;
}

function formatarMoeda(price, quantidade) {
    const a = price.replace(',', '.');

    // Formatando para o formato de moeda brasileira:
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let b = a * quantidade;
    const price_final = formatter.format(b);
    return price_final;
}

function escolherItensModal(elemento) {

    // captando o valor de texto do atributo data
    let data_incremento = elemento.getAttribute('data-incremento'); // Pegando id do box modal
    let aux = data_incremento.replace('-modal', ''); //gerando o ID do box pagina inicial 

    let quantidadeModal = parseInt((c(`${data_incremento} .gtd-pedido`)).value); // pegando a quantidade de itens e convert INT


    const price = c(`${aux} .price_auxiliar`).innerHTML; // pegando o preço do produto

    cta_name = elemento.getAttribute('name');

    price_atualizado;

    if (cta_name === "btn-qtd-mais") {
        if (quantidadeModal > 0) {
            c(`${data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeModal + 1));
            c(`${aux} .gtd-pedido`).setAttribute('value', (quantidadeModal + 1));

            price_atualizado = (formatarMoeda(price, quantidadeModal + 1)).replace('R$ ', '');
            c(`${data_incremento} .price span`).innerHTML = price_atualizado;
        }
    }
    if (cta_name === "btn-qtd-menos") {
        if (quantidadeModal >= 1) {
            console.log('quantidade no if apos clique: ' + quantidadeModal)
            c(`${data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeModal - 1));
            c(`${aux} .gtd-pedido`).setAttribute('value', (quantidadeModal - 1));

            price_atualizado = (formatarMoeda(price, quantidadeModal - 1)).replace('R$ ', '');
            c(`${data_incremento} .price span`).innerHTML = price_atualizado;
        } else {
            c(`${data_incremento}`).style.display = 'none';
            c(`${data_incremento} .gtd-pedido`).setAttribute('value', 0);
        }
    }

}

function logoMobile(){
    document.querySelector(".menu").classList.toggle("_open");
    document.querySelector(".menu-mobile").classList.toggle("_open");

    document.querySelector("#line1").classList.toggle("_open");
    document.querySelector("#line2").classList.toggle("_open");
    document.querySelector("#line3").classList.toggle("_open");

    document.querySelector(".fade").classList.toggle("_open");
}






