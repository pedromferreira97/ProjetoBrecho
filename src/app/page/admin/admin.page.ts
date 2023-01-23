import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brecho } from 'src/app/model/brecho.model';
import { DatabaseService } from 'src/app/servico/database.service';
import { UtilityService } from 'src/app/servico/utility.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  idRota = null;
  brecho: any = {};

  constructor(private rota: ActivatedRoute,
    private datab: DatabaseService,
    private router: Router,
    private util: UtilityService) { }

  ngOnInit() {
    this.idRota = this.rota.snapshot.params['id'];

    if (this.idRota) {
      this.datab.getLojaUnica(this.idRota).subscribe(results => this.brecho = results);
    }
  }
  editarLoja(form: any) {
    try { 
      this.datab.updateLoja(form.value, this.idRota);
    } finally {
      this.util.toastMessage("Dados atualizados", "bottom", 2000, "secondary");
      this.router.navigate(['/home']);
    }
  }

  salvarLoja(loja: Brecho){
    this.datab.postLoja
  }
}

