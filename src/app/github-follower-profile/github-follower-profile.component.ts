import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-follower-profile',
  templateUrl: './github-follower-profile.component.html',
  styleUrls: ['./github-follower-profile.component.css']
})
export class GithubFollowerProfileComponent implements OnInit {

  constructor(private route: Router) { } //private route: ActivatedRoute

  ngOnInit() {
    //Useful when user can navigate without destroying the component.

    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id');
    //     console.log(id);
    //   });
  }

  submit() {
    this.route.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    });
  }

}
