function suma(a: number, b: string): string;
function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: number): number;
function suma(a: any, b: any) {
    return a + b;
}

let resultado = suma(2, 2) //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

//Aplicar lo mismo para el resto de las operaciones matematicas!

function mult(a:number,b:number): number;
function mult(a:string,b:number): number;
function mult(a:number,b:string): number;
function mult(a:string,b:string): number;
function mult(a:any,b:any): number{
    if(typeof a === 'string'){parseFloat(a)}
    if(typeof b === 'string'){parseFloat(b)}
    return a*b;
}

