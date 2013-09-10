package com.ebay.testng;

import java.io.IOException;
import java.io.InputStream;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import org.apache.log4j.Logger;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataProviderTest extends LifeCycleTest{
	Logger logger = Logger.getLogger(DataProviderTest.class);

	@DataProvider(name =  "XlsData" )
	public Object[][] getDataFromXls() throws BiffException, IOException {
		InputStream is = this.getClass().getResourceAsStream("Book1.xls");
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
	
	@Test(dataProvider="XlsData",groups="dataProvider")
	public void testXlsData(String id,String name){
		logger.info(id+"--"+name);
	}
}
