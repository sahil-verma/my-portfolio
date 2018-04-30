import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[] = [
    'HTML',
    'CSS',
    'PHP',
    'Angular',
    'WordPress',
    'TypeScript',
    'Java',
    'C#',
  ];

  constructor() { }

  ngOnInit() {
  }

}
