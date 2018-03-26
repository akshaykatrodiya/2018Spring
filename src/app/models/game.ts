

export class Game {

    myQuotes: string[] = [
        "Great minds think alike but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    playedQuotes: Quote[] = [
        { text: "Let's do it!", playerName:'Akshay', chosen: true }
    ];
    players: User[] = [
        { name: 'Akshay' }
    ];
    picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';
    
}

export class User {

    name: string;
}

export class Quote {

    text: string;
    playerName: string;
    chosen: boolean = false;
}