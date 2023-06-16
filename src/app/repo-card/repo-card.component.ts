import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/Models/repository';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {

  @Input() repoItem: Repository | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
