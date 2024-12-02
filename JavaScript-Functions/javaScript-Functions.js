const titulo = document.querySelector('h1');
titulo.textContent = 'Novo Título'; // Modifica o texto do elemento

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);

const elemento = document.getElementById('meuElemento');

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
alert('Botão clicado!');
});

function mensagem() { console.log('Evento disparado');
    }
    botao.addEventListener('click', mensagem);
    botao.removeEventListener('click', mensagem);

setTimeout(() => {
    console.log('Executado após 2 segundos!');
    }, 2000);

const intervalo = setInterval(() => { console.log('Executando a cada 1 segundo');
    }, 1000);
    // Para parar o intervalo
    setTimeout(() => clearInterval(intervalo), 5000);

const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]

const numeros = [10, 20, 30];
const maioresQue15 = numeros.filter(num => num > 15);
console.log(maioresQue15); // [20, 30]

const numeros = [1, 2, 3];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0); console.log(soma); // 6

const frutas = ['maçã', 'banana', 'laranja']; frutas.forEach(fruta =>
console.log(fruta));

const json = '{"nome":"Ana","idade":30}'; const obj =
JSON.parse(json); console.log(obj.nome); // "Ana"
const novoJson = JSON.stringify(obj); console.log(novoJson); //
'{"nome":"Ana","idade":30}1'

fetch('https://api.exemplo.com/dados')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));

const idade = 18; if (idade
    >= 18) {
    console.log('Maior de idade');
    } else {
    console.log('Menor de idade');
    }
    
const cor = 'vermelho'; switch
(cor) {
case 'vermelho':
console.log('Pare!'); break;
case 'amarelo':
console.log('Atenção!'); break;
case 'verde': console.log('Siga!');
break;
default:
console.log('Cor inválida');
}

const texto = 'olá'; console.log(texto.toUpperCase()); // 'OLÁ'

const texto = 'OLÁ'; console.log(texto.toLowerCase()); // 'olá'

const frase = 'JavaScript é incrível';
console.log(frase.includes('incrível')); // true

const mapa = new Map();
mapa.set('nome', 'João');
console.log(mapa.get('nome')); // 'João'

const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set { 1, 2, 3 }

const aleatorio = Math.random();
console.log(aleatorio);

const numero = 4.7; console.log(Math.floor(numero)); // 4

// 0x39DFC Gustavo Galdino Alexandre Cavalcante.