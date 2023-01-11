import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  public appPages = [
    { title: 'Página Inicial', url: '/page/index', icon: 'mail' },    
    { title: 'Brechós', url: '/page/produtos', icon: 'heart' },
    { title: 'Quem Somos', url: '/page/sobre', icon: 'paper-plane' }
  ];
  public labels = ['Família', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  ngOnInit() {
  }

}
