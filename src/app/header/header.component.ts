import { Component} from '@angular/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  languages: Language[] = [
    {value: 'eng', viewValue: 'ENG'},
    {value: 'ru', viewValue: 'RU'},
    {value: 'ukr', viewValue: 'UKR'}
  ];

  selectedLanguage = 'eng';
}
