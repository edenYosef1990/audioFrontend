import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AudioSchedulingService } from "./audio.scheduling.service";

@Injectable({providedIn: 'root'})
export class RestApiService {

    constructor(
        private http: HttpClient , 
        private audioSchedulingService : AudioSchedulingService){}

    async StartAudio(id: string){
        let res = await this.http.get(`http://localhost:5230/api/weatherForecast/get-file-stream/${id}`
        ,{responseType: 'blob'}).toPromise();
        await this.audioSchedulingService.scheduleAudio(res!,id);
    }
}