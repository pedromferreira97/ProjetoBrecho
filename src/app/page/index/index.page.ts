import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/servico/database.service';
import { Brecho } from 'src/app/model/brecho.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public index!: string;
  public sobre!: string;
  public produtos!: string;
  public login!: string;
  brechos: Brecho[] = [];
  imagem = "https://th.bing.com/th/id/R.2aab066cf8a5cac090b3ffea3f716917?rik=VPbRGbm9NW%2f8QQ&riu=http%3a%2f%2fprimeiroasdamas.com%2fblog%2fwp-content%2fuploads%2f2016%2f07%2fAbsolute-Vintage-London.jpg&ehk=OZsCNqYFDDDMPD%2fNvNiINzyzndGv8mTRwLqq4MupDpc%3d&risl=&pid=ImgRaw&r=0";
  imagem2 = "https://th.bing.com/th/id/R.babc29708aca800fb133c1f76b8badc7?rik=JoDdYvuMP%2fEDAA&pid=ImgRaw&r=0";
  imagem3 = "https://img2.10bestmedia.com/Images/Photos/330991/p-10best-antiques-consignment-heaven_54_990x660.jpg";
  
  public appPages = [
    { title: 'Página Inicial', url: '/page/index', icon: 'mail' },    
    { title: 'Brechós', url: '/page/produtos', icon: 'heart' },
    { title: 'Quem Somos', url: '/page/sobre', icon: 'paper-plane' },
    { title: 'login', url: '/login/login', icon: 'heart' }
  ];
  
  constructor(private activatedRoute: ActivatedRoute, 
    private datab: DatabaseService) { }

  ngOnInit() {
    this.index = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.sobre = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.produtos = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.login = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.datab.getLoja().subscribe(results => this.brechos = results);
  }
}
