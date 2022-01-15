import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  selectedFile: File[] = [];
  ref: AngularFireStorageReference;
  private downloadURL: string;
  @Output()
  giveURLCreate = new EventEmitter<string>();
  checkUploadFile = false;

  constructor(private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onFileUp($event) {
    this.selectedFile = $event.target.files;
    console.log('even:', $event);
    this.onUpLoad();
  }

  onUpLoad() {
    this.checkUploadFile = true;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
      this.checkUploadFile = false;
      this.downloadURL = downloadURL;
      this.giveURLCreate.emit(this.downloadURL);
      return downloadURL;
    })
      .catch(error => {
        console.log(`Failed to upload picture and get link ${error}`);
      });
  }
}
