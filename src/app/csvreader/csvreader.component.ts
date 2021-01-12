import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csvreader',
  templateUrl: './csvreader.component.html',
  styleUrls: ['./csvreader.component.scss']
})
export class CsvreaderComponent implements OnInit {

  finalData
  headerArray

  checkedArray=[]
  constructor() { }

  ngOnInit() {
  }

  fileUploaded(event){
    let file=event.target.files[0]
    let newReader= new FileReader()
    newReader.readAsText(file);  
    console.log("after read",newReader);
    newReader.onload = () => {  
      let csvData = newReader.result;  
      let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
      this.headerArray = this.getHeaderArray(csvRecordsArray);  
      this.finalData = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, this.headerArray);  
    };  

  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength.length) { 
        let obj ={
        }
        for(let i in headerLength){
          obj[headerLength[i]] = curruntRecord[i].trim(); 
        } 
        csvArr.push(obj);  
      }  
    }   
    return csvArr;  
  }  

  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  

  checkeddata(event,data){
    if(event.target.checked){
        this.checkedArray.push(data)
    }else{
      let uniqe = this.checkedArray.filter(a=> a!=data)
      this.checkedArray=uniqe
    } 
  }

  generatecsv(data){
     let generateArray=[]
     for(let i of data){
       let obj={}
       for(let j of this.checkedArray){
         obj[j]=i[j]
       }
       generateArray.push(obj)
     }
     console.log("final generate",generateArray);
     this.downloadFile(generateArray)
     
  }
  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value);
    const header = Object.keys(data[0]);
    const csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'myFile.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
