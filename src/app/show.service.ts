import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowData } from './ishow-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }

  getShows(name: string){
    return this.httpClient.get<IShowData[]>(`https://api.tvmaze.com/search/shows?q=${name}`).pipe(map((data)=> {
    return data.map((show)=> {return this.transformToISearchShows(show)})}))
   }
   private getImage(image: any) {
    let isImage;
    return (isImage = image ? image.medium 
      : '../assets/images/null_image.png'
      // : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
      )}
  
  private isNull(item:any) {
    let notNull;
    return (notNull = item ? item.name : null);
  }

   private transformToISearchShows(shows:
    IShowData){
      return {
      name:  shows.show.name,
      language: shows.show.language,
      genres: shows.show.genres,
      schedule: shows.show.schedule.time,
      rating: shows.show.rating.average,
      image: this.getImage(shows.show.image),
      summary: shows.show.summary,
      network: this.isNull(shows.show.network)
      
      }
    }
}
