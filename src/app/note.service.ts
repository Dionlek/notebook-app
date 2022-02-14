import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Note } from "./note.model"

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    
    notesChanged = new Subject<Note[]>();

    notes: Note[] = new Array<Note>();

    constructor(private http: HttpClient){}

    getNotes() {
        return this.notes.slice();
    }

    getNote(index: number) {
       return this.notes[index];
    }

    getNoteId(note: Note) {
       return this.notes.indexOf(note);
    }

    addNote(note: Note) { 
       this.notes.push(note);
       this.notesChanged.next(this.notes.slice());
    }

    updateNote(index: number, newNote: Note) {
        this.notes[index] = newNote;
        this.notesChanged.next(this.notes.slice());
    }

    deleteNote(index: number) {
        this.notes.splice(index, 1);
        this.notesChanged.next(this.notes.slice());
      }
}