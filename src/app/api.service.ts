import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public apiKey = "5fd573f64a154b12af2b9ba169a53383";
  constructor(public http:HttpClient) { }

  getNews(topic){
    console.log(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${this.apiKey}`)
    return this.http.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${this.apiKey}`);
  }
}
