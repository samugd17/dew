class Edificio {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = [];
        console.log(`Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}.`);
    }

    agregarPlantasYPuertas(numPlantas, puertasPorPlanta) {
        for (let i = 0; i < numPlantas; i++) {
            let planta = { puertas: [] };

            for (let j = 0; j < puertasPorPlanta; j++) {
                planta.puertas.push({ propietario: null });
            }

            this.plantas.push(planta);
        }
        console.log(`Agregadas ${numPlantas} plantas con ${puertasPorPlanta} puertas cada una.`);
    }

    modificarNumero(numero) {
        this.numero = numero;
        console.log(`Número del edificio actualizado a ${numero}.`);
    }

    modificarCalle(calle) {
        this.calle = calle;
        console.log(`Nombre de la calle actualizado a ${calle}.`);
    }

    modificarCodigoPostal(codigo) {
        this.codigoPostal = codigo;
        console.log(`Código postal del edificio actualizado a ${codigo}.`);
    }

    imprimeCalle() {
        console.log(`La calle del edificio es: ${this.calle}.`);
    }

    imprimeNumero() {
        console.log(`El número del edificio es: ${this.numero}.`);
    }

    imprimeCodigoPostal() {
        console.log(`El código postal del edificio es: ${this.codigoPostal}.`);
    }

    agregarPropietario(nombre, planta, puerta) {
        if (this.plantas[planta - 1] && this.plantas[planta - 1].puertas[puerta - 1]) {
            this.plantas[planta - 1].puertas[puerta - 1].propietario = nombre;
            console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
        } else {
            console.log("Error: Planta o puerta no existente.");
        }
    }

    imprimePlantas() {
        console.log(`Listado de propietarios del edificio ${this.calle} número ${this.numero}`);

        for (let i = 0; i < this.plantas.length; i++) {
            for (let j = 0; j < this.plantas[i].puertas.length; j++) {
                const propietario = this.plantas[i].puertas[j].propietario || "";
                console.log(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${propietario}.`);
            }
        }
    }
}

// Ejemplos
const edificioA = new Edificio("Garcia Prieto", 58, "15706");
const edificioB = new Edificio("Camino Caneiro", 29, "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");

edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

edificioA.imprimePlantas();

edificioA.agregarPlantasYPuertas(1, 0);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

edificioA.imprimePlantas();
