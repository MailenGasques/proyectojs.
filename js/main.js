
const sis = new Sistema(pacientes);

let menu_str = `
¿Qué desea hacer?
Ingrese 1 para buscar un paciente por nombre
Ingrese 2 para buscar pacientes por especie
Ingrese 3 para buscar pacientes por sexo
Ingrese 4 para agregar un nuevo paciente
Ingrese 5 para mostrar todos los pacientes
`;

while (true) {
    let opcion = Number(prompt(menu_str));

    switch (opcion) {
        case 1:
            let buscarNombre = prompt('Ingrese el nombre del paciente a buscar:');
            let pacienteEncontrado = sis.buscarNombre(buscarNombre);
            if (pacienteEncontrado) {
                console.log(`Paciente encontrado:`);
                console.log(`Nombre: ${pacienteEncontrado.nombre}`);
                console.log(`Especie: ${pacienteEncontrado.especie}`);
                console.log(`Sexo: ${pacienteEncontrado.sexo}`);
                console.log(`Raza: ${pacienteEncontrado.raza}`);
            } else {
                alert(`No se encontró ningún paciente con el nombre ${buscarNombre}`);
            }
            break;

        case 2:
            let buscarEspecie = prompt('Ingrese la especie de los pacientes a buscar (canino o felino):');
            let pacientesEspecie = sis.buscarEspecie(buscarEspecie);
            if (pacientesEspecie.length > 0) {
                console.log(`Pacientes encontrados con especie ${buscarEspecie}:`);
                pacientesEspecie.forEach(paciente => {
                    console.log(`Nombre: ${paciente.nombre}, Sexo: ${paciente.sexo}, Raza: ${paciente.raza}`);
                });
            } else {
                alert(`No se encontraron pacientes de la especie ${buscarEspecie}`);
            }
            break;

        case 3:
            let buscarSexo = prompt('Ingrese el sexo de los pacientes a buscar (hembra o macho):');
            let pacientesSexo = sis.buscarSexo(buscarSexo);
            if (pacientesSexo.length > 0) {
                console.log(`Pacientes encontrados con sexo ${buscarSexo}:`);
                pacientesSexo.forEach(paciente => {
                    console.log(`Nombre: ${paciente.nombre}, Especie: ${paciente.especie}, Raza: ${paciente.raza}`);
                });
            } else {
                alert(`No se encontraron pacientes del sexo ${buscarSexo}`);
            }
            break;

        case 4:
            let especieNuevo = prompt('Ingrese la especie del nuevo paciente:');
            let razaNuevo = prompt('Ingrese la raza del nuevo paciente:');
            let sexoNuevo = prompt('Ingrese el sexo del nuevo paciente (hembra o macho):');
            let nombreNuevo = prompt('Ingrese el nombre del nuevo paciente:');
            let nuevoPaciente = new Paciente(especieNuevo, razaNuevo, sexoNuevo, nombreNuevo);
            sis.agregarPaciente(nuevoPaciente);
            alert(`Nuevo paciente agregado correctamente.`);
            break;

        case 5:
            sis.mostrarTodos();
            break;

        default:
            alert('Opción no válida. Por favor ingrese una opción válida.');
            break;
    }

    if (confirm('¿Desea salir del menú?')) {
        break;
    }
}