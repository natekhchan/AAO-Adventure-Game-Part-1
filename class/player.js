const {Room} = require("../class/room");
const {Item} = require("../class/item");
const {Food} = require("../class/food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
    // prints inventory whether the player is carrying / not carrying anything        
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }
    
    takeItem(itemName) {
    // takes items whether they are available in the current room    
        const itemToTake = this.currentRoom.getItemByName(itemName);
        if (itemToTake) {
          this.items.push(itemToTake);
          this.currentRoom.addItem(itemToTake); // Change removeItem to addItem
          console.log(`You have taken ${itemToTake.name}.`);
        } else {
          console.log(`There is no ${itemName} here.`);
        }
      }
    
    
    dropItem(itemName) {
    // drops items if they are not in the room
        const itemToDrop = this.getItemByName(itemName);
        if (itemToDrop) {
            this.items = this.items.filter(item => item !== itemToDrop);
            this.currentRoom.addItem(itemToDrop);
            console.log(`You have dropped ${itemToDrop.name}.`);
        } else {
            console.log(`You don't have a ${itemName} to drop.`);
        }
    }

    eatItem(itemName) {
    // allows the player to eat the available room items
        const item = this.getItemByName(itemName);
    
        if (!item) {
            console.log(`You don't have ${itemName}.`);
        } else if (item) {
            // eat the item and gain x amount of nutrition
            console.log(`You eat the ${item.name} and gained ${item.nutrition} nutrition.`);
            this.items = this.items.filter(existingItem => existingItem !== item);
         } else {
            console.log(`You can't eat the ${item.name}.`);
        }
    }

    getItemByName(itemName) {
        return this.items.find(item => item.name === itemName);
  }  
}

module.exports = {
  Player,
};
