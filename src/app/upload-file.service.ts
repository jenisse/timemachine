import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

  FOLDER = 'time-capsule/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAJ56AI6RLUDFW5CNQ',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'tata-bucket-time',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        alert('There was an error uploading your file. Try later.');
        return false;
      }

      console.log('Successfully uploaded file.', data);
      alert('Your file was uploaded correctly');
      return true;
    });
  }

}
