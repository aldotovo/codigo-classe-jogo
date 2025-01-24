// Classe genérica representando um herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome; // Nome do herói
      this.idade = idade; // Idade do herói
      this.tipo = tipo; // Tipo do herói (ex: guerreiro, mago, monge, ninja)
    }
  
    atacar() {
      let ataque;
  
      // Determina o ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
         }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso
  const mago = new Heroi('Merlin', 150, 'mago');
  mago.atacar(); // O mago atacou usando magia
  
  const guerreiro = new Heroi('Conan', 30, 'guerreiro');
  guerreiro.atacar(); // O guerreiro atacou usando espada
  
  const monge = new Heroi('Aang', 112, 'monge');
  monge.atacar(); // O monge atacou usando artes marciais
  
  const ninja = new Heroi('Ryu', 25, 'ninja');
  ninja.atacar(); // O ninja atacou usando shuriken
  