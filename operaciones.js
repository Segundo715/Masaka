
const { error } = require('console');
const fs = ('fs');
fs.readFile('equipo.txt','utf8',(error,datos)=>{
if(error){
    console.log('no se pudo leer el archivo');
}else{}
    console.log('se pudo leer el archivo')
}

);

fs.writeFile('equipo.txt','Este es un nuevo archivo.',(error) => {
    if(error){
        console.log('Error al escribir el archivo');
    }else{
        console.log('Se pudo leer el archivo');
    }
}
);

fs.access('mensaje.txt',fs.constants.F_Ok,(error)=>{
    if(error){
        console.log('El archivo no existe')
    }else{
        console.log('El archivo si existe')
    }
}
);

fs.remane('equipo.txt','nuevonombre.txt',(error)=>{
    if(error){
        console.log
    }
}

);

fs.unlink('olademar.txt',(error)=>{
    if(error){
        console.log
    }
}

);

fs.readdir('.',(error, archivos)=>{
    if(error){
        console.log('No se pudo leer la carpeta')
    }else{
        console.log('Se pudo leer el archivo')
    }
}
);

const fs = require('fs');
const path = require('path');

function movArch('nuevo.txt',equipo){
copiarArchivo('nuevo.txt',equipo);
fs.unlinkSync(nuevo);
}

movArch('hola',4)

const fs = require('fs-extra');
fs.move('C:\Users\pepit\Downloads\guigiu\Masaka\Masaka\Masaka','backup/C:\Users\pepit')
.then(() =>
console.log('Archivo movido correctamente'))
.catch((error)=>
console.log('Error al mover el archivo : ',error))


