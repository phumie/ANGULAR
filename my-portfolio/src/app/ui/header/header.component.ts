import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(el: String): void {
    if (el == "about") {
      var about = document.getElementById("about");
      about.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    else if (el == "portfolio") {
      var portfolio = document.getElementById("portfolio");
      portfolio.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    else if (el == "contact") {
      var contact = document.getElementById("contact");
      contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    // var portfolio = document.getElementById("portfolio");
    // portfolio.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
