import { Component, OnInit, Input } from '@angular/core';
import { Receita } from '../receita';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receita-detail',
  templateUrl: './receita-detail.component.html',
  styleUrls: ['./receita-detail.component.css'],
})
export class ReceitaDetailComponent implements OnInit {

  @Input() receita: Receita;
  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReceita();
  }
  getReceita(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.receitaService.getReceita(id)
      .subscribe(receita => this.receita = receita);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.receitaService.updateReceita(this.receita)
      .subscribe(() => this.goBack());
  }
}
