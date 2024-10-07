export class Produto{
    map(arg0: (item: any) => any): Produto[] {
      throw new Error('Method not implemented.');
    }
    id: number = 0 ;
    produto: string = "";
    descricao: string = "";
    foto: string = "";
    preco: number = 0;
}

constructor(id: number, produto: string, descricao: string, foto: string, preco: number){
this.id = id;
this.produto = produto;
this.descricao = descricao;
this.foto = foto;
this.preco = preco;
}
]
