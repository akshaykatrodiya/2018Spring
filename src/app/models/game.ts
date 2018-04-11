

export class Game {

    playedQuotes: Quote[] = [
        { text: "That's fake news", playerName: 'Dil Katrodiya', chosen: false}
    ];
    players: User[] = [
        { name: 'Akshay Katrodiya', myQuotes: [] },
        { name: 'Dil Katrodiya', myQuotes: [] },
        { name: 'PalDil Katrodiya', myQuotes: [] },
    ];
    Dealer: string = 'Akshay Katrodiya'
    picture: string = '../../assets/images/FB_IMG_1511282772818.jpg';
    
}

export class User {

    name: string;
    myQuotes: string[];
}

export class Quote {

    text: string;
    playerName: string;
    chosen: boolean = false;
}