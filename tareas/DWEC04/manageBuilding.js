class Edificio {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = [];
        document.write(`Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}.<br>`);
    }

    agregarPlantasYPuertas(numPlantas, puertasPorPlanta) {
        for (let i = 0; i < numPlantas; i++) {
            let planta = { puertas: [] };

            for (let j = 0; j < puertasPorPlanta; j++) {
                planta.puertas.push({ propietario: null });
            }

            this.plantas.push(planta);
        }
        document.write(`Agregamos ${numPlantas} plantas con ${puertasPorPlanta} puertas por planta. <br>`);
    }

    modificarNumero(numero) {
        this.numero = numero;
        document.write(`Número del edificio actualizado a ${numero}.<br>`);
    }

    modificarCalle(calle) {
        this.calle = calle;
        document.write(`Nombre de la calle actualizado a ${calle}.<br>`);
    }

    modificarCodigoPostal(codigo) {
        this.codigoPostal = codigo;
        document.write(`Código postal del edificio actualizado a ${codigo}.<br>`);
    }

    imprimeCalle() {
        document.write(`La calle del edificio es: ${this.calle}.<br>`);
    }

    imprimeNumero() {
        document.write(`El número del edificio es: ${this.numero}.<br>`);
    }

    imprimeCodigoPostal() {
        document.write(`El código postal del edificio es: ${this.codigoPostal}.<br>`);
    }

    imprimeCalleCP() {
        document.write(`El edificio está situado en la calle ${this.calle} número ${this.numero}.<br>`);
    }

    agregarPropietario(nombre, planta, puerta) {
        if (planta > 0 && puerta > 0 &&
            planta <= this.plantas.length &&
            puerta <= this.plantas[planta - 1].puertas.length) {
            this.plantas[planta - 1].puertas[puerta - 1].propietario = nombre;
            document.write(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.<br>`);
        } else {
            document.write("Error: Planta o puerta no disponible.<br>");
        }
    }

    imprimePlantas() {
        document.write(`Listado de propietarios del edificio ${this.calle} número ${this.numero}<br>`);

        for (let i = 0; i < this.plantas.length; i++) {
            for (let j = 0; j < this.plantas[i].puertas.length; j++) {
                const propietario = this.plantas[i].puertas[j].propietario || "";
                document.write(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${propietario}.<br>`);
            }
        }
    }
}

// Ejemplos
const edificioA = new Edificio("Garcia Prieto", 58, "15706");
const edificioB = new Edificio("Camino Caneiro", 29, "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");
edificioA.imprimeCodigoPostal();
edificioC.imprimeCalle();
edificioB.imprimeCalleCP();
edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

edificioA.imprimePlantas();

edificioA.agregarPlantasYPuertas(1, 2);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

edificioA.imprimePlantas();
