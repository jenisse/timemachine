import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

 
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;

  constructor(private uploadService: UploadFileService) { }
 
  ngOnInit() {

  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
    
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
    if(this.selectedFiles.item(0).size>1000){
      alert('File size is larger than maximun (1000). Select other file.')
      event.srcElement.value = null;
    }
  }

}
