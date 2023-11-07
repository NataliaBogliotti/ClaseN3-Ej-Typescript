
//EJEMPLO PARA DEPURAR TYPESCRIPT
let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"

mensaje = "Chau Mundo"

console.log(mensaje)
console.log (typeof [])

//TIPOS DE DATOS
/** 
*tipos de JS
*number
*string
*boolean
*null
*undefined
*object
*function
*
*tipos de Ts
*any tratar de no usarlo
*unknown
*never
*arrays
*tuplas
*Enums
*
*tipos inferidos
**/

let extincionDinosaurios = 70_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

// TIPO ANY

function chanchitoFeliz (config: any){
    return config
}

//TIPO ARRAY

let animales: string [] = ["canchito", "feliz", "felipe"]
let nums: number[] = [1, 2, 3]
let checks:boolean[] = []

let nums2: Array<number> = []

// animales.map (x => x.) // el autocompletado sugiere métodos del tipo de datos


// TUPLAS 

let tupla: [number, string[]]= [1, ["chanchito feliz","chanchito felipe"]]


//ENUMS

const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

//PascalCase
enum Talla {Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl"}

const variable1 = Talla.Grande
console.log (variable1)


const enum LoadingState { Idle, Loading, Success, Error}
const estado = LoadingState.Success

//OBJETOS

type Direccion ={
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla, 
    direccion: Direccion
}

const objeto: Persona = {
 id: 1, 
 nombre: "Hola mundo", 
 talla: Talla.Mediana,
 direccion:{
    numero: 1,
    calle: "Siempre viva",
    pais: "Chanchitolandia"
 }
}

//DEFINIR OTRO ARRAY
const arr: Persona[] = []











