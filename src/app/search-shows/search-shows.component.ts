import { Component, OnInit } from '@angular/core';
import { ISearchShows } from '../isearch-shows';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {

shows: ISearchShows 
  constructor(private showservice: ShowService) {
    this.shows = {
    name: '',
    language: '',
    genres: [],
    schedule: '',
    rating: 0,
    image: '',
    summary: '',
    network: ''
    }
   }

  ngOnInit(): void {
    this.showservice.getShows('Girls').subscribe(data => this.shows = data)
  }

}
