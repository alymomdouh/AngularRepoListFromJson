import { Injectable } from '@angular/core';
import { APISericeService } from './apiserice.service';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  constructor(private api: APISericeService) { }

  getRepositories() {
    return this.api.get("repositories.json");
  }

}