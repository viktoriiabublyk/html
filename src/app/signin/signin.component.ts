import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  keepMeSignedIn = false;
  faTwitter = faTwitter;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

}
