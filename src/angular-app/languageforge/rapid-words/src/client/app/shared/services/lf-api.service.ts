import { Injectable } from '@angular/core';

import { Response, Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LfApiService {
    baseApiUrl: string;
    loginUrl: string;
    phpSessionCookie: string;

    constructor(private http: Http, private apiUrl: string) {
        this.baseApiUrl = apiUrl + '/api/sf';
        this.loginUrl = apiUrl + '/app/login_check';
        console.log('inited api service with url ' + apiUrl);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    performAuthentication() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, {_username: 'admin', _password: 'password', submit: '' }, options).toPromise()
                .then(response => console.log(response.headers));
    }
}
