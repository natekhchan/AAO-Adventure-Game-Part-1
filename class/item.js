class Item {
  constructor(name, description) {
      this.name = name;
      this.description = description;
      this.isEdible = null;
  }
}

const rock = new Item("rock", "Just a simple rock.", false);
const healthPotion = new Item("healtpotion", "Restores 50 health points.", false);
const manaPotion = new Item("manapotion", "Restores 30 mana points.", false);
const elixirOfStrength = new Item("elixirofstrength", "Temporarily boosts your strength.", false);

module.exports = {
  Item,
  rock,
  healthPotion,
  manaPotion,
  elixirOfStrength,
}
