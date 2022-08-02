import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models';


import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuario[] = []

  constructor( private usuarioService: UsuariosService ) { }

  ngOnInit(): void {

    this.usuarioService.cargarUsuarios()
        .subscribe( usuarios  => {
        
         console.log(usuarios)

         this.usuarios = usuarios
        })

  }

}
