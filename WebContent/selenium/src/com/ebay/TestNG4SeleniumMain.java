package com.ebay;

import org.testng.TestListenerAdapter;
import org.testng.TestNG;

import com.ebay.testng4selenium.Rgister126Test;

public class TestNG4SeleniumMain {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		if(args!=null && args.length>=1){
			Rgister126Test.dataFile=args[0];
		}
		TestListenerAdapter tla = new TestListenerAdapter();
		TestNG testng = new TestNG();
		testng.setTestClasses(new Class[] { Rgister126Test.class });
		testng.addListener(tla);
		testng.run();
	}

}
