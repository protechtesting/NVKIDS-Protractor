import { googlelib } from "../LIB/googlelib";
import { browser } from "protractor";
import { readexcel } from "../ExcelUtility/readexcel";

describe("google searchbox tests",function(){
    let googleLib = new googlelib();
    let excelobj = new readexcel();
    

    browser.ignoreSynchronization=true
    browser.manage().timeouts().implicitlyWait(30000)


    it("search text",function(){

        browser.get("https://www.google.com/")


        let jsonfile = require("E:\\PROTRACTOR DEMO\\jasondata.json")
        let searchinput=jsonfile["website"]

        excelobj.readExcel("E:\\data.xlsx","Sheet1",1,1).then(function(excelvalue){
            googleLib.entertextusingmethod(excelvalue.toString())
        })

        
        browser.sleep(30000)
        browser.getTitle().then(function(title){

            expect(title).toBe("Googl")
        })


    })
})