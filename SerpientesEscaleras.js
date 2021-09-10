/**
 * Alumno: Gustavo Alberto Valladares Sagrero
 * Carrera: Ingenieria de software
 * Grado y grupo: 3 H
 */


class Player
{
    constructor(name)
    {
        this._name = name;
        this._position = 0;

    }
    
    getName()
    {
        return this._name;
    }

    setName(name)
    {
        this._name = name;
    }

    getPosition()
    {
        return this._position;
    }

    setPosition(pos)
    {
        this._position = pos;
    }
}


class Dice
{
    Roll()
    {
        return Math.floor(Math.random() * 6) + 1;
    }
}

class Board
{
    constructor(numPlayers)
    {
        this._players = [];
        this._Gboard = [100];

        //Snakes
        this._Gboard[2] = 16;
        this._Gboard[19] = 39;
        this._Gboard[9] = 29;
        this._Gboard[33] = 45;
        this._Gboard[40] = 66;
        this._Gboard[20] = 75;
        this._Gboard[50] = 84;
        this._Gboard[5] = 97;

        //Stairs
        this._Gboard[13] = 6;
        this._Gboard[22] = 17;
        this._Gboard[32] = 27;
        this._Gboard[42] = 38;
        this._Gboard[53] = 25;
        this._Gboard[80] = 35;
        this._Gboard[56] = 47;
        this._Gboard[79] = 70;

        this._winner = false;

        for(let i=0; i < numPlayers; i++)
        {
            this._players.push(new Player());
        }
    }

    startGame()
    {
        let dice = new Dice();
        let posPlayer = 0;
        while(!this._winner)
        {
            for(let j=0; j < this._players.length; j++)
            {
                posPlayer = this._players[j].getPosition();
                posPlayer += dice.Roll();




                if(this._Gboard.indexOf(posPlayer) == -1)
                {
                    this._players[j].setPosition(posPlayer);
                    console.log(`Player ${j+1} position: ${this._players[j].getPosition()}`);
                }else if(this._Gboard.indexOf(posPlayer) < this._players[j].getPosition())
                {
                    this._players[j].setPosition(this._Gboard.indexOf(posPlayer));
                    console.log(`!SNAKE¡ Player ${j+1} fell to position: ${this._players[j].getPosition()}`);
                }else
                {
                    this._players[j].setPosition(this._Gboard.indexOf(posPlayer));
                    console.log(`!STAIR¡ Player ${j+1} move up to position: ${this._players[j].getPosition()}`);
                }

                if(this._players[j].getPosition() >= 100)
                {
                    this._winner = true;
                    console.log(`Player ${j+1} has winned!`);
                    break;
                }
            }
        }
    }
}


let game = new Board(2);
game.startGame();