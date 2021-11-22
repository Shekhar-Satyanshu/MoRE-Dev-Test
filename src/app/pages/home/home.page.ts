import { Component, OnInit } from '@angular/core';
import { BackLocationService } from 'src/app/core/services/back-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isOpened = false;
  public isBookmarkedClicked = false;

  constructor(private backLocation: BackLocationService) {}

  ngOnInit() {}

  backNavigation() {
    this.backLocation.backToLocation();
  }

  expand() {
    this.isOpened = !this.isOpened;
  }

  bookmark() {
    this.isBookmarkedClicked = !this.isBookmarkedClicked;
  }
}
