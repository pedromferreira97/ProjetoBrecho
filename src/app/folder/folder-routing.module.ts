import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from '../page/index/index.page';
import { LoginPage } from '../page/login/login.page';
import { ProdutosPage } from '../page/produtos/produtos.page';
import { SobrePage } from '../page/sobre/sobre.page';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: '',
    component: IndexPage
  },
  {
    path: '',
    component: SobrePage
  },
  {
    path: '',
    component: ProdutosPage
  },
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
