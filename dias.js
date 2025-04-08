function servicio(dia) {
    let turnos = [
        ["lunes",  "María"],
        ["martes", "Luis"],
        ["miércoles", "Antonia"],
        ["jueves", "Pedro"],
        ["viernes",  "Marisa"]
    ];
    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i][0] === dia) {
            console.log(`Este día se encarga: ${turnos[i][1]}`)
            return turnos[i][1];
        }
    }
    console.log("No hay servicio ese dia")
    return null;
}
servicio("lunes")
