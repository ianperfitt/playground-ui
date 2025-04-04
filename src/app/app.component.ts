import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from './playground.service';
import { Logger } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  playgroundServiceText: string = '';

  constructor(
    private playgroundService : PlaygroundService,
    private logger: Logger
  ) {}

  ngOnInit(): void {
    this.logger.log('Fetching playgroundServiceText via playgroundService !');
    this.playgroundService.getPlaygroundServiceText()
      .subscribe({
        next: (data) => {
          this.playgroundServiceText = data;
        },
        error:  (err) => {
          // this.logger.error(err);
        }
    });
  }
}
