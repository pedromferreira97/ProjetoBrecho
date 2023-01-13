import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  public index!: string;
  public sobre!: string;
  public produtos!: string;
  public login!: string;

  public appPages = [
    { title: 'Página Inicial', url: '/index/index', icon: 'mail' },
    { title: 'Sobre Nós', url: '/sobre/sobre', icon: 'paper-plane' },
    { title: 'Brechós', url: '/produtos/produtos', icon: 'heart' },
    { title: 'login', url: '/login/login', icon: 'heart' }
  ];
  public labels = ['Família', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private activatedRoute: ActivatedRoute) {}  

  ngOnInit() {
    this.index = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.sobre = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.produtos = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.login = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
