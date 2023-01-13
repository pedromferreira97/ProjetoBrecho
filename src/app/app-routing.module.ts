import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index/index',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'index/:id',
    loadChildren: () => import('./page/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'sobre/:id',
    loadChildren: () => import('./page/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'produtos/:id',
    loadChildren: () => import('./page/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'login/:id',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin/:id',
    loadChildren: () => import('./page/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'cliente/:id',
    loadChildren: () => import('./page/cliente/cliente.module').then( m => m.ClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
