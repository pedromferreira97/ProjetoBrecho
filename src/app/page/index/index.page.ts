import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public index!: string;

  public appPages = [
    { title: 'Página Inicial', url: '/page/index', icon: 'mail' },    
    { title: 'Brechós', url: '/page/produtos', icon: 'heart' },
    { title: 'Quem Somos', url: '/page/sobre', icon: 'paper-plane' }
  ];
  
  public labels = ['Família', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.index = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
