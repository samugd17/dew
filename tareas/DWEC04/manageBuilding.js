class Building {
    constructor(street, streetNumber, zipCode) {
        this.street = street;
        this.streetNumber = streetNumber;
        this.zipCode = zipCode;
        this.floors = [];
        console.log(`Construido nuevo edificio en: ${street}, nº: ${streetNumber}, CP: ${zipCode}.`);
    }

    addFloorsAndDoors(numFloors, doorsPerFloor) {
        for (let i = 0; i < numFloors; i++) {
            let floor = { doors: [] };

            for (let j = 0; j < doorsPerFloor; j++) {
                floor.doors.push({ owner: null });
            }

            this.floors.push(floor);
        }
        console.log(`Added ${numFloors} floors with ${doorsPerFloor} doors each.`);
    }

    modifyNumber(number) {
        this.streetNumber = number;
        console.log(`Building number updated to ${number}.`);
    }

    modifyStreet(street) {
        this.street = street;
        console.log(`Street name updated to ${street}.`);
    }

    modifyZipCode(code) {
        this.zipCode = code;
        console.log(`Building ZIP code updated to ${code}.`);
    }

    printStreet() {
        console.log(`The street of the building is: ${this.street}.`);
    }

    printNumber() {
        console.log(`The number of the building is: ${this.streetNumber}.`);
    }

    printZipCode() {
        console.log(`The ZIP code of the building is: ${this.zipCode}.`);
    }

    addOwner(name, floor, door) {
        if (this.floors[floor - 1] && this.floors[floor - 1].doors[door - 1]) {
            this.floors[floor - 1].doors[door - 1].owner = name;
            console.log(`${name} is now the owner of door ${door} on floor ${floor}.`);
        } else {
            console.log("Error: Floor or door does not exist.");
        }
    }

    printFloors() {
        console.log(`List of owners of the building on ${this.street} number ${this.streetNumber}`);

        for (let i = 0; i < this.floors.length; i++) {
            for (let j = 0; j < this.floors[i].doors.length; j++) {
                const owner = this.floors[i].doors[j].owner || "";
                console.log(`Owner of door ${j + 1} on floor ${i + 1}: ${owner}.`);
            }
        }
    }
}

// Example usage
const buildingA = new Building("Garcia Prieto", 58, "15706");
const buildingB = new Building("Camino Caneiro", 29, "32004");
const buildingC = new Building("San Clemente", "s/n", "15705");

buildingA.addFloorsAndDoors(2, 3);
buildingA.addOwner("Jose Antonio Lopez", 1, 1);
buildingA.addOwner("Luisa Martinez", 1, 2);
buildingA.addOwner("Marta Castellón", 1, 3);
buildingA.addOwner("Antonio Pereira", 2, 2);

buildingA.printFloors();

buildingA.addFloorsAndDoors(1, 0);
buildingA.addOwner("Pedro Meijide", 3, 2);

buildingA.printFloors();
