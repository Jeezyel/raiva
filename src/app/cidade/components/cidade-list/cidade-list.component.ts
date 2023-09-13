import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { Cidade } from 'src/app/models/cidade.model';
import { Estado } from 'src/app/models/estado.model';
import { CidadeService } from 'src/app/services/cidade.service';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent {
  tableColumns: string[] = ['id-column', 'nome-column'];
  cidades : Cidade[] = [];


  estados: Estado[] = [];

  constructor(
    private estadoService: EstadoService,
    private cidadeService: CidadeService,
    private router: Router,) {}

  ngOnInit(): void {
    this.estadoService.findAll().subscribe(data => {
      this.estados = data;
    });
  }

  getCidades(){

    if (this.cidades != null) {
      this.cidadeService.findAll().subscribe(data => this.cidades);
    }

  }

}
