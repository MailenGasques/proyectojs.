class Sistema {
    constructor(pacientes) {
        this.pacientes = pacientes || [];
    }

    buscarNombre(nombre) {
        nombre = nombre.toLowerCase(); 
        let pacienteEncontrado = this.pacientes.find(paciente => paciente.nombre.toLowerCase() === nombre);
        return pacienteEncontrado || null;
    }

    buscarEspecie(especie) {
        especie = especie.toLowerCase(); 
        return this.pacientes.filter(paciente => paciente.especie.toLowerCase() === especie);
    }

    buscarSexo(sexo) {
        sexo = sexo.toLowerCase(); 
        return this.pacientes.filter(paciente => paciente.sexo.toLowerCase() === sexo);
    }

    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    mostrarTodos() {
        console.log('Lista de todos los pacientes:');
        this.pacientes.forEach(paciente => {
            console.log(`Nombre: ${paciente.nombre}, Especie: ${paciente.especie}, Sexo: ${paciente.sexo}, Raza: ${paciente.raza}`);
        });
    }
}
