import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Receita } from './receita';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class ReceitaService {

  private receitasUrl = 'api/receitas';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET receitas from the server */
  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.receitasUrl)
      .pipe(
        tap(_ => this.log('fetched receitas')),
        catchError(this.handleError<Receita[]>('getReceitas', []))
      );
  }

  /** GET receita by id. Return `undefined` when id not found */
  getReceitaNo404<Data>(id: number): Observable<Receita> {
    const url = `${this.receitasUrl}/?id=${id}`;
    return this.http.get<Receita[]>(url)
      .pipe(
        map(receitas => receitas[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} receita id=${id}`);
        }),
        catchError(this.handleError<Receita>(`getReceita id=${id}`))
      );
  }

  /** GET receita by id. Will 404 if id not found */
  getReceita(id: number): Observable<Receita> {
    const url = `${this.receitasUrl}/${id}`;
    return this.http.get<Receita>(url).pipe(
      tap(_ => this.log(`fetched receita id=${id}`)),
      catchError(this.handleError<Receita>(`getReceita id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchReceitas(term: string): Observable<Receita[]> {
    if (!term.trim()) {
      // if not search term, return empty receita array.
      return of([]);
    }
    return this.http.get<Receita[]>(`${this.receitasUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found receitas matching "${term}"`) :
        this.log(`no receitas matching "${term}"`)),
      catchError(this.handleError<Receita[]>('searchReceitas', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addReceita(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.receitasUrl, receita, this.httpOptions).pipe(
      tap((newReceita: Receita) => this.log(`added receita w/ id=${newReceita.id}`)),
      catchError(this.handleError<Receita>('addReceita'))
    );
  }

  /** DELETE: delete the receita from the server */
  deleteReceita(receita: Receita | number): Observable<Receita> {
    const id = typeof receita === 'number' ? receita : receita.id;
    const url = `${this.receitasUrl}/${id}`;

    return this.http.delete<Receita>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted receita id=${id}`)),
      catchError(this.handleError<Receita>('deleteReceita'))
    );
  }

  /** PUT: update the receita on the server */
  updateReceita(receita: Receita): Observable<any> {
    return this.http.put(this.receitasUrl, receita, this.httpOptions).pipe(
      tap(_ => this.log(`updated receita id=${receita.id}`)),
      catchError(this.handleError<any>('updateReceita'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ReceitaService: ${message}`);
  }
}
