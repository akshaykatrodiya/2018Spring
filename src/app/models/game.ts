

export class Game {

    myQuotes: string[] = [
        "Great minds think alike but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    players: User[] = [];
    picture: string = '';
    playedQuotes: Quote[] = [];
}

export class User {

    name: string;
}

export class Quote {

    text: string;
    playerName: string;
    chosen: boolean = false;
}