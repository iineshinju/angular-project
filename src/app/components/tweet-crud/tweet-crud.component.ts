import { Component, OnInit } from '@angular/core';
import { mockTweet } from 'src/app/data/mockTweetDateModel';
import { TweetDataModel } from 'src/app/models/tweet.model';

@Component({
  selector: 'app-tweet-crud',
  templateUrl: './tweet-crud.component.html',
  styleUrls: ['./tweet-crud.component.scss']
})
export class TweetCrudComponent implements OnInit {

  myTweetData: TweetDataModel[] = [];

  constructor() {
    // TODO J2 Exercice 5 : valoriser myTweetData avec une liste statique de données
    // Vérifier dans la console le bon fonctionnement
    this.myTweetData = mockTweet;
  }

  ngOnInit() {
  }

  newDataForm(newEntry : TweetDataModel) {
    this.myTweetData.push(newEntry);
  }
}