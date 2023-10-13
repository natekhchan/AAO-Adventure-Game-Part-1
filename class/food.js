
// FILL THIS OUT

const { Item } = require('./item');

class Food extends Item {
  constructor(name, description, nutrition) {
    super(name, description);
    this.nutrition = nutrition;
    this.isEdible = true;
  }
}

const sandwich = new Food("sandwich", "A tasty looking sandwich", 10);
const apple = new Food("apple", "A juicy red apple", 5);
const pizza = new Food("pizza", "A delicious slice of pizza", 15);

module.exports = {
  Food,
  sandwich,
  apple,
  pizza,
};
