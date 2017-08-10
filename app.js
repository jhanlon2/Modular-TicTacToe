var game_1 = new tictactoe.Game()
$(document).ready(function(){

	var renderBoard = function(){
		var cell = $(".cell")
		cell.innerHTML = ""
		}

	$("#submit").on("click",function(){
		player_1 = $("#player_1").val()
		player_2 = $("#player_2").val()
		$("#player").hide()
		$("#submit").hide()
		$.post("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/3.json", {tic_tac_toe_game: {player_1: player_1, player_2: player_2}})
		})

	$("#1").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(0,0)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		})

	$("#2").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(0,1)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		})

	$("#3").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(0,2)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		})

	$("#4").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(1,0)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		
		})

	$("#5").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(1,1)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		
		})

	$("#6").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(1,2)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		
		})

	$("#7").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(2,0)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		
		})

	$("#8").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(2,1)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		
		})

	$("#9").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(2,2)
		game_1.convert2dBoard()
		game_1.saveBoard()
		game_1.getWinner()
		
		})

	$(".button").on("click",game_1.reset())
})
