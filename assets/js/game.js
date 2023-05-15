class Board {
    constructor(){
        this.board = document.getElementById('board');
        this.clickedPiece = null;
        this.allowedMoves = null;
        this.game_state = false;
        this.row_s = 'abcdefghijk';
        this.columns = [1,2,3,4,5,6,7,8,9,10,11];
        this.turn = 'black';
        this.config = [
            ["", "", "", "b_S", "b_S", "b_S", "b_S", "b_S", "", "", "",],
            ["", "", "", "", "", "b_S", "", "", "", "", "",],
            ["", "", "", "", "", "", "", "", "", "", "",],
            ["b_S", "", "", "", "", "w_S", "", "", "", "", "b_S",],
            ["b_S", "", "", "", "w_S", "w_S", "w_S", "", "", "", "b_S",],
            ["b_S", "b_S", "", "w_S", "w_S", "w_K", "w_S", "w_S", "", "b_S", "b_S",],
            ["b_S", "", "", "", "w_S", "w_S", "w_S", "", "", "", "b_S",],
            ["b_S", "", "", "", "", "w_S", "", "", "", "", "b_S",],
            ["", "", "", "", "", "", "", "", "", "", "",],
            ["", "", "", "", "", "b_S", "", "", "", "", "",],
            ["", "", "", "b_S", "b_S", "b_S", "b_S", "b_S", "", "", "",],
        ];
        this.squares = this.getSquares()
    }   
    getSquares(){
        const squares = []
        for (let x = 0; x < this.row_s.length; x++){
            for (let y = 0; y < this.columns.length; y++){
                squares.push(`${this.row_s[x]}${this.columns[y]}`)
            }
        }
        console.log(squares)
        return squares
    }

    buttonClick(option){
        document.getElementById(option).style.boxShadow = '4px 4px 9px 0px rgba(0,0,0,0.52), inset 0px 0px 27px 0px rgba(0,0,0,0.66)'
        setTimeout(function(){document.getElementById(option).style.boxShadow = '4px 4px 9px 0px rgba(0,0,0,0.52)'}, 200)

        if (option === 'game_start'){
            this.setupBoard()
            document.getElementById('game_start').style.visibility = 'hidden'
            document.getElementById('in_progress').style.visibility = 'visible'

        }else if (option === 'reset_board'){
            if (confirm('Are you sure?')){
                for (let x = 0; x < this.row_s.length; x++){
                    for (let y = 0; y < this.columns.length; y++){
                        document.getElementById(`${this.row_s.charAt(x)}${this.columns[y]}`).innerHTML = (``)
                        if (!!this.config[y][x]){
                            document.getElementById(`${this.row_s.charAt(x)}${this.columns[y]}`).innerHTML = (`<button onclick="" class="piece ${this.config[y][x]}"><img src="assets/img/${this.config[y][x]}.png"></button>`)
                        }
                    }
                }
            }

        }else if (option === 'undo'){
            console.log('do')

        }else if (option === 'redo'){
            console.log('do')
        }
    }

    buttonVisual(){

    }

    setupBoard(){
        let c = 0
        for (let x = 0; x < this.row_s.length; x++){
            for (let y = 0; y < this.columns.length; y++){
                if (!!this.config[y][x]){
                    document.getElementById(this.squares[c]).innerHTML = (`<button onclick="" class="piece ${this.config[y][x]}"><img src="assets/img/${this.config[y][x]}.png"></button>`)
                }
                c++
            }
        }
    }
    clickHandle(){
        x = 2
    }
}

mainBoard = new Board()

class Square {

}