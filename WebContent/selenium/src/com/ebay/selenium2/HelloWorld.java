package com.ebay.selenium2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverBackedSelenium;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.thoughtworks.selenium.Selenium;

public class HelloWorld  {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		 String baseUrl = "http://www.google.com";
		Selenium selenium = new WebDriverBackedSelenium(driver, baseUrl);
		selenium.open("/");
		selenium.type("name=q", "hello world");
		selenium.click("name=btnG");
//	    selenium.close();
	}
}