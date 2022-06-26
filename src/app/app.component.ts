import { Component } from '@angular/core';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audioProj';

  constructor(private restService : RestApiService){
    
  }

  async StartAudio(){
    await this.restService.StartAudio("01");
    await this.restService.StartAudio("02");
    await this.restService.StartAudio("03");
    await this.restService.StartAudio("04");
    await this.restService.StartAudio("05");
    await this.restService.StartAudio("06");
    await this.restService.StartAudio("07");
    await this.restService.StartAudio("08");
    await this.restService.StartAudio("09");
    await this.restService.StartAudio("10");
    await this.restService.StartAudio("11");
    await this.restService.StartAudio("12");
    await this.restService.StartAudio("13");
    await this.restService.StartAudio("14");
    await this.restService.StartAudio("15");
    await this.restService.StartAudio("16");
    await this.restService.StartAudio("17");
    await this.restService.StartAudio("18");
    await this.restService.StartAudio("19");
    await this.restService.StartAudio("20");
    await this.restService.StartAudio("21");
    await this.restService.StartAudio("22");
    await this.restService.StartAudio("23");
    await this.restService.StartAudio("24");
    await this.restService.StartAudio("25");
    await this.restService.StartAudio("26");
    await this.restService.StartAudio("27");
    //await this.restService.StartMP3();
  }
}
