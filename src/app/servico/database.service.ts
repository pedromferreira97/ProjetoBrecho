import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brecho } from '../model/brecho.model';
import { Pessoa } from '../model/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) {}
   
   readonly APIPessoa = "http://localhost:3000/pessoa/";
   readonly APILoja = "http://localhost:4000/brecho/";

   //Métodos referentes às Pessoas
   getPessoa() {
    return this.http.get<Pessoa[]>(this.APIPessoa);
   }
   getPessoaUnica(id: Number){
    return this.http.get<Pessoa>(this.APIPessoa + id);
   }
   postPessoa(pessoa: any) {
    return this.http.post(this.APIPessoa, JSON.stringify(pessoa), this.httpOptions).subscribe();
   }
   deletaPessoa(id: Number) {
    return this.http.delete(this.APIPessoa + id).subscribe();
   }
   updateStatusPessoa(pessoa: Pessoa){
    return this.http.put(this.APIPessoa + pessoa.id, JSON.stringify(pessoa), this.httpOptions).subscribe();
   }
   updatePessoa(pessoa: Pessoa, id: any){
    return this.http.put(this.APIPessoa + id, JSON.stringify(pessoa), this.httpOptions).subscribe();
   }
   
   //Métodos referentes aos Brechós
   getLoja() {
    return this.http.get<Brecho[]>(this.APILoja);
   }
   getLojaUnica(id: Number){
    return this.http.get<Brecho>(this.APILoja + id);
   }
   postLoja(loja: any) {
    return this.http.post(this.APILoja, JSON.stringify(loja), this.httpOptions).subscribe();
   }
   deletaLoja(id: Number) {
    return this.http.delete(this.APILoja + id).subscribe();
   }
   updateStatus(loja: Brecho){
    return this.http.put(this.APILoja + loja.id, JSON.stringify(loja), this.httpOptions).subscribe();
   }
   updateLoja(loja: Brecho, id: any){
    return this.http.put(this.APILoja + id, JSON.stringify(loja), this.httpOptions).subscribe();
   }
}