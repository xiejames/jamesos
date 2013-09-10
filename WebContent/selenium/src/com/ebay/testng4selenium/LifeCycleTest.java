package com.ebay.testng4selenium;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriverBackedSelenium;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterGroups;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeGroups;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.thoughtworks.selenium.Selenium;

public class LifeCycleTest {
	Logger logger = Logger.getLogger(LifeCycleTest.class);
	protected Selenium selenium=null;
	
	@BeforeSuite(alwaysRun=true)
	public void BeforeSuite(ITestContext context) {
		FirefoxDriver driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		String baseUrl = context.getSuite().getParameter(NGConstant.WEB_URL_PARAM_NAME);
		if(baseUrl==null || baseUrl.equals("")){
			baseUrl="http://reg.email.163.com/mailregAll/reg0.jsp?from=126mail";
		}
		selenium = new WebDriverBackedSelenium(driver, baseUrl);
		logger.debug("@BeforeSuite");
	}

	@BeforeTest(alwaysRun=true)
	public void BeforeTest() {
		logger.debug("@.BeforeTest");
	}

	@BeforeClass(alwaysRun=true)
	public void BeforeClass() {
		logger.debug("@...BeforeClass");
	}

	@BeforeGroups(groups="DebugGroup")
	public void BeforeGroups() {
		logger.debug("@...BeforeGroups");
	}

	@BeforeMethod(alwaysRun=true)
	public void BeforeMethod() {
		logger.debug("@......BeforeMethod");
	}

	@AfterMethod(alwaysRun=true)
	public void AfterMethod() {
		logger.debug("@......AfterMethod");
	}

	@AfterGroups(groups="DebugGroup")
	public void AfterGroups() {
		logger.debug("@...AfterGroups");
	}

	@AfterClass(alwaysRun=true)
	public void AfterClass() {
		logger.debug("@...AfterClass");
	}

	@AfterTest(alwaysRun=true)
	public void AfterTest() {
		logger.debug("@.AfterTest");
	}

	@AfterSuite(alwaysRun=true)
	public void AfterSuite() {
		logger.debug("@AfterSuite");
		selenium.close();
	}
	
	@Test(groups="DebugGroup")
	public void TestMethod1() {
		logger.debug("@.........Test Method 1");
	}

	@Test(groups = { "DebugGroup" })
	public void TestMethod2() {
		logger.debug("@.........Test Method 2");
	}
}
