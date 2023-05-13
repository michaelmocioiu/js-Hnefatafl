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
    }   
    setupBoard(){
        for (let x = 0; x < this.row_s.length; x++){
            for (let y = 0; y < this.columns.length; y++){
    
                // console.log(x,y)
                // console.log(this.config[x][y])
                if (!!this.config[y][x]){
                    document.getElementById(`${this.row_s.charAt(x)}${this.columns[y]}`).innerHTML = (`<button class="piece"><img src="assets/img/${this.config[y][x]}.png"></button>`)
                }
            }
        }
        document.getElementById('game_start').style.visibility = 'hidden'
        document.getElementById('in_progress').style.visibility = 'visible'
    }
}

mainBoard = new Board()

