function Game() {
    this.currentTurnIndex = 0;
    this.deck = new Deck();
}

function handValue() {
    this.cards = [];
    this.cardsDrawn = 0;
    var names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
        for (var name in names) {
            this.cards.push(new Card(names[name]));
        }
    }
}

Deck.prototype.getCard = function () {
    if (this.cards.length == this.cardsDrawn) {
        return null;
    } //case: check if all cards drawn

    var random = Math.floor(Math.random() * (this.cards.length - this.cardsDrawn));
    var temp = this.cards[random];

    //swap chosen card with card last in array
    this.cards[random] = this.cards[this.cards.length - this.cardsDrawn - 1];
    this.cards[this.cards.length - this.cardsDrawn - 1] = temp;
    this.cardsDrawn++;

    return temp;
};

function Card(name) {
    this.name = name;

}

Card.prototype.image = function () {
    return "http://www.jonarnaldo.com/sandbox/deck_images/" + name + "_of_" + ".png";
};

Card.prototype.value = function () {
    if (this.name == "jack" || "queen" || "king") {
        return [10];
    } else if (this.name == "ace") {
        return [1, 11];
    } else {
        return parseInt(this.name, 10);
    }
};

function Player() {
    //this.name;
    this.cards = [];
}

Player.prototype.addCard = function () {
    this.cards.push(deck.getCard());
};

Player.prototype.score = function () {
    var score = 0;
    var aces = [];

    for (var i = 0; i < this.cards.length; i++) {
        var value = this.cards[i].value() // value array ex.[10]
        if (value.length == 1) {
            score += value[0];
        } else {
            aces.push(value);
        }
    }

    for (var j = 0; j < aces.length; j++) {
        if (score + aces[j].value[1] <= 21) {
            score + aces[j].value[1];
        } else {
            score + aces[j].value[0];
        }
    }
    return score;

};

var deck = new handValue();
var player1 = new Player();


$("#getCard").click(function () {
    player1.addCard();




    var cardName = player1.cards[player1.cards.length-1].name;
    $("#table").append(cardName + cardSuit);




});
