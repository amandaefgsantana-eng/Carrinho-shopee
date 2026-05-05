# 🛒 Projeto Carrinho de Compras (CLI) - Node.js

## 📚 Sobre o projeto

Esse projeto foi desenvolvido como prática de conceitos básicos de JavaScript e Node.js, simulando um carrinho de compras de uma loja de games diretamente no terminal.

A ideia foi criar uma aplicação simples, mas funcional, onde o usuário consegue interagir com um menu, adicionar produtos, visualizar o carrinho, remover itens e simular um pagamento.

Durante o desenvolvimento, o foco foi treinar:

* lógica de programação
* manipulação de arrays
* modularização de código
* entrada de dados pelo terminal (CLI)

---

## 🎮 Funcionalidades

O sistema possui as seguintes funcionalidades:

* 📦 Listar produtos (Xbox e PlayStation)
* ➕ Adicionar produtos ao carrinho
* 🛒 Visualizar o carrinho
* ➖ Remover itens (escolhendo quantidade)
* 💰 Calcular total automaticamente
* 💳 Simular pagamento:

  * PIX
  * Crédito
  * Débito
* 🚪 Sair do sistema

---

## 🧠 Como foi desenvolvido

O projeto foi dividido em módulos para facilitar a organização:

### 📁 `item.js`

Responsável por criar os produtos do carrinho.

Cada item possui:

* nome
* preço
* quantidade
* função para calcular o subtotal

---

### 📁 `cart.js`

Responsável pelas regras do carrinho:

* adicionar item
* listar carrinho
* remover quantidade de item
* calcular total

---

### 📁 `index.js`

Arquivo principal da aplicação.

Aqui foi implementado:

* menu interativo com `readline`
* controle de fluxo (loop do sistema)
* interface no terminal (UX/UI simples)
* simulação de pagamento

---

## ⚙️ Tecnologias utilizadas

* Node.js
* JavaScript (ES Modules)
* Módulo nativo `readline`

---

## ▶️ Como executar o projeto

1. Clone o repositório ou copie os arquivos

2. Certifique-se de ter o Node.js instalado

3. Execute no terminal:

```bash
node index.js
```

---

## 💡 Aprendizados

Durante esse projeto, eu consegui entender melhor:

* como organizar código em módulos
* como trabalhar com entrada de dados no terminal
* como controlar fluxo de aplicação (menus)
* como simular regras de negócio (carrinho de compras)

Também percebi a importância de melhorar a experiência do usuário, mesmo em aplicações simples de terminal.

---

## 🚀 Possíveis melhorias

Se eu continuar evoluindo esse projeto, pretendo:

* salvar o carrinho em arquivo (persistência)
* adicionar sistema de login
* criar interface gráfica (web ou app)
* melhorar ainda mais o design do terminal

---

## 👨‍💻 Conclusão

Esse projeto foi muito importante pra praticar conceitos fundamentais de programação. Mesmo sendo simples, ele simula algo muito usado no mundo real (carrinho de compras), o que ajuda bastante no aprendizado.

---

💬 Projeto desenvolvido para fins de estudo.
