import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { ENV } from '@app/config';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TokenService } from './token-service';

@Injectable()
export class ApiService {

  private api_base_url = ENV.API_URL;

  constructor(
    private http: Http,
    private tokenService: TokenService
  ){}


  /** A futuro estas funciónes deberían ser parte de una Extensión personalizada de 
      la clase HTTP */

  /**
   * Interceptor para componer las cabeceras en cada petición
   * */
  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json'
    };
    if (this.tokenService.getToken()) {
      headersConfig['Authorization'] = `${this.tokenService.getToken()}`;
    }   
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }


/** Métodos Http que hacen peticiones a la api y retornan observables */

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${this.api_base_url}${path}`, 
      { headers: this.setHeaders(), search: params }
    )
    .catch(this.formatErrors)
    .map((res:Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.api_base_url}${path}`, JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res:Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.api_base_url}${path}`, body,{ headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map(res => {
      if(res.status < 200 || res.status >= 300) {
        throw new Error('La petición ha fallado ' + res.status);
      } 
      else {
        return res.json();
      }
    })
  }

  delete(path): Observable<any> {
    return this.http.delete(`${this.api_base_url}${path}`,{ headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res:Response) => res.json());
  }

}
