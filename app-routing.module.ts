import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListrarClienteComponent} from './listar-cliente/listar-cliente.component';
import { AtualizarClienteComponent} from './atualizar-cliente/atualizar-cliente.component';
import { CadastrarClienteComponent} from './cadastrar-cliente/cadastrar-cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path: 'restrito',component: RestritoComponent},
 { path:'listar', component: ListarClienteComponent},
  path:'cadastrar', component: CadastrarClienteComponent},
  {path:'editar/:id', component:
    AtualizarClienteComponent},

  {path:'', redirectTo:'/listar',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
