import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { AjudasComponent } from './ajudas/ajudas.component';
import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';
import { ReceitaSearchComponent } from './receita-search/receita-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitasComponent,
    AjudasComponent,
    ReceitaDetailComponent,
    ReceitaSearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
