<!DOCTYPE html>
<html>
<head>
	<title>eBay Screen</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
 	<script type="text/javascript" src='js/jquery.js'></script>
	<script type="text/javascript" src='js/bootstrap.js'></script>
	<script type="text/javascript">
		$(function(){
			$('#myModal').modal({
				backdrop:false,
				keyboard:false,
				show:true
			});
			$('#createListButton1').click(function(){
				$('#contentPanel').fadeOut();
				window.location='<%=request.getParameter("picUrl")%>';

			});
			$('#createListButton2').click(function(){
				$('#contentPanel').fadeOut();
				window.location='selectitem<%=request.getParameter("deviceId")%>.html';
			});
		});
	</script>

</head>
<body>
	<div class="container">
	<br>
	<br>
	<br>
	
	
		<div class="row">
			<div id="contentPanel" class="span2 offset1">
			<img style=""
						src="img/screen.png">
						<br>
	<br>
					<div class="control-group">
						<div class="controls">
							<button class="btn btn-primary btn-large" style="width:150px;" id='createListButton1' >Buy It Now</button>

						</div>
					</div>
	<br>

					<div class="control-group">
						<div class="controls">
							<button class="btn btn-large" style="width:150px;" id='createListButton2' >Push My Ad.</button>
						</div>
					</div>

			</div>
			<!-- span12 -->
		</div>
</body>
</html>
