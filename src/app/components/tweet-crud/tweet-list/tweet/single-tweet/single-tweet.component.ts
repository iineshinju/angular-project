import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TweetDataModel } from 'src/app/models/tweet.model';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-single-tweet',
  templateUrl: './single-tweet.component.html',
  styleUrls: ['./single-tweet.component.scss']
})
export class SingleTweetComponent implements OnInit {

  id: string;
  singleTweet : TweetDataModel;

  constructor(private route: ActivatedRoute, private tweetService : TweetService, private router: Router) { 
    this.id = this.route.snapshot.params['id'];
    this.tweetService.getTweetsById(this.id).subscribe((value: TweetDataModel) => {
      this.singleTweet = value;
      //console.log(this.singleTweet);
    });
   // console.log(this.id);
    
    if (+this.id > 0 && +this.id < 49) {
      this.router.navigate(['/single-tweet', this.id]);
    } else {
      this.router.navigate(['/']);
    }

    this.route.params.subscribe((changeId) => {
      this.tweetService.getTweetsById(changeId['id']).subscribe((value: TweetDataModel) => {
        this.singleTweet = value;
      });

      console.log("TOTO");
      console.log(changeId);
    })
  }

  ngOnInit() {
  }

  nextTweet(id: string) {
    let idNumber : number = Number(id) + 1;
    this.router.navigate(["/single-tweet", idNumber]);
  }

  previousTweet(id: string) {
    let idNumber : number = Number(id) - 1;
    this.router.navigate(["/single-tweet", idNumber]);
  }
}
