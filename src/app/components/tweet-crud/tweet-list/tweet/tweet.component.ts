import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TweetDataModel } from "src/app/models/tweet.model";
import { TweetService } from "src/app/services/tweet.service";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"],
})
export class TweetComponent implements OnInit {
  @Input() tweetData: TweetDataModel;
  @Output() clickEvent: EventEmitter<number> = new EventEmitter();

  comment: boolean;
  retweet: boolean;
  liked: boolean = false;
  myComment: FormGroup;

  constructor(private tweetService: TweetService, private router: Router) {}

  ngOnInit(): void {
    this.myComment = new FormGroup({
      comments: new FormControl("", Validators.maxLength(200)),
    });
  }

  isComment(): void {
    this.comment ? this.tweetData.comment-- : this.tweetData.comment++;
    this.comment = !this.comment;
  }

  isRetweet(): void {
    this.retweet ? this.tweetData.retweet-- : this.tweetData.retweet++;
    this.retweet = !this.retweet;
  }

  isLiked(): void {
    this.liked ? this.tweetData.like-- : this.tweetData.like++;
    this.liked = !this.liked;
  }

  deleteTweet(value: string): void {
    this.tweetService.deleteTweet(value);
  }

  redirection(id: string) {
    this.router.navigate(["/single-tweet", id]);
  }

  // nextTweet(id: string) {
  //   let idNumber : number = Number(id) + 1;
  //   this.router.navigate(["/single-tweet", idNumber]);
  // }

  // previousTweet(id: string) {
  //   let idNumber : number = Number(id) - 1;
  //   this.router.navigate(["/single-tweet", idNumber]);
  // }

  isHomeRoute() {
    return this.router.url === "/";
  }
}
