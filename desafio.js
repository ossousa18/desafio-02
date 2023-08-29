//Lista de produto  loja de eletronicos

const list =[
    {nome:"notebook", preco: 4000},
    {nome:"mouse", preco: 40},
    {nome:"fone", preco: 50},
    {nome:"Samsung", preco: 2500},
    {nome:"teclado", preco: 50},
    {nome:"Iphone", preco: 3500}
];

//Filtrar os produtos com preço menor que R$50.

const menor50 = list.filter((list => list.preco < 50))
console.log(menor50)

//Adicionar 10% de desconto em todos os produtos.

const desconto = list.map((list =>{
    return{
        ...list,
        desconto: list.preco * 0.9
    }
}))
console.log(desconto)

//Calcular o preço media dos produtos restantes.

const media = list.reduce((accumalator, list) =>{
    return (accumalator + list.preco);
}, 0);

console.log(media / list.length)


//Encontrar o produto mais caro.

const caro = desconto.reduce(( produtoM ,produto )=>
    produto.preco > produtoM.preco ? produto : produtoM
)
 console.log(caro)

//Criar uma nova lista de produtos apenas com seus nomes.

const newList = list.map(list => list.nome)
 console.log(newList)