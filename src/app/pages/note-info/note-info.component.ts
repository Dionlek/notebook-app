import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/note.model';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-note-info',
  templateUrl: './note-info.component.html',
  styleUrls: ['./note-info.component.css']
})
export class NoteInfoComponent implements OnInit {
  id: number;
  editMode = false;
  noteForm: FormGroup;

  note: Note;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private noteService: NoteService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null; 
          this.initForm();
        }
      );
  }

  private initForm() {
    let noteTitle = '';
    let noteDescription = '';
    if(this.editMode){
      const note = this.noteService.getNote(this.id);
      noteTitle = note.title;
      noteDescription = note.description;
    }
    this.noteForm = new FormGroup({
      'title': new FormControl(noteTitle, Validators.required),
      'description': new FormControl(noteDescription, Validators.required)
    });
 }

  onSubmit() {
     if(this.editMode){
       this.noteService.updateNote(this.id, this.noteForm.value);
     }else{
       this.noteService.addNote(this.noteForm.value);
     }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
   }

  

}
