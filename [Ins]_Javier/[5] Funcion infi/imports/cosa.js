export let profesor = "Javier";
export let numero1 = 4;
export let numero2 = 4;
export let resultado = numero1 + numero2;

export function mensaje (profesor,numero1,numero2,resultado) {
    return `Hola ${profesor} el numero: ${numero1} y el numero: ${numero2} da como resutado: ${resultado}`
}
export const moteros = [
    {
        id: 1,
        nombre: "Wilman",
        apellido: "Rodriguez",
        edad: 19,
        motocicleta: {
            placa: "23HF",
            modelo: "Yamaha"
        }
    },
    {
        id: 2,
        nombre: "Javier",
        apellido: "Lozada",
        edad: 30,
        motocicleta: {
            placa: "YR34",
            modelo: "Toyota"
        }
    },
    {
        id: 3,
        nombre: "Camilo",
        apellido: "Tacue",
        edad: 14,
        motocicleta: {
            placa: "GFH23",
            modelo: "Popeye"
        }
    },
    {
        id: 4,
        nombre: "Wilman",
        apellido: "Narvaez",
        edad: 24,
        motocicleta: {
            placa: "GFJ43",
            modelo: "Motoneta"
        }
    }

]

