import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTweetDataModel, TweetDataModel } from 'src/app/models/tweet.model';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.scss']
})
export class TweetFormComponent implements OnInit {

  constructor(private tweetService : TweetService) { }

  //@Output() addForm : EventEmitter<TweetDataModel> = new EventEmitter();
  myForm : FormGroup;

  newTweetData: NewTweetDataModel = {
    isVerified: true,
    like: 0,
    comment: 0,
    retweet: 0,
    stats: 0,
    id: "0" //Math.random().toString()
  };

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      tweet: new FormControl('', Validators.required),
    });
  }

  onClickSubmit(): void {
    // TODO : Exercice 8 : transmission du nouveau tweet à la liste
    let newTweetDataComplet : TweetDataModel =  {
    createdAt : Date.now().toString(),
    name : this.myForm.controls['name'].value,
    username : this.myForm.controls['pseudo'].value,
    content : this.myForm.controls['tweet'].value,
    ...this.newTweetData, id : Math.random().toString()
    }
    //this.addForm.emit(newTweetDataComplet);
    this.tweetService.addTweet(newTweetDataComplet);

    console.log(this.newTweetData);
    // ... :  permet de copier le contenu de l'objet
    console.log(this.myForm.getRawValue().name); // Pour faire les tests par exemple
  }

}
