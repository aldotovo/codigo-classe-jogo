# Heróis de Aventura

Este projeto permite criar heróis 👷 com atributos personalizáveis e um sistema de ataques exclusivo. Ele foi desenvolvido usando **JavaScript** e exemplifica o uso de classes, métodos e instâncias.

## Atributos dos Heróis 🌟

Cada herói é definido por:

- **Nome** 🌟: Representa o nome do personagem.
- **Idade** ⏳: A idade do herói.
- **Tipo** ⚔️: O estilo do herói, podendo ser:
  - **Mago**
  - **Guerreiro**
  - **Monge**
  - **Ninja**

## Ataques Personalizados ✨

O método `atacar` realiza a ação de ataque e exibe mensagens personalizadas de acordo com o tipo do herói:

- **Mago**: "usou magia" 🌌
- **Guerreiro**: "usou espada" ⚔️
- **Monge**: "usou artes marciais" 🏃
- **Ninja**: "usou shuriken" 🎮

Exemplo:

```javascript
const mago = new Heroi('Merlin', 150, 'mago');
mago.atacar(); // O mago atacou usando magia
```

## Estrutura do Código 🔄

O projeto usa uma **classe genérica **`` com:

- **Construtor**: Define `nome`, `idade` e `tipo`.
- **Método **``: Determina e exibe o ataque com base no tipo do herói.

Exemplo de instância:

```javascript
const guerreiro = new Heroi('Conan', 30, 'guerreiro');
guerreiro.atacar(); // O guerreiro atacou usando espada
```













