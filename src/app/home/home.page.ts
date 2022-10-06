import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public topic:any;
  public newsData: any;
  
  constructor(public api:ApiService,private alert:AlertController) {
    
  }

  search(){
    this.api.getNews(this.topic).subscribe(result =>{
      console.log(result);
      if(result['articles'].length === 0)
      {
          this.presentAlert();
      }
      this.newsData = result['articles'];
    });
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'No news found!',
      message: 'Please search for another topic.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  getDetails(){
    
  }
}
