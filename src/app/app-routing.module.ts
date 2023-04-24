import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetCrudComponent } from './components/tweet-crud/tweet-crud.component';
import { SingleTweetComponent } from './components/tweet-crud/tweet-list/tweet/single-tweet/single-tweet.component';

const routes: Routes = [
  { path: '', component: TweetCrudComponent},
  { path: 'single-tweet/:id', component: SingleTweetComponent},
  { path: '**', redirectTo:'', component: TweetCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
