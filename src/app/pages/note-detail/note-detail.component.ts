import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailComponent implements OnInit {
  id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute) { }

  noteForm: FormGroup;

  ngOnInit(): void {
  }

  onDeleteNote() {
    //this.noteService.deleteNote(this.id);
    this.deleteEvent.emit();
    //this.router.navigate(['../'], {relativeTo: this.route});
  
    //this.router.navigateByUrl('../');
  }

}
