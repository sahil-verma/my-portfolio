import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Object> = [
    {
      heading:"QuizApp",
      imageURL: "/assets/images/img1.jpg",
      languages: "Language Used - ASP.NET, Entity Framework, Bulma, Angular2",
      desc: " sahil verma is a good guysdasdasd dadasda adadasd adadasdas asda ads asdas daa afafa a afaa fafasa",
      link: "https://github.com/sahil-verma/VueQuizz"
    },
    {
      heading:"Luxury Muskoka Vaccations",
      desc: "",
      imageURL: "/assets/images/img2.jpg",
      languages: "Language Used - PHP, Wordpress, JavaScript",
      link: ""
    },
    {
      heading:"Old Portfolio",
      desc: "",
      imageURL: "/assets/images/img25.jpg",
      languages: "Language Used - HTML5, CSS3, JavaScript, AngularJS, Bootstrap, Google API's, PHP",
      link: ""
    },
    {
      heading:"Angular Tour Of Heroes",
      desc: "",
      imageURL: "/assets/images/img14.jpg",
      languages: "Language Used - Node, Angular2",
      link: ""
    },
    {
      heading:"XIFTEN",
      desc: "",
      imageURL: "/assets/images/img3.jpg",
      languages: "Language Used - ASP.NET, JavaScript, C#",
      link: ""
    },
    {
      heading:"Gas Station Software Application",
      desc: "",
      imageURL: "/assets/images/img4.jpg",
      languages: "Language Used - Java",
      link: ""
    },
    {
      heading:"Family",
      desc: "",
      imageURL: "/assets/images/img5.jpg",
      languages: "Language Used - JavaScript",
      link: ""
    },
    {
      heading:"Players",
      desc: "",
      imageURL: "/assets/images/img7.jpg",
      languages: "Language Used - JavaScript",
      link: ""
    },
    {
      heading:"Books",
      desc: "",
      imageURL: "/assets/images/img8.jpg",
      languages: "Language Used - JavaScript",
      link: ""
    },
    {
      heading:"Items",
      desc: "",
      imageURL: "/assets/images/img9.jpg",
      languages: "Language Used - JavaScript",
      link: ""
    },
    {
      heading:"Movies",
      desc: "",
      imageURL: "/assets/images/img10.jpg",
      languages: "Language Used - ASP.NET, JavaScript",
      link: ""
    },
    {
      heading:"Sales Bonus",
      desc: "",
      imageURL: "/assets/images/img11.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Calculator",
      desc: "",
      imageURL: "/assets/images/img12.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Sharp Auto Center",
      desc: "",
      imageURL: "/assets/images/img13.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Ability Of Characters",
      desc: "",
      imageURL: "/assets/images/img14.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Online Movie Streaming",
      desc: "",
      imageURL: "/assets/images/img15.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Dollar Computers",
      desc: "",
      imageURL: "/assets/images/img16.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Slot Machine",
      desc: "",
      imageURL: "/assets/images/img17.jpg",
      languages: "Language Used - C#, Unity2D",
      link: ""
    },
    {
      heading:"Employee",
      desc: "",
      imageURL: "/assets/images/img18.jpg",
      languages: "Language Used - Java",
      link: ""
    },
    {
      heading:"Fuel Station",
      desc: "",
      imageURL: "/assets/images/img19.jpg",
      languages: "Language Used - Java",
      link: ""
    },
    {
      heading:"Shapes",
      desc: "",
      imageURL: "/assets/images/img20.jpg",
      languages: "Language Used - Java",
      link: ""
    },
    {
      heading:"Working Of a Car",
      desc: "",
      imageURL: "/assets/images/img21.jpg",
      languages: "Language Used - C#",
      link: ""
    },
    {
      heading:"Rock Paper Scissors",
      desc: "",
      imageURL: "/assets/images/img22.jpg",
      languages: "Language Used - JavaScript",
      link: ""
    },
    {
      heading:"Calculator",
      desc: "",
      imageURL: "/assets/images/img23.jpg",
      languages: "Language Used - JavaScript",
      link: ""
    },
    {
      heading:"Project Management",
      desc: "WBS, Network Diagram, UAT Forms, AbbrevativeProjectCharter, Assumption-Log, Cash-FLow-Forecast, ClientAcceptanceForm, Risk-Register, RiskProbabilityImpactMatrix, Self Scored Rubric, Total Bid Profile",
      imageURL: "/assets/images/img24.jpg",
      languages: "RFP is given and the project needs to be maintained",
      link: ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
