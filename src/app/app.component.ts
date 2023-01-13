import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from './model/pessoa.model';
import { DatabaseService } from './servico/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  idRota = null;
  pessoas: Pessoa[] = [];
  indi: any = {};
  
  public index!: string;
  public sobre!: string;
  public produtos!: string;
  public login!: string;

  public appPages = [
    { title: 'Página Inicial', url: '/index/index', icon: 'mail' },
    { title: 'Sobre Nós', url: '/sobre/sobre', icon: 'paper-plane' },
    { title: 'Brechós', url: '/produtos/produtos', icon: 'heart' }
  ]; 

  constructor(private activatedRoute: ActivatedRoute,
    private datab: DatabaseService) {}
  
  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.sobre = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.produtos = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.login = this.activatedRoute.snapshot.paramMap.get('id') as string; 
    
    this.idRota = this.activatedRoute.snapshot.params['id'];

    if (this.idRota) {
    this.datab.getPessoaUnica(this.idRota).subscribe(results => this.indi = results)
  }
}
}
