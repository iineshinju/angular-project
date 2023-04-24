// TODO : J2 Exercice 4
export interface TweetDataModel extends NewTweetDataModel {
    createdAt: string; // ou Date format : yyyy-MM-ddTHH:mm:ss.SSSz
    isVerified?: boolean;
    name: string;
    avatar?: string; // Link to avatar picture, can be undefined
    username: string;
    like: number;
    comment: number;
    retweet: number;
    stats: number;
    content: string;
    id: string;
}

export interface NewTweetDataModel  {
    isVerified?: boolean;
    avatar?: string; // Link to avatar picture, can be undefined
    like: number;
    comment: number;
    retweet: number;
    stats: number;
    id: string;
}