<form method="post" id="commentsform">
	<table>
		<tr>
			<td style="width: 100px;"><label>Your name</label></td>
			<td><input class="text name" id="comname" type="text" MAXLENGTH="25" /></td>
		</tr>
		<tr>
			<td><label style="position: absolute; top: 52px;">Message</label></td>
			<td>
				<textarea class="text" autocomplete="off" id="commessage" rows="5" MAXLENGTH="350" cols="30" name="commessage"></textarea>
			</td>
		</tr>
		<tr>
			<td></td>
			<td class="cominfo">
				<span class="comsuccess">Comment submited !</span>
				<button id="comentsubmit" style="float: left;">    
				  <span>
					<span style="color: #20a12c">Submit</span>
				  </span>
				</button>
				<div id="comloading">
					<img id="comajax" style="margin-top: 7px" src="apps/widgets/img/loading.gif" alt="Loading..." />
				</div>
			</td>
		</tr>
	</table>
</form>

