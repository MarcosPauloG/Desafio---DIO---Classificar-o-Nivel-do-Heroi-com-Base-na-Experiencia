// index.js

// Função para classificar o nível do herói com base na experiência
function classificarHeroi(nome, experiencia) {
  let nivel;

  // Verifica o nível do herói com base na experiência
  if (experiencia < 1000) {
      nivel = "Ferro";
  } else if (experiencia >= 1001 && experiencia <= 2000) {
      nivel = "Bronze";
  } else if (experiencia >= 2001 && experiencia <= 5000) {
      nivel = "Prata";
  } else if (experiencia >= 5001 && experiencia <= 7000) {
      nivel = "Ouro";
  } else if (experiencia >= 7001 && experiencia <= 8000) {
      nivel = "Platina";
  } else if (experiencia >= 8001 && experiencia <= 9000) {
      nivel = "Ascendente";
  } else if (experiencia >= 9001 && experiencia <= 10000) {
      nivel = "Imortal";
  } else {
      nivel = "Radiante";
  }

  // Retorna a mensagem com o nome e nível do herói
  return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// Função principal para executar o programa
function main() {
  const nome = "Gandalf"; 
  const experiencia = 7500;

  // Chama a função de classificação e exibe o resultado
  const resultado = classificarHeroi(nome, experiencia);
  console.log(resultado);
}

// Executa a função principal
main();