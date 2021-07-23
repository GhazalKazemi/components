import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    document.body.append(this.element.nativeElement);
  }
  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
