import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscriptcion?: Subscription;

  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscriptcion = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
      this.initialValue = value;
    
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscriptcion?.unsubscribe();
  }

  emitValue(value: string) {
    this.onValue.emit(value);
}

  onKeyPress(searchValue: string) {
    this.debouncer.next(searchValue);
   
   
  }

  


}


