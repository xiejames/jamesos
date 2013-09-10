package com.ebay.selenium;

import com.thoughtworks.selenium.DefaultSelenium;

public class HelloWorld {

	public static void  main(String[] args)  {
		DefaultSelenium selenium = new DefaultSelenium(
				"localhost", 4444, "*firefox", "http://www.baidu.com/");
	    selenium.start();
		selenium.open("/");
		selenium.selectWindow(null);
		selenium.waitForPageToLoad("5000");
		selenium.type("//input[@id='kw']", "hello world");
		selenium.click("//input[@id='su']");
//		selenium.close();
	}
}