import { Component, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  templateUrl: './cutom-renderer.component.html',
})
export class CustomRenderStatusComponent implements ViewCell {
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object
  hasAttempted: boolean = false;

  ngOnInit() {
  }
}