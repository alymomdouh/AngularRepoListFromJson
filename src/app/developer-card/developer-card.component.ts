import { Component, Input } from '@angular/core';
import { Developer } from 'src/Models/Developer';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.css']
})
export class DeveloperCardComponent {

  @Input() devItem: Developer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
