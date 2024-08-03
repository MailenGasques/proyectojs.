class Paciente {
    constructor(especie, raza, sexo, nombre) {
        this.especie = especie;
        this.raza = raza;
        this.sexo = sexo;
        this.nombre = nombre;
    }
}


let pacientes = [
    new Paciente('canino', 'caniche', 'hembra', 'Lola'),
    new Paciente('canino', 'mestizo', 'macho', 'Hans'),
    new Paciente('felino', 'siames', 'macho', 'Homero'),
    new Paciente('canino', 'bulldog frances', 'hembra', 'India'),
    new Paciente('canino', 'caniche', 'hembra', 'Sofia'),
    new Paciente('felino', 'mestizo', 'hembra', 'Carmina'),
    new Paciente('felino', 'mestizo', 'macho', 'Chino'),
    new Paciente('canino', 'ovejero aleman', 'macho', 'Terry'),
    new Paciente('canino', 'mestizo', 'hembra', 'Rubia'),
    new Paciente('canino', 'cane corso', 'hembra', 'Akiva'),
    new Paciente('felino', 'mestizo', 'hembra', 'Michi'),
    new Paciente('canino', 'pitbull', 'macho', 'Toro'),
    new Paciente('canino', 'teckel', 'hembra', 'Isadora'),
    new Paciente('canino', 'caniche', 'macho', 'Tomy')
];