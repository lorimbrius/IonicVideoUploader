import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public fileName: string;

  constructor(public navCtrl: NavController,
              public plt: Platform,
              private camera: Camera) {

  }

  public readonly OPTIONS: CameraOptions = {
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    allowEdit: true,
    mediaType: this.camera.MediaType.VIDEO
  }

  public commandGetVideo(event?: Event): void {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    this.plt.ready().then((readySource) => {
      this.camera.getPicture(this.OPTIONS).then((videoData) => {
        console.log(videoData);
        this.fileName = videoData;
      }, (err) => {
        console.log(err);
      });
    });
  }

  // Going to have to do different things on iOS vs. Android
  public commandBrowse(event?: Event): string {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    let fileBrowserResult: string = "";

    if (this.fileName && this.fileName.length > 0) {
      // start file browser in specified location
    }

    return fileBrowserResult;
  }

}
