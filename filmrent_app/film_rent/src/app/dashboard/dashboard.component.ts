import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular'; // Import gql from the correct package
import { Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  films: any[] = []; // array to store the films

  constructor(private apollo: Apollo,
    private _router: Router,
    private _activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    // Execute the GraphQL query
    this.apollo
      .query<any>({
        query: gql`
          query {
            films {
              film_id
              title
              description
              release_year
              language_id
              rental_duration
              rental_rate
              length
              replacement_cost
              rating
              special_features
              fulltext
              last_update
            }
          }
        `,
      }).subscribe((result) => {
        this.films = result.data.films; // store the films in the films array
      })


  }

  noleggia(){

  }

  film_details(){

    this._router.navigate(['film_details'], {relativeTo:this._activatedRoute});
  }


}
