import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] = [
    {
      nome: "mario",
      email: "mario@mario.com",
    },

    {
      nome: "lara",
      email: "lara@lara.com"
    }
  ]
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

  }

}
