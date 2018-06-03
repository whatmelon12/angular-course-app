import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//Angular 6 way of importing this classes
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; 

import { FollowerService } from './../services/follower.service';

@Component({
  selector: 'media-follower',
  templateUrl: './media-follower.component.html',
  styleUrls: ['./media-follower.component.css']
})
export class MediaFollowerComponent implements OnInit {
  followers: any[];
  query: any;

  constructor(
    private route: ActivatedRoute, 
    private service: FollowerService) { }

  ngOnInit() {

    //Subscribe to multiple observables
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(switchMap(combined => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          //this.service.getAll({id: id, page: page});
          return this.service.getAll();
      }))
      .subscribe(followers => this.followers = followers);

    //Obtains query params
    // this.route.queryParamMap
    //   .subscribe(params => this.query = params);
    //   console.log(this.query);   
  }

}
