import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Produto} from '../src/app/models/produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent {
  public produtos: Produto[] = [ ];
  constructor(private _produtoService: ProdutoService, private router: Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.listarProdutos(); 
  }
  listarProdutos(): void{
    this._produtoService.getProdutos()
    .subscribe(
      retornaProduto => {
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }              
excluir(id: number){
  this._produtoService.removerProduto(id).subscribe(
    produto => {
      this.listarProdutos();
    }
    err => {console.log("erro ao excluir") }
    
  );

  //window.location.href = "/restrito/lista";
  this.router.navigate(["/restrito/lista"]);
        
  }

}
