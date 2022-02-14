import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from '../note.model';
import { NoteService } from '../note.service';



@Injectable({ providedIn: 'root' })
export class NoteResolver implements Resolve<any> {

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<any> | boolean {
//     const siteId = route.paramMap.get('id');
    

//     if(!siteId){
//         setTimeout(() => {
//             this.router.navigate(['/not-found']);
//         },500)
//     }else{
//         this.router.navigate([':id']);
//     }
//   }
  
resolve(): Observable<any> {
    return this.noteService.getNotes().pipe(catchError(() => {
      this.router.navigate(['/']);
      return EMPTY;
    }));
  }
}