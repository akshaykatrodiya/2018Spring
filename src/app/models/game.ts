

export class Game {

    myQuotes: string[] = [
        "Great minds think alike but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    playedQuotes: Quote[] = [];
    players: User[] = [
        { name: 'Akshay' }
    ];
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