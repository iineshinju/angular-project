import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TweetCrudComponent } from './components/tweet-crud/tweet-crud.component';
import { TweetFormComponent } from './components/tweet-crud/tweet-form/tweet-form.component';
import { TweetListComponent } from './components/tweet-crud/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet-crud/tweet-list/tweet/tweet.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleTweetComponent } from './components/tweet-crud/tweet-list/tweet/single-tweet/single-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetComponent,
    TweetFormComponent,
    TweetCrudComponent,
    SideMenuComponent,
    SingleTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
