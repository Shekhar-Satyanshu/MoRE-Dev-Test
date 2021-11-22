import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'accordian-view',
  templateUrl: './accordian-view.component.html',
  styleUrls: ['./accordian-view.component.scss'],
})
export class AccordianViewComponent implements AfterViewInit {
  @ViewChild('expandWrapper', {static: false}) expandWrapper: ElementRef;
  @Input('expanded') expanded: boolean = false;
  @Input('expandHeight') expandHeight: string = '150px';
  // ToDo Improve trivially inferred

  constructor(public renderer: Renderer2) {
  }

  ngAfterViewInit() {
      this.renderer.setStyle(
          this.expandWrapper.nativeElement,
          'max-height',
          this.expandHeight
      );
  }
}
