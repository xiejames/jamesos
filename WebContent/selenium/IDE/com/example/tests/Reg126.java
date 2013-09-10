package com.example.tests;

import com.thoughtworks.selenium.*;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import java.util.regex.Pattern;

public class Reg126 extends SeleneseTestNgHelper {
	@Test public void testReg126() throws Exception {
		selenium.open("/#126");
		selenium.click("//span[@id='notAccountTips']/a");
		selenium.click("//input[@id='unameInp']");
		selenium.type("//input[@id='unameInp']", "selenium2011");
		selenium.click("//input[@id='inp163Btn']");
		selenium.type("//input[@id='passwInp']", "BuyItNow");
		selenium.type("//input[@id='passConfim']", "BuyItNow");
		selenium.type("//input[@id='verifyInp']", "aa");
		selenium.click("//input[@id='regBtn']");
	}
}
