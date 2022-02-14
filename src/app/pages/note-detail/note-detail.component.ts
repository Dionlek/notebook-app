import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
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
  
  constructor(private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onDeleteNote() {
    this.noteService.deleteNote(this.id);
    this.router.navigate(['./']);
  }

}
