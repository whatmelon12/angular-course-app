import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-follower-profile',
  templateUrl: './github-follower-profile.component.html',
  styleUrls: ['./github-follower-profile.component.css']
})
export class GithubFollowerProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    //Useful when user can navigate without destroying the component.

    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id');
    //     console.log(id);
    //   });
  }

}
