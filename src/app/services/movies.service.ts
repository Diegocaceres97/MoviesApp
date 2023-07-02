import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string){
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${apiKey}`);
    query = `${URL}${query}`;
    console.log(query)

    return this.http.get<AnswerMDB>(query, {headers})
  }

  getFeature() {
    return this.executeQuery<AnswerMDB>(`/movie/now_playing?language=es-ES&page=1`)
  }

  getPopulirity() {
    const query= '/movie/popular?language=en-US&page=1';
    return this.executeQuery<AnswerMDB>(query);
  }
}
