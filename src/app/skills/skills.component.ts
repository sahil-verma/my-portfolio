import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[] = [
    'HTML/HTML5',
    'CSS/CSS3',
    'PHP',
    'Angular',
    'Vue.JS',
    'Node.JS',
    'ASP.NET',
    'JavaScript',
    'WordPress',
    'TypeScript',
    'Java',
    'C#',
    'Bulma',
    'Angular Material',
    'Bootstrap/Bootstrap4',
    'MySQL',
    'Microsoft Azure',
    'MongoDB',
    'Agile Methodology',
  ];

  constructor() { }

  ngOnInit() {
  }

}
