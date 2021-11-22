import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BackLocationService {

  constructor(private location: Location) { }

  backToLocation () {
    this.location.back();
  }
}
