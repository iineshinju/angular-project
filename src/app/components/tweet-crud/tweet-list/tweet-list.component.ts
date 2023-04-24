import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetDataModel } from 'src/app/models/tweet.model';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  //@Input() tweetDatas : TweetDataModel[];
  tweetDatas : TweetDataModel[];

  constructor(private tweetService : TweetService) {
    this.tweetService.getTweets().subscribe((tweetDatas) =>
      this.tweetDatas = tweetDatas
    );
  }

  ngOnInit() {

  }

}
