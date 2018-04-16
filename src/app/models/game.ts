export class Game {

    playedQuotes: Quote[] = [];
    players: User[];
    dealerId: string;
    picture: {
        url: string;
    };
    
}

export class User {

    name: string;
    myQuotes: string[];
}

export class Quote {

    text: string;
    playerId: string;
    chosen: boolean = false;
}