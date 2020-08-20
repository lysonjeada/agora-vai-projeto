import { Component, OnInit } from '@angular/core';

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  receitas: Receita[];


  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.getReceitas();
  }

  getReceitas(): void {
    this.receitaService.getReceitas()
      .subscribe(receitas => this.receitas = receitas);
  }
  delete(receita: Receita): void {
    this.receitas = this.receitas.filter(h => h !== receita);
    this.receitaService.deleteReceita(receita).subscribe();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.receitaService.addReceita({ name } as Receita)
      .subscribe(receita => {
        this.receitas.push(receita);
      });
  }
}
