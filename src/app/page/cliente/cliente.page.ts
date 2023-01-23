import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  pessoas: Pessoa[] = [];

  constructor() { }

  ngOnInit() {
  }

}
