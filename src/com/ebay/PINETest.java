package com.ebay;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;

public class PINETest {
	public static void main(String[] args) throws Exception {
	    
	    
	    URL url = new URL("http://eventbridge.sandbox.ebay.com/eventbridge/InboundEvent/publish");
	    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	    conn.setDoOutput(true);
	    conn.setRequestMethod("POST");
	    conn.setRequestProperty("Content-Type", "application/xml");
	    conn.setRequestProperty("X-EBAY-EVENT-TYPE", "EBAY.ORDER.READY_FOR_PICKUP");
	    
	    String authKey = "AgAAAA**AQAAAA**aAAAAA**QAqtUA**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4GhCZaGogydj6x9nY+seQ**WwACAA**AAMAAA**Qqr+YFGBfeCqCcI1KaWRwMmq8JDyO7qiqy8/VpzUhuwLO8/qBAz3R2PfqtFaW+biZob1M+nzsVlnctwf7dDbK1FX9rU2rg4cxPe+Y6+AIcvUvp3HdCGQ6UBCBeZLXzpqxL3qYAponFSg2UnqBMu/wpuW8Sq1iDJIX7RaWD2sLp1rMFYzYCcn31itNPAVlkThtwtYx7GLYgpBIfak4Pvy5xoFN5PBAGW3AcdoyIxEF1gpL8MWUNjkTCWRBj9msgf0SLH6uhi2LQkLJLYqIE/DslIkS9S+iB5Ff2W6acUx84VW/SvAZv+qAKKRF6sXn+kK9PPVNL6n0DlOlDZQLMCXN4nkEnuJn+7oLXZLFVJnvChJbs29XLTsJRFE5Zgw4vqt/9dEsI8JxeRY8o+gwkhFIzKzLUIdbMjA3vKoTfgFy3wdXaTQ+Vey+rydC8kCfyMtWToTnUfXoMc9oz5u0+JRpx3DE03AT/qGIShL41Gz8xLuilaKaRtq/dXwUTrYPBbD0qU28xaMZRbIRYEHXB8UC9dDahA/NObofvfh2HFZw3kZ/OoA7DTPpCU+Dm5IhlmLgKjxRrX+b6K8+NoB5LS3gI1984KT8DVGAZzXQO7t5BmiTi4SIlWfiFubuxQ8d02gAu2P+PKtfelRLK3BZoLCzrKwX+oZiYQPxFG6y+fNiUbrzy+8AomHp2y4n1mjKwtMaLeegGqk5FyhuSHBOOAijz6h0QhtBWDsc03U101os58EQVKyXfq7gAP8mk/xKNsJ";
	       
	    conn.setRequestProperty("Authorization", "TOKEN "+authKey);
	   
	    String input = "<?xml version=\"1.0\" encoding=\"UTF-8\"?> " + 
	        "<event> " + 
	        "  <payload> " + 
	        "    <ebayOrderId>110116454143-27065877001</ebayOrderId> " + 
	        "    <notifierPickupNote>ready</notifierPickupNote> " + 
	        "    <notifierPickupId>4</notifierPickupId> " + 
	        "  </payload> " + 
	        "  <notifierReferenceId>BBY01-EB2013090300014</notifierReferenceId> " + 
	        "  <type>EBAY.ORDER.READY_FOR_PICKUP</type> " + 
	        "  <version>1.0</version> " + 
	        "</event>";
	 
	    System.out.println(new Date().getTime());
	    OutputStream os = conn.getOutputStream();
	    os.write(input.getBytes());
	    os.flush();
	    System.out.println(new Date().getTime());
	 
	    System.out.println("conn.getResponseCode() :"+conn.getResponseCode() );
	    InputStream response = conn.getInputStream();
	    StringBuffer result=new StringBuffer();
	    byte[] b=new byte[1024];
		while(response.read(b)>-1){
			result.append(new String(b));
		}
	    System.out.println(result.toString() );
	 
	  
	 
	    conn.disconnect();
	  }

}
