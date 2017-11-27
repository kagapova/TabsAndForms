import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Tab} from "../models/tab";

@Injectable()
export class TabsService {

  endpoint = '/server.tabs.json';

  constructor (private http: HttpService) {
  }

  get() {
    console.log('33333')
    return this.http.getData(this.endpoint)
  }
}
