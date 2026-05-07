//🌸 quais ações meu carrinho pode fazer 🌸

// 🛍️ CASOS DE USO

// 💖 -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// 💖 -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\n💗 Shopee Cart TOTAL 💗");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`🎀 Total: R$ ${result}`);
}

// 💖 -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
    console.log("🩷 Item removido com sucesso!");
  }
}

// 💖 -> remover apenas 1 unidade do item
async function removeItem(userCart, item) {
  //1️⃣ encontrar o índice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2️⃣ caso não encontre o item
  if (indexFound == -1) {
    console.log("🌷 Item não encontrado");
    return;
  }

  //3️⃣ se quantidade > 1, diminui um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    console.log("💞 Quantidade diminuída!");
    return;
  }

  //4️⃣ se quantidade = 1, remove o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    console.log("🎀 Item removido do carrinho!");
    return;
  }
}

// 💖 -> mostrar todos os itens do carrinho
async function displaycart(userCart) {
  console.log("\n🩷 Shopee Cart List 🩷");

  userCart.forEach((item, index) => {
    console.log(
      `🌸 ${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart };
