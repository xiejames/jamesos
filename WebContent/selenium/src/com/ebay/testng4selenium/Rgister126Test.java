package com.ebay.testng4selenium;

import java.io.IOException;
import java.io.InputStream;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import org.apache.log4j.Logger;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class Rgister126Test extends LifeCycleTest{
	Logger logger = Logger.getLogger(Rgister126Test.class);
	public static String dataFile="Book1.xls";
	@DataProvider(name =  "XlsData" )
	public Object[][] getDataFromXls() throws BiffException, IOException {
		logger.info("dataFile"+dataFile);
		InputStream is = this.getClass().getResourceAsStream(dataFile);
		Workbook w = Workbook.getWorkbook(is);
		Sheet sheet = w.getSheet(0);
		Object[][] data=new Object[sheet.getRows()][sheet.getColumns()];
		for(int i=0;i<sheet.getRows();i++){
			Cell[] row = sheet.getRow(i);
			for(int j=0;j<sheet.getColumns();j++){
				data[i][j]=row[j].getContents();
			}
		}
		return data;
	}
	
	@Test(dataProvider="XlsData",groups="selenium_test")
	public void helloWorld(String userName,String password){
		logger.info("hello World: "+userName+"--"+password);
	}
	@Test(dataProvider="XlsData",groups="selenium")
	public void register126(String userName,String password){
		selenium.open("/");
		selenium.click("//input[@id='unameInp']");
		selenium.type("//input[@id='unameInp']", userName);
		selenium.fireEvent("//input[@id='unameInp']", "blur");
		selenium.type("//input[@id='passwInp']", password);
		selenium.fireEvent("//input[@id='passwInp']", "blur");
		selenium.type("//input[@id='passConfim']",password);
		selenium.fireEvent("//input[@id='passConfim']", "blur");
		selenium.click("//input[@id='verifyInp']");
		while(selenium.getValue("//input[@id='verifyInp']").length()!=2){
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				throw new RuntimeException(e.getMessage());
			}
			continue;
		}		
		selenium.fireEvent("//input[@id='verifyInp']", "blur");
		selenium.click("//input[@id='regBtn']");
		selenium.waitForPageToLoad("5000");
		if(selenium.isElementPresent("//input[@id='unameInp']")==false){
			logger.info("Successful Registered: "+userName+"--"+password);
		}else{
			logger.error("Fail to Registered: "+userName+"--"+password);
			selenium.waitForPageToLoad("10000");
		}

	}
}
