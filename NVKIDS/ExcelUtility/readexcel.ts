import {Workbook, Worksheet} from "exceljs"
const wb:Workbook = new Workbook();

export class readexcel{
    public readExcel(path:string,sheetdetails:any,rownumber:number,colnumber:number){

        return wb.xlsx.readFile(path).then(function(){
            let sheet:Worksheet =wb.getWorksheet(sheetdetails)
            let row =sheet.getRow(rownumber)
            let cell = row.getCell(colnumber)
            let content = cell.value
            return content;
        })

    }
}