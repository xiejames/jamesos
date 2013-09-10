
	<div id="contactdiv">
		<div class="ctext">
			<p>Leave me a message ...</p>
			<p></p>
			<p>I will answer as soon as posible.</p>
		</div>
		<img id="contactloader" alt="" src="apps/widgets/img/loading.gif" />
		<div class="cdiv">
			<form id="contactform">
			<div class="csubject" style="padding-bottom: 1px;">
				<label for="subject" onclick="$('#contactdiv input,#contactdiv textarea').blur();$('#consubject').focus();">Subject</label><input type="text" name="consubject" id="consubject" autocomplete="off"/>
			</div>
			<div class="cdetail">
				<label for="detail" onclick="$('#contactdiv input,#contactdiv textarea').blur();$('#condetail').focus();">Message</label><textarea name="condetail" cols="34" rows="5" id="condetail" autocomplete="off"/></textarea>
			</div>
			<div class="cname">
				<label for="yourname" onclick="$('#contactdiv input,#contactdiv textarea').blur();$('#conname').focus();">Your name</label><input type="text" name="conname" id="conname" autocomplete="off"/>
			</div>
			<div class="cemail">
				<label for="youremail" onclick="$('#contactdiv input,#contactdiv textarea').blur();$('#conemail').focus();">Your email</label><input type="text" name="conemail" id="conemail" autocomplete="off"/>
			</div>
			<div class="cemail">
				<label for="website" onclick="$('#contactdiv input,#contactdiv textarea').blur();$('#conwebsite').focus();">Your website</label><input type="text" name="conwebsite" id="conwebsite" autocomplete="off"/>
			</div>
			<input id="newcontact" name="newcontact" type="hidden" value="1"></input>
			</form>
			<div class="cconfirm">
				<button id="consubmit">    
				  <span>
					<span style="color: #20a12c">Submit</span>
				  </span>
				</button>
				<button id="contactreset">    
				  <span>
					<span>Reset</span>
				  </span>
				</button>
				<button onclick="$('#guishContactWin span.winclose').click();">    
				  <span>
					<span>Cancel</span>
				  </span>
				</button>
			</div>
		</div>
		<div id="csucess">
			<span id="success_message">
			</span>
		</div>
	</div>
