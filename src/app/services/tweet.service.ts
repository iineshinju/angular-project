import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TweetDataModel } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  // State de la liste de tweets
  // Initialisé à vide ([], mais on pourrait mettre une valeur initiale à la place)
  // En lecture seule. On doit passer par les setter pour modifier le state.
  private readonly _tweets = new BehaviorSubject<TweetDataModel[]>([]);

  constructor(private http: HttpClient) {
    // Chargement des données initiales : premier peuplement de la liste de tweets
    this.refreshTweets();
  }

  /**
   * Met à jour la liste des tweets
   * Liste statique à transformer en appel HTTP (jour 3, Exercice 2)
   */
  refreshTweets(): void {
    // this._tweets.next(
    //   [
    //     { "createdAt": "2023-01-27T23:54:48.135Z", "name": "Bennie Wisozk", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1139.jpg", "username": "Orion5", "like": 37344, "comment": 53586, "retweet": 13103, "stats": 12672, "content": "Magni quo quibusdam.", "id": "1" },
    //     { "createdAt": "2023-01-28T13:56:18.740Z", "name": "Alyssa Daniel", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/945.jpg", "username": "Royce_OHara19", "like": 14323, "comment": 97546, "retweet": 57393, "stats": 83686, "content": "Adipisci beatae minus fuga.", "id": "2" }
    //   ]
    // );
    // option 1
    this.http.get<TweetDataModel[]>("https://63d56dc10e7ae91a00ade874.mockapi.io/api/v1/tweets").subscribe((value: TweetDataModel[]) => {
      this._tweets.next(value)
    });
  }

  /**
   * Lecture seule. Permet de souscrire à la liste de tweets.
   * @returns Observable of TweetDataModel[]
   */
  getTweets(): Observable<TweetDataModel[]> {
    return this._tweets.asObservable();
    // option 2, mais empêche la supspression
    //return this.http.get<TweetDataModel[]>("https://63d56dc10e7ae91a00ade874.mockapi.io/api/v1/tweets");
  }

  /**
   * Lecture seule. Permet de souscrire à la liste de tweets.
   * @returns Observable of TweetDataModel[]
   */
  getTweetsById(id:string): Observable<TweetDataModel> {
    return this.http.get<TweetDataModel>("https://63d56dc10e7ae91a00ade874.mockapi.io/api/v1/tweets/" + id);
  }

  /**
   * Permet d'ajouter un tweet à la liste, et d'emettre la nouvelle liste
   * @param tweetData donnees du nouveau tweet
   */
  addTweet(tweetData: TweetDataModel): void {
    const currentList = this._tweets.getValue(); // Recuperation d'état actuel (state)
    currentList.unshift(tweetData); // Ajout du nouveau tweet
    this._tweets.next(currentList); // Propagation de la nouvelle liste
  }

  /**
   * Permet de mettre à jour un tweet de la liste, et d'emettre la nouvelle liste
   * @param tweetData donnees du tweet à mettre à jour
   */
  updateTweet(tweetData: TweetDataModel): void {
    const currentList = this._tweets.getValue(); // Recuperation d'état actuel (state)
    const tweetToUpdateIndex = currentList.findIndex(tweet => tweet.id === tweetData.id);
    if (tweetToUpdateIndex > -1) {
      currentList[tweetToUpdateIndex] = tweetData; // Mise à jour des données
      this._tweets.next(currentList); // Propagation de la nouvelle liste
    }
  }

  /**
   * Supprimer un tweet dont l'id est passé en paramètre
   * @param tweetId identifiant du tweet à supprimer
   */
  deleteTweet(tweetId: string): void {
    const currentList = this._tweets.getValue(); // Recuperation d'état actuel (state)
    const tweetToDeleteIndex = currentList.findIndex(tweet => tweet.id === tweetId);
    if (tweetToDeleteIndex > -1) {
      currentList.splice(tweetToDeleteIndex, 1); // Suppression du tweet
      this._tweets.next(currentList); // Propagation de la nouvelle liste
    }
  }

}


