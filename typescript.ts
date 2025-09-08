/*
Ejercicio 1
Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
Imprimir en consola el valor de cada variable usando console.log()

Ejercicio 2
Declarar una función que reciba dos números como parámetros y retorne su suma.
Asegurar que los parámetros y el valor de retorno sean de tipo number.
Llamar a la función e imprimir el resultado.
Realizar otra función que reste dos números.
Realizar otra función que multiplique dos números.

Ejercicio 3
Crear un array de números llamado "numeros" y agregar algunos valores.
Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

Ejercicio 4
Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
Crear tres objetos que sigan la estructura de la interfaz.
Imprimir en consola.

Ejercicio 5
Declara una variable que pueda ser de tipo string o number.
Asigna un valor string y luego cambia su valor a number.
Imprimir en consola ambos casos.

Ejercicio 6
Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
Crear un array de "productos" con seis objetos que sigan la interfaz.
Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

Ejercicio 7
Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
Crear un array de "clientes" con seis objetos que sigan la interfaz.
Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

Ejercicio 8: Catálogo de Productos - forEach
Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 

Ejercicio 9: Catálogo de Productos - filter
Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
Imprimor productosBaratos en la consola.

Ejercicio 10: Actualización de Inventario - map
Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
Imprimir catalogoConDescuento en la consola.

Ejercicio 11: Búsqueda de Usuario - find
Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
Imprimir en la consola el objeto del usuario encontrado.

Ejercicio 12: Contador de Usuarios Activos - filter y length
Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 

Ejercicio 13: Actualización de Estado de Usuarios
Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
Imprimir el array usuarios para verificar que todos los usuarios están inactivos.

Ejercicio 14: Formateo de Productos para Mostrar - map
Usar el array catalogo.
Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
Imprimir el array productosFormato en la consola.

Ejercicio 15:
Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:
const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

Ejercicio 16:
Vamos a volver a usar la interfaz User del ejercicio anterior.
Crear una nueva interfaz Admin segun los datos que tenemos.
Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 

type Person = User;
const persons: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
*/

// Ejercicio 1
let nombre: string = "Yanina";
let edad: number = 34;
let esEstudiante: boolean = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);

// Ejercicio 2
function sumar(a: number, b: number): number {
    return a + b;
}

function restar(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(6, 7));

// Ejercicio 3
const numeros: number[] = [1, 2, 3, 4, 5];
numeros.forEach(num => console.log(num * 2));

// Ejercicio 4
interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

const persona1: Persona = { nombre: "Ana", edad: 20, esEstudiante: true };
const persona2: Persona = { nombre: "Carlos", edad: 30, esEstudiante: false };
const persona3: Persona = { nombre: "María", edad: 25, esEstudiante: true };

console.log(persona1);
console.log(persona2);
console.log(persona3);

// Ejercicio 5
let variableMixta: string | number;
variableMixta = "Hola";
console.log("String:", variableMixta);
variableMixta = 42;
console.log("Number:", variableMixta);

// Ejercicio 6
interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}

const productos: Producto[] = [
    { nombre: "Laptop", precio: 1000, enStock: true },
    { nombre: "Mouse", precio: 25, enStock: false },
    { nombre: "Teclado", precio: 75, enStock: true },
    { nombre: "Monitor", precio: 300, enStock: true },
    { nombre: "Auriculares", precio: 50, enStock: false },
    { nombre: "Webcam", precio: 40, enStock: true }
];

function productosEnStock(lista: Producto[]): Producto[] {
    return lista.filter(p => p.enStock);
}
function productosSinStock(productos: Producto[]): Producto[] {
    return productos.filter(producto => !producto.enStock);
}

console.log("Productos en stock:", productosEnStock(productos));
console.log("Productos sin stock:", productosSinStock(productos));

// Ejercicio 7
interface Cliente {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    edad: number;
}

const clientes: Cliente[] = [
    { id: 1, nombre: "Juan", email: "juan@email.com", activo: true, edad: 28 },
    { id: 2, nombre: "Laura", email: "laura@email.com", activo: false, edad: 35 },
    { id: 3, nombre: "Pedro", email: "pedro@email.com", activo: true, edad: 22 },
    { id: 4, nombre: "Sofía", email: "sofia@email.com", activo: true, edad: 40 },
    { id: 5, nombre: "Miguel", email: "miguel@email.com", activo: false, edad: 31 },
    { id: 6, nombre: "Elena", email: "elena@email.com", activo: true, edad: 26 }
];

function clientesActivos(clientes: Cliente[]): Cliente[] {
    return clientes.filter(cliente => cliente.activo);
}

function clientesInactivos(clientes: Cliente[]): Cliente[] {
    return clientes.filter(cliente => !cliente.activo);
}

console.log("Clientes activos:", clientesActivos(clientes));
console.log("Clientes inactivos:", clientesInactivos(clientes));

// Ejercicio 8
interface ProductoCatalogo {
    nombre: string;
    precio: number;
}

const catalogo: ProductoCatalogo[] = [
    { nombre: "Camiseta", precio: 25 },
    { nombre: "Pantalón", precio: 45 },
    { nombre: "Zapatos", precio: 80 },
    { nombre: "Gorra", precio: 15 },
    { nombre: "Bufanda", precio: 20 }
];

catalogo.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

// Ejercicio 9
const productosBaratos = catalogo.filter(producto => producto.precio < 50);
console.log("Productos baratos:", productosBaratos);

// Ejercicio 10
const catalogoConDescuento = catalogo.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
}));
console.log("Catálogo con descuento:", catalogoConDescuento);

// Ejercicio 11
interface Usuario {
    id: number;
    nombre: string;
    activo: boolean;
}

const usuarios: Usuario[] = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "Marta", activo: true },
    { id: 4, nombre: "Jorge", activo: true }
];

const usuarioEncontrado = usuarios.find(usuario => usuario.id === 3);
console.log("Usuario con ID 3:", usuarioEncontrado);

// Ejercicio 12
const usuariosActivos = usuarios.filter(usuario => usuario.activo);
console.log("Usuarios activos:", usuariosActivos.length);

// Ejercicio 13
usuarios.forEach(usuario => {
    usuario.activo = false;
});
console.log("Todos los usuarios inactivos:", usuarios);

// Ejercicio 14
const productosFormato = catalogo.map(producto => 
    `Producto: ${producto.nombre}, Precio: $${producto.precio}`
);
console.log("Productos formateados:", productosFormato);

// Ejercicio 15
interface User {
    name: string;
    age: number;
    occupation: string;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

// Ejercicio 16
interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson2(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Persons:');
persons.forEach(logPerson2);

