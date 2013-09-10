<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="javax.script.ScriptEngine"%>
<%@ page import="javax.script.ScriptEngineManager"%>
<%@ page import="test.Model"%>

<%
String message = "";
String scripttext=request.getParameter("scripttext");
try{
	Model model=new Model();
	message=model.getClass().getName();
	if(scripttext!=null){
		ScriptEngineManager mgr = new ScriptEngineManager();
		ScriptEngine jsEngine = mgr.getEngineByName("JavaScript");
		jsEngine.eval(scripttext);
	}
}catch(Exception e){
	e.printStackTrace();
	message=e.getMessage();
}
%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Intergration Test</title>
</head>
<body>

<table>
  <tr>
    <td valign="middle"><IMG SRC="http://p.ebaystatic.com/aw/pics/logos/logoEbay_x45.gif"
				ALT="eBay"></td>
    <td valign="middle"><b><font size="5" face="arial">Intergration Test Tools for professional Developer </font></b>
    </td>
  </tr>
</table>
<font color="red"><%=message%></font>
<hr>
<FORM name='form1' method='Post'>
  <TABLE>
    <TR>
      <TD><TEXTAREA name="scripttext" id="scripttext"  rows="20" cols="100"value=''><%=scripttext%></TEXTAREA></TD>
    </TR>
    <TR>
      <TD><input type=submit name='action' value='explain'></TD>
    </TR>
  </TABLE>
</FORM>
</body>
</html>
