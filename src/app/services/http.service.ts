import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';


@Injectable()
export class HttpService {
  readonly HOST = 'http://localhost:4200';

  constructor(private http: Http, private router: Router) {
    console.log(this.HOST);
  }

  postData(obj: Object, endpoint: string) {
    const body = JSON.stringify(obj);
    return this.http.post(this.HOST + endpoint, body)

      .map((resp: Response) => {
        return resp.json();
      });
  }

  getData(endpoint: string) {
    console.log(this.HOST + endpoint)
    return this.http.get(this.HOST + endpoint)
      .map((resp: Response) => {
        return resp.json();
      });
  }
}
