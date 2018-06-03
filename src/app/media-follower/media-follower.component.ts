import { Component, OnInit } from '@angular/core';

import { FollowerService } from './../services/follower.service';

@Component({
  selector: 'media-follower',
  templateUrl: './media-follower.component.html',
  styleUrls: ['./media-follower.component.css']
})
export class MediaFollowerComponent implements OnInit {
  followers: any[];

  constructor(private service: FollowerService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
