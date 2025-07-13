let enderecos = [];

fetch('http://localhost:3000/enderecos')
.then(retorno => retorno.json())
.then(ende => {
    enderecos = ende;
    renderizarTabela();
});

let renderizarTabela = () => {
    // Selecionar elemento <tbody>
    let tabela = document.getElementById('tabela');

    // Limpar tabela
    tabela.innerHTML = '';

    // Laço de repetição
    for(let i=0; i<enderecos.length; i++){
        // Criar linha de tabela <tr>
        let linha = tabela.insertRow(-1);

        // Criar colunas <td>
        let colunaId         = linha.insertCell(0);
        let colunaNome       = linha.insertCell(1);
        let colunaCEP        = linha.insertCell(2);
        let colunaRua        = linha.insertCell(3);
        let colunaBairro     = linha.insertCell(4);
        let colunaCidade     = linha.insertCell(5);
        let colunaEstado     = linha.insertCell(6);
        let colunaSelecionar = linha.insertCell(7);

        // Informar o valor de cada coluna
        colunaId.innerText    = enderecos[indice].id;
        colunaNome.innerText  = enderecos[indice].nome;
        colunaCEP.innerText = enderecos[indice].cep;
        colunaRua.innerText = enderecos[indice].rua;
        colunaBairro.innerText = enderecos[indice].bairro;
        colunaCidade.innerText = enderecos[indice].cidade;
        colunaEstado.innerText = enderecos[indice].estado;
        colunaSelecionar.innerHTML = `<button onclick='selecionar(${indice})' class='btn btn-primary'>Selecionar</button>`;
    }

}

const cadastrar = () => {
    // Obter os inputs
    let nome   = document.getElementById('nome');
    let cep    = document.getElementById('cep');
    let rua    = document.getElementById('rua');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let uf     = document.getElementById('uf');

    // Gerar objeto endereço
    let obj = {
        'nome': nome.value,
        'cep': cep.value, 
        'rua': rua.value,
        'bairro': bairro.value,
        'cidade': cidade.value,
        'uf': uf.value,
    }

    // Requisição
    fetch(
        'http://localhost:3000/enderecos', 
        {
            method:'POST',
            body:JSON.stringify(obj),
            headers:{'Content-Type':'application/json'}
        }
    )
    .then(res => res.json())
    .then(ende => {
        // Armazenar o endereço no vetor
        enderecos.push(ende);

        // Gerar o índice do endereço no vetor
        let indice = enderecos.length - 1;

        // Selecionar elemento <tbody>
        let tabela = document.getElementById('tabela');

         // Criar linha de tabela <tr>
        let linha = tabela.insertRow(-1);

         // Criar colunas <td>
        let colunaId     = linha.insertCell(0);
        let colunaNome   = linha.insertCell(1);
        let colunaCEP    = linha.insertCell(2);
        let colunaRua    = linha.insertCell(3);
        let colunaBairro = linha.insertCell(4);
        let colunaCidade = linha.insertCell(5);
        let colunaUF     = linha.insertCell(6);
        let colunaSelecionar = linha.insertCell(7);

        // Informar o valor de cada coluna
        colunaId.innerText     = ende.id;
        colunaNome.innerText   = ende.nome;
        colunaCEP.innerText    = ende.cep;
        colunaRua.innerText    = ende.rua;
        colunaBairro.innerText = ende.bairro;
        colunaCidade.innerText = ende.cidade;
        colunaUF.innerText     = ende.uf;
        colunaSelecionar.innerHTML = `<button onclick='selecionar(${indice})' class='btn btn-primary'>Selecionar</button>`;

        // Limpar inputs
        nome.value  = '';
        cep.value   = '';
        rua.value   = '';
        bairro.value = '';
        cidade.value = '';
        uf.value     = '';

        // Focus
        nome.focus();
    });
}

const selecionar = (indice) => {
    // Selecionar todos os elementos de formulário
    let id     = document.getElementById('id');
    let nome   = document.getElementById('nome');
    let cep    = document.getElementById('cep');
    let rua    = document.getElementById('rua');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let uf     = document.getElementById('uf');
    let btnCadastrar = document.getElementById('btnCadastrar');
    let btnAlterar   = document.getElementById('btnAlterar');
    let btnRemover   = document.getElementById('btnRemover');
    let btnCancelar  = document.getElementById('btnCancelar');

    // Obter objeto de endereco
    let obj = enderecos[indice];

    // Preencher inputs (text)
    id.value     = obj.id;
    nome.value   = obj.nome;
    cep.value    = obj.cep;
    rua.value    = obj.rua;
    bairro.value = obj.bairro;
    cidade.value = obj.cidade;
    uf.value     = obj.uf;

    // Visibilidade dos botões
    btnCadastrar.style.display = 'none';
    btnAlterar.style.display   = 'inline-block';
    btnRemover.style.display   = 'inline-block';
    btnCancelar.style.display  = 'inline-block';
}

const cancelar = () => {
    // Selecionar todos os elementos de formulário
    let id     = document.getElementById('id');
    let nome   = document.getElementById('nome');
    let cep    = document.getElementById('cep');
    let rua    = document.getElementById('rua');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let uf     = document.getElementById('uf');
    let btnCadastrar = document.getElementById('btnCadastrar');
    let btnAlterar   = document.getElementById('btnAlterar');
    let btnRemover   = document.getElementById('btnRemover');
    let btnCancelar  = document.getElementById('btnCancelar');

    // Limpar inputs (text)
    id.value     = '';
    nome.value   = '';
    cep.value    = '';
    rua.value    = '';  
    bairro.value = '';
    cidade.value = ''; 
    uf.value     = '';

    // Visibilidade dos botões
    btnCadastrar.style.display = 'inline-block';
    btnAlterar.style.display   = 'none';
    btnRemover.style.display   = 'none';
    btnCancelar.style.display  = 'none';
}

const alterar = () => {
    // Obter os inputs
    let id     = document.getElementById('id');
    let nome   = document.getElementById('nome');
    let cep    = document.getElementById('cep');
    let rua    = document.getElementById('rua');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let uf     = document.getElementById('uf');

    // Gerar objeto endereco
    let obj = {
        'nome': nome.value,
        'cep': cep.value,
        'rua': rua.value,
        'bairro': bairro.value,
        'cidade': cidade.value,
        'uf': uf.value,
    }

    // Requisição
    fetch(
        `http://localhost:3000/enderecos/${id.value}`, 
        {
            method:'PUT',
            body:JSON.stringify(obj),
            headers:{'Content-Type':'application/json'}
        }
    )
    .then(res => res.json())
    .then(ende => {
        // Localizar o endereço no vetor
        let indice = enderecos.findIndex(pessoa => pessoa.id == ende.id);

        // Alterar objeto no vetor
        enderecos[indice] = ende;

        // Atualizar tabela
        renderizarTabela();
        
        // Limpar inputs
        id.value     = '';
        nome.value   = '';
        cep.value    = '';
        rua.value    = '';
        bairro.value = '';
        cidade.value = '';
        uf.value     = '';

        // Focus
        nome.focus();
    });
}

const remover = () => {
    // Obter os input id
    let id = document.getElementById('id');
    
    // Requisição
    fetch(
        `http://localhost:3000/enderecos/${id.value}`, 
        {
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        }
    )
    .then(res => res.json())
    .then(ende => {
        // Localizar o endereço no vetor
        let indice = enderecos.findIndex(pessoa => pessoa.id == ende.id);

        // Remover objeto no vetor
        enderecos.splice(indice, 1);

        // Atualizar tabela
        renderizarTabela();
        
        // Limpar inputs
        id.value     = '';
        nome.value   = '';
        cep.value    = '';
        rua.value    = '';
        bairro.value = '';
        cidade.value = '';
        uf.value     = '';

        // Focus
        nome.focus();
    });
}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};