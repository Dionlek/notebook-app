import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/note.model';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteListComponent implements OnInit {

  private _listFilter: string;
  notes: Note[] = new Array<Note>();
  //notes: Note[];
  subscription: Subscription;

  constructor(private noteService: NoteService,
              private router: Router) { }

  filteredNotes: Note[] = [];

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredNotes = this.performFilter(value);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.notes.filter((note: Note) =>
      note.title.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
     this.subscription = this.noteService.notesChanged
       .subscribe(
         (notes: Note[]) => {
           this.notes = notes;
         }
       );
    this.notes = this.noteService.getNotes();
    this.filteredNotes = this.notes;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteNoteById(id: number) {
    this.noteService.deleteNote(id);
    this.router.navigateByUrl('../');
  }

}
