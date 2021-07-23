import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    document.body.append(this.element.nativeElement);
  }
  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

}
