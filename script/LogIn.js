$(window).load(function(){		
	if(S7Framework.loginCheck()){ // if true --> logged on
	}
	else{
		alert("Please log in!"); // Alert if not logged in --> can't change values !!!
	}
});

$.init = function(){
	S7Framework.initialize("1500", "");
}