import { Component, OnInit } from '@angular/core';
import {IUserPhoto} from '../service-interfaces/i.userphoto';
import {PhotoService} from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2-page',
  templateUrl: './tab2-page.component.html',
  styleUrls: ['./tab2-page.component.scss'],
})
export class Tab2PageComponent implements OnInit {

  title: string = 'Photo Gallery';

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: IUserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

}
