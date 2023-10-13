const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');

class World {
    constructor() {
        this.rooms = {};
    }

    loadWorld(worldData) {

        const roomList = worldData.rooms;
        const itemList = worldData.items;

        // Instantiate new room objects
        for (let i = 0; i < roomList.length; i++) {
        let roomData = roomList[i];
        let newRoom = new Room(roomData.name, roomData.description);

        this.rooms[roomData.id] = newRoom;

        // Add items to the room
        if (roomData.items) {
            for (const item of roomData.items) {
                let newItem = new Item(item.name, item.description);
                newRoom.items.push(newItem);
            }
        }
    }
        
        // Connect rooms by ID
        for (let i = 0; i < roomList.length; i++) {
        let roomID = roomList[i].id;
        let roomConnections = roomList[i].exits;

        for (const direction in roomConnections) {
            let connectedRoomID = roomConnections[direction];
            let roomToConnect = this.rooms[connectedRoomID];
            this.rooms[roomID].connectRooms(direction, roomToConnect);
        }
    }

        // Instantiate items
        for (let i = 0 ; i < itemList.length ; i++) {

            let itemData = itemList[i];
            let newItem;

            if (itemData.isFood) {
                newItem = new Food(itemData.name, itemData.description, itemData.nutrition);
            } else {
                newItem = new Item(itemData.name, itemData.description);
            }

            let itemRoom = this.rooms[itemData.room];
            itemRoom.items.push(newItem);
       }

    }
}

module.exports = {
  World,
};
