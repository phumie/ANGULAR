import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(): void {
    var portfolio = document.getElementById("portfolio");
    portfolio.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
