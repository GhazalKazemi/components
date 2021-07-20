import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: "John", age: 25, job: "Engineer", employed: true},
    {name: "Elyse", age: 23, job: "Designer", employed: false},
    {name: "Judy", age: 24, job: "Engineer", employed: true}
  ];

  headers = [
    {key:'employed', label: 'Has a Job'},
    {key: 'name', label: "Name"},
    {key: 'age', label: 'Age'},
    {key: 'job', label: "Job"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
