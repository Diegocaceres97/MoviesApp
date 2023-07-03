import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnswerMDB, PeliculaDetalle, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string){
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${apiKey}`);
    query = `${URL}${query}`;
    console.log(query)

    return this.http.get<T>(query, {headers})
  }

  getFeature() {
    return this.executeQuery<AnswerMDB>(`/movie/now_playing?language=es-ES&page=1`)
  }

  getPopulirity() {
    this.popularesPage++;

    const query= '/movie/popular?language=en-US&page='+this.popularesPage;
    return this.executeQuery<AnswerMDB>(query);
  }

  getDetailMovie(id: string) {
    const query=`/movie/${id}language=en-US`;
    return this.executeQuery<PeliculaDetalle>(query);
  }

  getActresslMovie(id: string) {
    const query=`/movie/${id}/credits?language=en-US'`;
    return this.executeQuery<RespuestaCredits>(query);
  }

}
