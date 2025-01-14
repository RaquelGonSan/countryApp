import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  emitValue(value: string) {
    this.onValue.emit(value);
}
}
