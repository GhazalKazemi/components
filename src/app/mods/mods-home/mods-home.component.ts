import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'What color is your cat?', content: 'Blue'},
    {title: 'What color is the sky', content: 'Blue'},
    {title: 'What is your name', content: 'you guess'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
