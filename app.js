var game_1 = new tictactoe.Game(3)
$(document).ready(function(){


		


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
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#2").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(0,1)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#3").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(0,2)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#4").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(1,0)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#5").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(1,1)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#6").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(1,2)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#7").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(2,0)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#8").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(2,1)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

	$("#9").on("click",function(){
		$(this).text(game_1.player_turn)
		game_1.place(2,2)
		game_1.getWinner()
			if(game_1.winner == true){
				alert(player_turn + " has won!")
				}
		})

//	$(".button").on("click",game_1.reset())
})
