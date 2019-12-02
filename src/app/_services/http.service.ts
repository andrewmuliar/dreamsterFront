import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable(
    {providedIn:"root"}
)

export class RestService {

private readonly domain:string = environment.rest_domain;

constructor(private _http:HttpClient) { }
   
    get(endpoint):Observable<any>{
        return this._http.get(this.domain+endpoint );
    }

    post(endpoint:string, body:object):Observable<any>{
        return this._http.post(this.domain+endpoint, body);
    }

    delete(endpoint:string){
        return this._http.delete(this.domain+endpoint);
    }

    update(endpoint:string, body:object){
        return this._http.patch(this.domain+endpoint, body);
    }
}
