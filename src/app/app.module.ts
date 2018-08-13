import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploadComponent } from './upload/upload.component';
import { UploadFileService } from './upload-file.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
