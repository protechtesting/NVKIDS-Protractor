"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = require("exceljs");
const wb = new exceljs_1.Workbook();
class readexcel {
    readExcel(path, sheetdetails, rownumber, colnumber) {
        return wb.xlsx.readFile(path).then(function () {
            let sheet = wb.getWorksheet(sheetdetails);
            let row = sheet.getRow(rownumber);
            let cell = row.getCell(colnumber);
            let content = cell.value;
            return content;
        });
    }
}
exports.readexcel = readexcel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGV4Y2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vTlZLSURTL0V4Y2VsVXRpbGl0eS9yZWFkZXhjZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBMkM7QUFDM0MsTUFBTSxFQUFFLEdBQVksSUFBSSxrQkFBUSxFQUFFLENBQUM7QUFFbkMsTUFBYSxTQUFTO0lBQ1gsU0FBUyxDQUFDLElBQVcsRUFBQyxZQUFnQixFQUFDLFNBQWdCLEVBQUMsU0FBZ0I7UUFFM0UsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNsRCxJQUFJLEdBQUcsR0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2hDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUN4QixPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FDSjtBQVpELDhCQVlDIn0=