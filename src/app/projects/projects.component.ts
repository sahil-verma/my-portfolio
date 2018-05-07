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
      desc: "This application will allow user to create quizes. It will tell the user how many answers were correct at the end of the quiz. Its kind a crud application where user can add, edit and delete the questions.",
      link: "https://github.com/sahil-verma/VueQuizz"
    },
    {
      heading:"Luxury Muskoka Vaccations",
      desc: "",
      imageURL: "/assets/images/img2.jpg",
      languages: "Language Used - PHP, Wordpress, JavaScript",
      link: "http://luxurymuskokavacations.com/"
    },
    {
      heading:"Old Portfolio",
      desc: "",
      imageURL: "/assets/images/img25.jpg",
      languages: "Language Used - HTML5, CSS3, JavaScript, AngularJS, Bootstrap, Google API's, PHP",
      link: "https://ontariocottagerentals.com/Portfolio.php"
    },
    {
      heading:"Angular Tour Of Heroes",
      desc: "",
      imageURL: "/assets/images/img14.jpg",
      languages: "Language Used - Node, Angular2",
      link: "https://angulartourofheroess.herokuapp.com/"
    },
    {
      heading:"XIFTEN",
      desc: "",
      imageURL: "/assets/images/img3.jpg",
      languages: "Language Used - ASP.NET, JavaScript, C#",
      link: "http://xiften.azurewebsites.net/"
    },
    {
      heading:"Items",
      desc: "",
      imageURL: "/assets/images/img9.jpg",
      languages: "Language Used - JavaScript",
      link: "https://vermasahil32.herokuapp.com/"
    },
    {
      heading:"Gas Station Software Application",
      desc: "",
      imageURL: "/assets/images/img4.jpg",
      languages: "Language Used - Java",
      link: "https://github.com/pranav-kural/Gas-Station-Software-Application"
    },
    {
      heading:"Family",
      desc: "",
      imageURL: "/assets/images/img5.jpg",
      languages: "Language Used - JavaScript",
      link: "https://github.com/sahil-verma/My-Family"
    },
    {
      heading:"Players",
      desc: "",
      imageURL: "/assets/images/img7.jpg",
      languages: "Language Used - JavaScript",
      link: "https://github.com/sahil-verma/Players"
    },
    {
      heading:"Books",
      desc: "",
      imageURL: "/assets/images/img8.jpg",
      languages: "Language Used - JavaScript",
      link: "https://github.com/sahil-verma/Books"
    },
    {
      heading:"Movies",
      desc: "",
      imageURL: "/assets/images/img10.jpg",
      languages: "Language Used - ASP.NET, JavaScript",
      link: "https://github.com/sahil-verma/Working-with-ASP.NET"
    },
    {
      heading:"Sales Bonus",
      desc: "",
      imageURL: "/assets/images/img11.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Sales-Bonus"
    },
    {
      heading:"Calculator",
      desc: "",
      imageURL: "/assets/images/img12.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Calculator"
    },
    {
      heading:"Sharp Auto Center",
      desc: "",
      imageURL: "/assets/images/img13.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Sharp-Auto-Center"
    },
    {
      heading:"Ability Of Characters",
      desc: "",
      imageURL: "/assets/images/img14.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Ability-Of-Characters"
    },
    {
      heading:"Online Movie Streaming",
      desc: "",
      imageURL: "/assets/images/img15.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Movie-Bonanza-Online-Streaming"
    },
    {
      heading:"Dollar Computers",
      desc: "",
      imageURL: "/assets/images/img16.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Dollar-Computers"
    },
    {
      heading:"Slot Machine",
      desc: "",
      imageURL: "/assets/images/img17.jpg",
      languages: "Language Used - C#, Unity2D",
      link: "https://github.com/sahil-verma/Unity-Slot-Machine"
    },
    {
      heading:"Employee",
      desc: "",
      imageURL: "/assets/images/img18.jpg",
      languages: "Language Used - Java",
      link: "https://github.com/sahil-verma/Employee"
    },
    {
      heading:"Fuel Station",
      desc: "",
      imageURL: "/assets/images/img19.jpg",
      languages: "Language Used - Java",
      link: "https://github.com/sahil-verma/Gui-JFrame/tree/master/src/Assignment2"
    },
    {
      heading:"Shapes",
      desc: "",
      imageURL: "/assets/images/img20.jpg",
      languages: "Language Used - Java",
      link: "https://github.com/sahil-verma/Shapes"
    },
    {
      heading:"Working Of a Car",
      desc: "",
      imageURL: "/assets/images/img21.jpg",
      languages: "Language Used - C#",
      link: "https://github.com/sahil-verma/Working-of-Car"
    },
    {
      heading:"Rock Paper Scissors",
      desc: "",
      imageURL: "/assets/images/img22.jpg",
      languages: "Language Used - JavaScript",
      link: "https://github.com/sahil-verma/Rock-Paper-Scissors"
    },
    {
      heading:"Simple-Calculator",
      desc: "",
      imageURL: "/assets/images/img23.jpg",
      languages: "Language Used - JavaScript",
      link: "https://github.com/sahil-verma/Simple-Calculator"
    },
    {
      heading:"Project Management",
      desc: "WBS, Network Diagram, UAT Forms, AbbrevativeProjectCharter, Assumption-Log, Cash-FLow-Forecast, ClientAcceptanceForm, Risk-Register, RiskProbabilityImpactMatrix, Self Scored Rubric, Total Bid Profile",
      imageURL: "/assets/images/img24.jpg",
      languages: "RFP is given and the project needs to be maintained",
      link: "https://github.com/pranav-kural/Rocky-Mountain-College-project"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
