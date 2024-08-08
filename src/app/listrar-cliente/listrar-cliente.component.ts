import {ClienteService} from '../cliente.service';
import {Cliente} from '../models/Cliente.model';
import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-listrar-cliente',
  templateUrl: './listrar-cliente.component.html',
  styleUrls: ['./listrar-cliente.component.css']
})
export class ListrarClienteComponent {
  public clientes: Cliente[] = [] ;

  construtor( private_clienteService:ClienteService,private _router:Router){}

  ngOnInit():void {
    this.listarClientes();
  }
  listarClientes(): void {
    this._clienteService.getClientes().subscribe(
      retornaCliente =>{
        this.clientes = retornaCliente.map(
          item.id,
          item.nome,
          item.endereco
        );
      }
    )
  }
)
}
