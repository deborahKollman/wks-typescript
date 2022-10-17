function suma2(a: number, b: number): number;
function suma2(a: string, b: string): string;
function suma2(a: any,b: any):any{
    return a+b;
}

console.log(suma2(1,2))
console.log(suma2('hola ','mundo!'))

// Logra que esta funcion tambien concatene strings