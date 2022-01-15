import {Component, EventEmitter, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   fileToUpload: File;


  constructor(private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = $event.target.files[0];
  }
}
