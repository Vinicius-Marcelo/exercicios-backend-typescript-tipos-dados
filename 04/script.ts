const listaEtiquetas = (produto: 
    {produto: string, lote: number, ano: number, qtd: number}
    ): string[] => {
        let etiqueta: string[] = [];

        for(let i = 1; i <= produto.qtd; i++){
            etiqueta.push(`${produto.lote}-${produto.ano}-${i.toString().padStart(3, '0')}`);
        }
        return etiqueta;
};
    
const produto: {produto: string, lote: number, ano: number, qtd: number} = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(listaEtiquetas(produto));
