function identificarBandeira(numero) {
  const bandeiras = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^(5[1-5][0-9]{14}|2(2[2-9]|[3-6][0-9]|7[01])[0-9]{12})$/,
    AmericanExpress: /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    Elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{10})|((5067)|(4576)|(4011))\d{12})$/,
    Hipercard: /^(606282|3841)[0-9]{10,12}$/,
  };

  for (const [bandeira, regex] of Object.entries(bandeiras)) {
    if (regex.test(numero)) {
      return bandeira;
    }
  }
  return "Bandeira não identificada";
}

// Exemplo de uso:
const numeroCartao = "4111111111111111";
console.log(`Bandeira do cartão: ${identificarBandeira(numeroCartao)}`);

module.exports = identificarBandeira;
