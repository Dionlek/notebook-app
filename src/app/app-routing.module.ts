import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoteInfoComponent } from './pages/note-info/note-info.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '',  component: NoteListComponent},
    {path: 'new', component: NoteInfoComponent},
    {path: ':id', component: NoteInfoComponent},
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
