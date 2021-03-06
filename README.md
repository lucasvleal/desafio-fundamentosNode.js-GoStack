<h1>Desafio Back-end: Fundamento de Node.js</h1>

<h4>Esse repositório é referente ao quarto desafio do Bootcamp GoStack turma 12, oferecido pela <a href="https://rocketseat.com.br/">Rocketseat </a>.</h4>

Nele aplicamos um pouco do conhecimento adquirido no *quintdo módulo* do curso => **Primeiro projeto com Node.js: Fundamentos de Node.js**

Recebemos um template e o editamos para que atendesse aos requisitos propostos de interações com a API desenvolvida no primeiro desafio

```POST /transactions:``` A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :
```
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

```GET /transactions:``` Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:
```
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

## Tecnologias Usadas
- JavaScript
- Node.js
- Typescript
- eslint
- Express
- ts-node-dev
- uuId
- Teste automatizados

Concluído no dia: **24/06/2020**
