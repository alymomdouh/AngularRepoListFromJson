import { Component, OnInit } from '@angular/core';
import { DeveloperServiceService } from 'src/services/developer-service.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {
  devList: any;
  constructor(private developerService: DeveloperServiceService) { }
  ngOnInit(): void {
    this.getDeveloperList();
  }
  getDeveloperList() {
    this.developerService.getDevelopers().subscribe(response => {
      console.log("developerList : " + JSON.stringify(response))
      this.devList = response;
    })
  }
}
