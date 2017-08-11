var tictactoe = (function(){

	module = {}

	module.Board = function(length,id){
		this.id = id
		this.length = length
		this.player_1 = null
		this.player_2 = null

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
		//this.values = this.getValues(this.length)

		this.setPlayers = function(player_1,player_2){
			this.player_1 = player_1
			this.player_2 = player_2
			}

		this.getBoard = function(){
			return this.values
			}
			
		this.place = function(x_coord,y_coord,character){
			this.values[x_coord][y_coord] = character
			this.saveToApi()
			}

			
		this.convert1dBoard = function(two_d_board){
			//Converts a 2d board into a 1d board
			one_d_board = [].concat.apply([], two_d_board)
			return one_d_board
			}

		this.convert2dBoard = function(one_d_board){
			//Converts a 1d board into a 2d board
			 part = this.length
			 var two_d_board = []
			 for(var i = 0; i < one_d_board.length; i += part){
			 	two_d_board.push(one_d_board.slice(i, i + part))
				}
			return two_d_board
			 }


		//API interface functions

		this.getFromApi = function(){
			//Form the url for the game
			var url = "http://ce-sample-api.herokuapp.com/tic_tac_toe_games/"+this.id+".json"
			//Get the data from the api
			var _this = this
			$.get(url,function(res){
					//Distill the data from the API into "this"
					_this.player_1 = res.player_1
					_this.player_2 = res.player_2
					if (res.data.board.length !== 9){
						_this.values = _this.getValues(_this.length)
						_this.saveToApi()
						}
					else{
						var two_d_board = _this.convert2dBoard(res.data.board)
						_this.values = two_d_board
						}
				})
			}
		this.getFromApi()

		this.saveToApi = function(callback_function){
			//Takes this.values
			//Transforms the data into a 1d array
			var one_d_board = this.convert1dBoard(this.values)
			//Takes this.player_1 and this.player_2 and adds them into the obj
			var board_obj = 
				{ tic_tic_toe_game:
					{
					id: this.id,
					player_1: this.player_1,
					player_2: this.player_2,
					data: {
						board: one_d_board
						}
					}
				}
			console.log(board_obj)
			//Post the obj to the server
			var url = "http://ce-sample-api.herokuapp.com/tic_tac_toe_games/"+this.id+".json"
			$.post("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/3.json",board_obj,callback_function)
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
			//Reset the turn count
			//Clear the board
			this.turn_count = 0
			this.getBoard()//TODO: Why?
			this.convert2dBoard()
			this.saveBoard()
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
