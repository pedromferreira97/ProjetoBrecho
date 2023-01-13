import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Pessoa } from 'src/app/model/pessoa.model';
import { DatabaseService } from 'src/app/servico/database.service';
import { UtilityService } from 'src/app/servico/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pessoas: Pessoa[] = [];
  
  public index!: string;
  public sobre!: string;
  public produtos!: string;
  public login!: string;
  

  public appPages = [
    { title: 'Página Inicial', url: '/index/index', icon: 'mail' },
    { title: 'Sobre Nós', url: '/sobre/sobre', icon: 'paper-plane' },
    { title: 'Brechós', url: '/produtos/produtos', icon: 'heart' },
    { title: 'Login', url: '/login/login', icon: 'heart' }

  ];
  public labels = ['Família', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private activatedRoute: ActivatedRoute,
    private datab: DatabaseService,
    private alert: AlertController,
    private util: UtilityService) {}
  
  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.sobre = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.produtos = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.login = this.activatedRoute.snapshot.paramMap.get('id') as string;   
    this.datab.getPessoa().subscribe(results => this.pessoas = results)
  }

  async novoCadastro() {
    const alerta = this.alert.create({
      mode: "ios",
      header: 'Cadastrar nova pessoa:',
      inputs: [
        {
          name: 'cpf',
          type: 'text',
          placeholder: 'CPF'
        },
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome'   
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'E-mail'
        },
        {
          name: 'senha',
          type: 'text',
          placeholder: 'Senha'
        },
        {
          name: 'perfil',
          type: 'text',
          placeholder: 'Perfil'
        },

      ],

      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          this.util.toastMessage("Cancelado", "bottom", 2000, "danger");
        }
      },
      {
        text: 'Cadastrar',
        handler: (guardar) => {
          let pessoa = {cpf: guardar.cpf, nome: guardar.nome, email: guardar.email, senha: guardar.senha, perfil: guardar.perfil};
        try {
          this.cadastroPessoa(pessoa);
        } catch(err) {
          console.log(err);
        } finally {
          this.util.toastMessage("Cadastro realizado com sucesso", "bottom", 2000, "success");
        }
        } 
      }
    ]
  });

    (await alerta).present();
}

cadastroPessoa(pessoa: any){
  this.datab.postPessoa(pessoa);
}
}