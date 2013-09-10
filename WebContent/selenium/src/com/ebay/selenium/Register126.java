package com.ebay.selenium;

import com.thoughtworks.selenium.DefaultSelenium;

public class Register126 {
	public static void  main(String[] args)  {
		DefaultSelenium selenium = new DefaultSelenium(
				"localhost", 4444, "*firefox", "http://www.126.com/");
	    selenium.start();
		selenium.open("http://reg.email.163.com/mailregAll/reg0.jsp?from=email163&regPage=126");
		selenium.selectWindow(null);
		selenium.waitForPageToLoad("5000");
		selenium.click("//input[@id='unameInp']");
		selenium.type("//input[@id='unameInp']", "selenium2011");
		selenium.click("//input[@id='inp163Btn']");
		selenium.type("//input[@id='passwInp']", "BuyItNow");
		selenium.type("//input[@id='passConfim']", "BuyItNow");
		
		while(selenium.getValue("//input[@id='verifyInp']").length()<2){
			continue;
		}
		selenium.click("//input[@id='regBtn']");
		
		selenium.close();
	}
}
