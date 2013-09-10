function _contactWinStart(){
	CreateElement('guishContactWin', 'main', 'Contact form');
	$('#guishContactWin').jWindow({
		width: 400,
		height: 367,
		resizable: false,
		theme: 'jwindow',
		minimizable: true
	});
	$('#guishContactWin div.container').load('apps/contactform/contact.app', function(){
	
		$('#contactreset').click(function(){
			$('#contactdiv input,#contactdiv textarea').val('').blur();
		});
		
		$('#contactdiv label').each(function(){
			var labelColor = '#777';
			var restingPosition = '17px';
			
			// style the label with JS for progressive enhancement
			$(this).css({
				'color' : labelColor,
					'position' : 'absolute',
					'top' : '12px',
					'left' : restingPosition,
					'display' : 'inline',
					'z-index' : '99'
			});
			
			
			var inputval = $(this).next().val();
			
			// grab the label width, then add 5 pixels to it
			var labelwidth = $(this).width();
			var labelmove = labelwidth + 5 +'px';
			
			//onload, check if a field is filled out, if so, move the label out of the way
			if(inputval !== ''){
				$(this).stop().animate({ 'left':'-'+labelmove }, 1);
			}    	
			
			// if the input is empty on focus move the label to the left
			// if it's empty on blur, move it back
			$('#contactdiv input,#contactdiv textarea').focus(function(){
				$(this).recover();
				var label = $(this).prev('label');
				var width = $(label).width();
				var adjust = width - 5 + 'px';
				var value = $(this).val();
				
				if(value == ''){
					label.stop().animate({ 'left':'-'+adjust }, 'fast', function(){
						$(this).css('color','#000');
					});
				} else {
					label.css({ 'left':'-'+adjust });
				}
			}).blur(function(){
				var label = $(this).prev('label');
				var value = $(this).val();
				
				if(value == ''){
					label.stop().animate({ 'left':restingPosition }, 'fast', function(){
						$(this).css('color','#777');
					});
				}	
				
			});	
		}); // End "each" statement	
		

		contact.initEventHandlers();
	
		ShowElement('guishContactWin', 'Contact form loaded!', 'Application loaded!');
	});
}


	

var contact = {
	initEventHandlers	: function() {
		/* clicking the submit form */
		$('#consubmit').bind('click',function(event){
			var inputs = new Array();
			inputs[0] = $('#consubject');
			inputs[1] = $('#condetail');
			inputs[2] = $('#conname');
			inputs[3] = $('#conemail');
			for(var i = 0; i < inputs.length; i++){
				//alert(inputs[i].val());
				if(inputs[i].val() === '') {
					inputs[i].pulse({ speed: 500, backgroundColors: ['#fdff51','#0000ff','#ff0000'] });
					return;
				}
			}			
			$('#contactloader').show();
			setTimeout('contact.ContactFormSubmit()',500);
		});
		/* remove messages when user wants to correct (focus on the input) */
		$('.inplaceError',$('#guishContactWin')).bind('focus',function(){
			var $this 		= $(this);
			var $error_elem = $this.next();
			if($error_elem.length)
				$error_elem.fadeOut(function(){$(this).empty()});
			$('#success_message').empty();	
		});
		/* user presses enter - submits form */
		$('#guishContactWin input').keypress(function (e) {
			if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {  
				$("#consubmit").click();
				return false;  
			} 
			else  
				return true;  
		});
	},
	ContactFormSubmit	: function() {
		$.ajax({
			   type		: 'POST',
			   url		: 'apps/contactform/contact.php?ts='+new Date().getTime(),
			   dataType	: 'json',
			   data		: $('#guishContactWin #contactform').serialize(),
			   success	: function(data,textStatus){							  
							  //hide the ajax loader
							  $('#contactloader').hide();
							  if(data.result == '1'){
							      //show success message
								  $('#success_message').empty().html('Message sent!');
	
								  $('div.ctext, div.cdiv').fadeOut();
								  $('#csucess').fadeIn();
								  setTimeout(function() {$('#guishContactWin span.winclose').click();}, 5000);
							  }
							  else if(data.result == '-1'){
								  $("div.ctext").empty();
								  for(var i=0; i < data.errors.length; ++i ){									  
								      if(data.errors[i].value!='')
								          $("div.ctext").css({'text-align':'center','backgroundColor':'yellow', 'font-size': '10px','font-weight':'bold','color':'#ff0000'}).append('<span>'+data.errors[i].value+'</span>' + ((i === data.errors.length - 1) ? '' : ', ')).fadeIn();
								  }
								  
							  }						  
						  },
			   error	: function(data,textStatus){ }
		});
	}  
};