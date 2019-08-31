"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googlelib_1 = require("../LIB/googlelib");
const protractor_1 = require("protractor");
const readexcel_1 = require("../ExcelUtility/readexcel");
describe("google searchbox tests", function () {
    let googleLib = new googlelib_1.googlelib();
    let excelobj = new readexcel_1.readexcel();
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().timeouts().implicitlyWait(30000);
    it("search text", function () {
        protractor_1.browser.get("https://www.google.com/");
        let jsonfile = require("E:\\PROTRACTOR DEMO\\jasondata.json");
        let searchinput = jsonfile["website"];
        excelobj.readExcel("E:\\data.xlsx", "Sheet1", 1, 1).then(function (excelvalue) {
            googleLib.entertextusingmethod(excelvalue.toString());
        });
        protractor_1.browser.sleep(30000);
        protractor_1.browser.getTitle().then(function (title) {
            expect(title).toBe("Googl");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xldGVzdF9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vTlZLSURTL1NQRUMvZ29vZ2xldGVzdF9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQTZDO0FBQzdDLDJDQUFxQztBQUNyQyx5REFBc0Q7QUFFdEQsUUFBUSxDQUFDLHdCQUF3QixFQUFDO0lBQzlCLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQ2hDLElBQUksUUFBUSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBRy9CLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFBO0lBQ2xDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBR2pELEVBQUUsQ0FBQyxhQUFhLEVBQUM7UUFFYixvQkFBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBR3RDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1FBQzdELElBQUksV0FBVyxHQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVuQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFVBQVU7WUFDckUsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ3pELENBQUMsQ0FBQyxDQUFBO1FBR0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBRWxDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=