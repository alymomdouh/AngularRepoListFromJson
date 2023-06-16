import { Injectable } from '@angular/core';
import { APISericeService } from './apiserice.service';

@Injectable({
  providedIn: 'root'
})
export class DeveloperServiceService {
  constructor(private api: APISericeService) { }

  getDevelopers() {
    return this.api.get("developers.json");
  }
}