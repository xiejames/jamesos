function _commentsWinStart(){
		
	CreateElement('guishCommentsContent', 'main', 'Latest comments ...');
	$('#guishCommentsContent').jWindow({
		width: 400,
		height: 500,
		resizable: true,
		minimizable: true
	});
	
	CreateElement('guishCommentsWin', 'main', 'Leave a comment ...');
	$('#guishCommentsWin').jWindow({
		onBeforeClose: function(){ closeCommentsCt();},
		width: 400,
		height: 210,
		resizable: false,
		minimizable: true
	});
	$('#guishCommentsWin div.container').load('apps/comments/comments.app', function(){
		$(this).css('background','url(apps/comments/img/cback.gif) no-repeat');
	});
	
	$('#guishCommentsContent div.container').load('apps/comments/content.app', function(){
		$(this).css({'background':'url(apps/comments/img/cback.gif) no-repeat','overflow':'auto'});
	    $('#guishCommentsContent').find('span.winclose').css('display','none');
		
		ShowElement('guishCommentsWin', 'Comments app loaded!', 'Application loaded!');
		setTimeout(function(){
			setUpComments();
			ShowElement('guishCommentsContent', 'Comments loaded!', 'Application loaded!');
			setTimeout(function(){ $('#guishCommentsWin').animate({left: '0'}); }, 1000);
		},1000);
	});
}

function closeCommentsCt(){
	setTimeout( function(){	$('#guishCommentsContent').find('span.winclose').click(); }, 400 );
}

var setUpComments = function(){
	//global vars
	var inputUser = $("#comname");
	var inputMessage = $("#commessage");
	var loading = $("#comajax");
	var messageList = $(".comcontent > div.comcontainer");
	
	$("#comname").focus(function(){
		$(this).recover();
	});
	$("#commessage").focus(function(){
		$(this).recover();
	});
	
	//functions
	function updateShoutbox(){
		//just for the fade effect
		messageList.hide();
		loading.fadeIn('fast');
		//send the post to shoutbox.php
		$.ajax({
			type: "POST", url: "apps/comments/comments.php", data: "action=update",
			complete: function(data){
				
				messageList.html(data.responseText);
				messageList.fadeIn(2000, function(){loading.fadeOut('slow');});
			}
		});
	}
	
	//Load for the first time the shoutbox data
	updateShoutbox();
	
	//on submit event
	$("#commentsform").submit(function(){
					
			if(!inputMessage.attr("value")){
				inputMessage.recover().pulse({ speed: 700, backgroundColors: ['#fff','#ff0000'] });
				return false;
			}
			loading.fadeIn('fast');
			var nick = inputUser.attr("value");
			var message = inputMessage.attr("value");
			//we deactivate submit button while sending
			$("#comentsubmit").attr({ disabled:true, value:"Sending..." });
			$("#comentsubmit").blur();
			//send the post to shoutbox.php
			$.ajax({
				type: "POST", url: "apps/comments/comments.php", data: "action=insert&nick=" + nick + "&message=" + message,
				complete: function(data){
					messageList.html(data.responseText);
					updateShoutbox();
					loading.hide();
					$("#comentsubmit").hide();
					$("span.comsuccess").show();
					
					setTimeout(function() {
						$("#comentsubmit").show();
						$("span.comsuccess").hide();
					}, 3000);
				}
			 });

		//we prevent the refresh of the page after submitting the form
		return false;
	});
}