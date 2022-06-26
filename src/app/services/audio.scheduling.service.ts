import { Injectable } from "@angular/core";

@Injectable
    ({ providedIn: 'root' })
export class AudioSchedulingService {

    nextAvailableTimemark: number = 0;
    ctx :AudioContext = new AudioContext();

    constructor() {
        const offset = 3;
        this.nextAvailableTimemark = offset;
    }

    async audioPlay(url: string , name : string) {

        const source = this.ctx.createBufferSource();
        // const audioBuffer = await fetch(url)
        //     .then(bla => bla.arrayBuffer())
        //     .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer));
        let audioFetchResult = await fetch(url)
        let arrayBuffer = await audioFetchResult.arrayBuffer();
        let audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);
        source.buffer = audioBuffer;
        source.connect(this.ctx.destination);
        console.log(name);
        source.start(this.nextAvailableTimemark);
        this.nextAvailableTimemark += audioBuffer.duration;
    }

    async scheduleAudio(blob : Blob , name : string) {
        const wavBlob = new Blob([blob], { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(blob);
        await this.audioPlay(audioUrl,name);
    }
}