import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccordianViewComponent } from './accordian-view/accordian-view.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  declarations: [AccordianViewComponent],
  exports: [AccordianViewComponent],
  providers: [],
  entryComponents: [],
})
export class ComponentsModule {}
