//paciente = new paciente(nhc=123,nombre='samuel', apellidos='gonzalez',fecha='28/10/2005',sexo='M')

class paciente {
    constructor(nhc, nombre, apellidos, fecha, sexo) {
        this.NHC = nhc
        this.nombre = nombre
        this.apellidos = apellidos
        this.fecha = fecha
        this.sexo = sexo
        this.historial = []
        console.log(`Añadido nuevo paciente ${sexo} con NHC: ${nhc}, nombre: ${nombre} y apellidos: ${apellidos}.
        Nacido en fecha de ${fecha}.`);
    }

    modifyNHC() {
        let newNHC = prompt("Nuevo NHC:");
        let confirmation = confirm("¿Estás seguro que deseas cambiar el NHC?");
        if (confirmation == true) {
            this.nhc = newNHC;
            return alert(`Nuevo NHC: ${this.nhc}`);
        } else {
            return false;
        } 
    }

    modifyName() {
        let newNombre = prompt("Nuevo nombre:");
        let confirmation = confirm("¿Estás seguro que deseas cambiar el nombre?");
        if (confirmation == true) {
            this.nombre = newNombre;
            return alert(`Nuevo nombre: ${this.nombre}`);
        } else {
            return false;
        } 
    }

    modifySurname() {
        let newApellidos = prompt("Nuevos apellidos:");
        let confirmation = confirm("¿Estás seguro que deseas cambiar los apellidos?");
        if (confirmation == true) {
            this.apellidos = newApellidos;
            return alert(`Nuevos apellidos: ${this.apellidos}`);
        } else {
            return false;
        } 
    }

    modifyDate() {
        let newFecha = prompt("Nueva fecha de nacimiento:");
        let confirmation = confirm("¿Estás seguro que deseas cambiar la fecha de nacimiento");
        if (confirmation == true) {
            this.fecha = newFecha;
            return alert(`Nueva fecha de nacimiento: ${this.fecha}`);
        } else {
            return false;
        } 
    }

    modifySex() {
        let newSexo = prompt("Nuevo sexo:");
        let confirmation = confirm("¿Estás seguro que deseas cambiar el sexo?");
        if (confirmation == true) {
            this.sexo = newSexo;
            return alert(`Nuevo sexo: ${this.newSexo}`);
        } else {
            return false;
        } 
    }

    addToHistorial() {
        let id = prompt("Identificación:")
        let fecha = prompt("Fecha del episodio:");
        let diagnostico = prompt("Diagnóstico:");
        let tratamiento = prompt("Tratamiento:");
        let medico = prompt("Médico responsable:");
        let episodio = {id:id, fecha:fecha, diagnostico:diagnostico, tratamiento:tratamiento, medico:medico}
        this.historial.push(episodio)
    }

    modifyHistorial(id) {
        for (let i=0; i < this.historial.length; i++ ) {
            if (this.historial[i]['id'] == id) {
                this.historial[i]['id'] = prompt("Identificación:");
                this.historial[i]['fecha'] = prompt("Fecha del episodio:");
                this.historial[i]['diagnostico'] = prompt("Diagnóstico:");
                this.historial[i]['tratamiento'] = prompt("Tratamiento:");
                this.historial[i]['medico'] = prompt("Médico responsable:");
            }
        }
    }

    showHistorial() {
        console.log(this.historial)
    }
}