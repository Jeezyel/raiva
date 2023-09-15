import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/models/cidade.model';
import { Estado } from 'src/app/models/estado.model';
import { CidadeService } from 'src/app/services/cidade.service';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {

  
  estados: Estado[] = [];

  cidade: Cidade = new Cidade;

  formGroup: FormGroup;

  
  cidades: Cidade = this.activatedRoute.snapshot.data['cidades'];

  constructor(private estadoService: EstadoService,
    private cidadeService: CidadeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
      this.formGroup = formBuilder.group({
        

      })
    }

  ngOnInit(): void {
    this.estadoService.findAll().subscribe(data => {
      this.estados = data;
    });

    
  }
  salvar(){
    
    if (this.formGroup.valid) {
      const cidade = this.formGroup.value;
      if (cidade.id == null) {
        this.cidadeService.save(cidade).subscribe({
          next: (estadoCadastrado) => {
            this.router.navigateByUrl('/cidades/list');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.cidadeService.update(cidade).subscribe({
          next: (estadoCadastrado) => {
            this.router.navigateByUrl('/cidades/list');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });        
      }
    }
    
  }
  excluir(){
    
  }

}
