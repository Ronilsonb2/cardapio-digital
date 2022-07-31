
let headerHeight = document.querySelector(".header").clientHeight;
console.log(`${headerHeight}px`);

document.querySelector(".conteudo").style.marginTop = `${headerHeight}px`;

 let incluirIdsUnicos = [];
 const salvarId = [];
 const pedidos= [];
 let cont = 1;

function escolherItens(elemento){
    // captando o valor de texto do atributo data
    let value_data_incremento = elemento.getAttribute('data-incremento');
    console.log('value data :'+value_data_incremento);

    let cta_name = elemento.getAttribute('name');

    definirQuantidade(value_data_incremento, cta_name);
}

function definirQuantidade(value_data_incremento, cta_name){
    //adiciona cada ID do box clicado ao array
    salvarId.push({idDiv: value_data_incremento});

    // percorremos todo array e removemos IDs duplicados
    incluirIdsUnicos = new Set(salvarId.map(obj => obj.idDiv));
    console.log(incluirIdsUnicos);

    let quantidadeItens = parseInt((document.querySelector(`${value_data_incremento} .gtd-pedido`)).value);

    if (typeof(quantidadeItens) == "number"){
        if(cta_name === "btn-qtd-mais"){
            if(quantidadeItens >= 0)document.querySelector(`${value_data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeItens + 1));
        }
        if(cta_name === "btn-qtd-menos"){
            if(quantidadeItens > 0)document.querySelector(`${value_data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeItens - 1));

            else {
                document.querySelector(`${value_data_incremento} .gtd-pedido`).setAttribute('value', 0);
                
            }
        }
    }else{
        throw "Tipo inválido";
    }  
}  

function abrirModal() {

        if(incluirIdsUnicos.size > 0) {

            incluirIdsUnicos.forEach(function(value) {

                let img = document.querySelector(`${value} .pratos`).innerHTML;
                let title = document.querySelector(`${value} .title`).innerHTML;
                let descritivo = document.querySelector(`${value} .descritivo`).innerHTML;
                let quantidade = document.querySelector(`${value} .gtd-pedido`).value;
                let price = document.querySelector(`${value} .price span`).innerHTML;
        
                const c = formatarMoeda(price, quantidade);
                const price_real = c.replace('R$ ', '');
                console.log(price_real);
        
                if(quantidade != 0){
        
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
                                <p class="price" style="margin-left: 10px;">Total: R$ <span>${price_real}</span></p>
                            </div>
                        </div>
                    </div>`;
        
                    document.querySelector('#pedido-itens').innerHTML += pedidos;
                };
                
            });

            //Abrir MODAL
            document.querySelector("#fazer-pedido").style.display = 'block';

        }else{
            alert('Nenhum pedido selecionado');
        }
 }

 function fecharModal(){
    document.querySelector("#fazer-pedido").style.display = 'none';

    let pedidos = ``;
    document.querySelector('#pedido-itens').innerHTML = pedidos;
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

function escolherItensModal(elemento){

    // captando o valor de texto do atributo data
    let data_incremento = elemento.getAttribute('data-incremento'); // Pegando id do box modal
    let aux = data_incremento.replace('-modal', ''); //gerando o ID do box pagina inicial 

    let quantidadeModal = parseInt((document.querySelector(`${data_incremento} .gtd-pedido`)).value); // pegando a quantidade de itens e convert INT
    console.log('quantidade: '+quantidadeModal)
    
    let price = document.querySelector(`${aux} .price span`).innerHTML; // pegando o preço do produto
    
    let cta_name = elemento.getAttribute('name');

    if(cta_name === "btn-qtd-mais"){

        if(quantidadeModal > 0){
            document.querySelector(`${data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeModal + 1));
            document.querySelector(`${aux} .gtd-pedido`).setAttribute('value', (quantidadeModal + 1));

            let price_atualizado = (formatarMoeda(price, quantidadeModal + 1)).replace('R$ ', '');
            document.querySelector(`${data_incremento} .price span`).innerHTML = price_atualizado;
        }
    }
    if(cta_name === "btn-qtd-menos"){
        
        if(quantidadeModal >= 1){
            console.log('quantidade no if apos clique: '+quantidadeModal)
            document.querySelector(`${data_incremento} .gtd-pedido`).setAttribute('value', (quantidadeModal - 1));
            document.querySelector(`${aux} .gtd-pedido`).setAttribute('value', (quantidadeModal - 1));

            let price_atualizado = (formatarMoeda(price, quantidadeModal - 1)).replace('R$ ', '');
            document.querySelector(`${data_incremento} .price span`).innerHTML = price_atualizado;
        }else{
            document.querySelector(`${data_incremento}`).style.display = 'none';
            document.querySelector(`${data_incremento} .gtd-pedido`).setAttribute('value', 0);
        }
    }

}
  
            



 


