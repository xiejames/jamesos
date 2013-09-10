package com.ebay.selenium2;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriverBackedSelenium;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.thoughtworks.selenium.Selenium;

public class Register126 {
	public static void  main(String[] args) throws InterruptedException  {
		FirefoxDriver driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		String baseUrl = "http://reg.email.163.com/mailregAll/reg0.jsp?from=126mail";
		Selenium selenium = new WebDriverBackedSelenium(driver, baseUrl);
		for(int i=0;i<3;i++){
			openSession(selenium,"00"+i);
		}
		selenium.close();
	}
	public static void openSession(Selenium selenium,String index){

		selenium.open("/");
		selenium.click("//input[@id='unameInp']");
		selenium.type("//input[@id='unameInp']", "selenium2011"+index);
		selenium.type("//input[@id='passwInp']", "BuyItNow");
		selenium.type("//input[@id='passConfim']", "BuyItNow");
		selenium.click("//input[@id='verifyInp']");
		while(selenium.getValue("//input[@id='verifyInp']").length()!=2){
			selenium.waitForPageToLoad("1000");
			continue;
		}
		selenium.click("//input[@id='regBtn']");
		selenium.waitForPageToLoad("5000");
	}
}
