import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(): void {
    var portfolio = document.getElementById("top");
    portfolio.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
