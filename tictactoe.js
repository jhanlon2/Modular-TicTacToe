var tictactoe = (function(){

	module = {}

	module.Board = function(length){
		this.length = length
		this.getValues = function(length){
			var values = []
			for(x = 0;x < length; x++){
				values[x] = []
				for(y = 0;y < length; y++){
					values[x][y] = ""
					}
				}
			return values
			}
			
		this.values = this.getValues(this.length)

		this.getBoard = function(){
			return this.values
			}
			
		this.place = function(x_coord,y_coord,character){
			this.values[x_coord][y_coord] = character
			}
		}
	
	module.Game = function(){
		this.board = new module.Board(3)
		this.turn_count = 0
		this.player_turn = 'X'

		this.getBoard = function(){
			return this.board.getBoard()
			}

		this.setTurn = function(){
			this.turn_count++
			if(this.turn_count % 2 == 0){
				this.player_turn = 'X'
				}
			else{
				this.player_turn = 'O'
				}
			}

		this.reset = function(){
			this.turn_count = 0
			this.getBoard()
			this.convert2dBoard()
			this.saveBoard()
			}
			
		this.one_d_board = ""
		this.api_array = []

		this.convert2dBoard = function(){
			var two_d_board = this.getBoard()
			this.one_d_board = [].concat.apply([], two_d_board)
			return this.one_d_board
			console.log(this.one_d_board)
			}

		this.splitBoardArray = function(part){
			 part = 3
			 for(var i = 0; i < this.api_array.length; i += part){
			 	this.api_array.push(this.one_d_board.slice(i, i + part))
				}
			return this.api_array
			 }

		this.saveBoard = function(){
			var obj = {tic_tac_toe_game:{data:{board: this.one_d_board}}}
			$.post("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/3.json",obj, function(res){
				})
			}

		this.loadBoard = function(){
			var _this = this
			$.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/3.json",function(res){
				console.log(res)
				_this.one_d_board = res.data.board
				_this.splitBoardArray()
				})
			}

		this.place = function(x_coord,y_coord){
			var current_player = this.player_turn
			this.board.place(x_coord,y_coord,current_player)
			this.setTurn()
			}
		
		this.checkSame = function(coord_list){
			var board_values = this.getBoard()
			var value = null
			for(var index = 0; index < coord_list.length; index++){
				var coords = coord_list[index]
				var x = coords[0]
				var y = coords[1]
				var coord_value = board_values[x][y]
				if(value == null){
					value = coord_value
					continue
					}
				if(coord_value != value){
					return false
					}
				}
			return value
			}
		
		this.WINNING_COORDS = [
			[[0,0],[0,1],[0,2]],
			[[1,0],[1,1],[1,2]],
			[[2,0],[2,1],[2,2]],
			[[0,0],[1,0],[2,0]],
			[[1,0],[1,1],[1,2]],
			[[2,0],[2,1],[2,2]],
			[[0,0],[1,1],[2,2]],
			[[2,0],[1,1],[0,2]]
			]

		this.getWinner = function(){
			for(var i = 0; i < this.WINNING_COORDS.length; i++){
				var coord_list = this.WINNING_COORDS[i]
				var winner = this.checkSame(coord_list)
				if(winner != false){
					return winner
					}
				}
				return null
			}

		this.printBoard = function(){
			var board_values = this.board.getBoard()
			for(x = 0; x < 3; x++){
				console.log(board_values[x])
				}
			}

		}

	return module

})()
