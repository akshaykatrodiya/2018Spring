

export class Game {

    myQuotes: string[] = [
        "Great minds think alike but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    playedQuotes: Quote[] = [
        { text: "That's fake news", playerName: 'Dil Katrodiya', chosen: false}
    ];
    players: User[] = [
        { name: 'Akshay Katrodiya' },
        { name: 'Dil Katrodiya' },
        { name: 'PalDil Katrodiya' }
    ];
    Dealer: string = 'Akshay Katrodiya'
    picture: string = '../../assets/images/FB_IMG_1511282772818.jpg';
    
}

export class User {

    name: string;
}

export class Quote {

    text: string;
    playerName: string;
    chosen: boolean = false;
}