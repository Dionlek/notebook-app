import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   let self = this;

  //   setTimeout(function () {
  //     self.router.navigate(['./']);
  //   }, 3000)
  // }
}
