const numeros: number[] = [1, 5, 2];

const tabuadas = (listaNumeros: number[]) => {
    let resultado: string = "";
     listaNumeros.map((numero) => {
        for(let i = 0; i <= 10 ; i++){
            resultado += `${numero} x ${i} = ${numero*i} \n`
        }
        return resultado += '--------------- \n';
    })
    return resultado;
};

console.log(tabuadas(numeros));