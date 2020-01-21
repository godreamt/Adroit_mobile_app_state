import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DatexPipe } from './services/datex.service';



@NgModule({
  declarations: [DatexPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    DatexPipe
  ],
  providers: [
    DatexPipe
  ]
})
export class SharedModule { }
