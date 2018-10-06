import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
declare const Tesseract: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OCR';
  constructor(public httpClient: HttpClient) {
  }

  recognizeImage(url) {
    return new Promise((resolve, reject) => {
      this.getImage(url).subscribe(img => {
        console.log(img);
        Tesseract.recognize(img)
          .progress(function(message) {
            // console.log('progress is: ', message);
          })
          .catch(err => reject(err))
          .then(result => resolve(result));
          // .finally(resultOrError => console.log(resultOrError));
      });
    });
  }
  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }
}
