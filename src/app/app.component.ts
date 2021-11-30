import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private websocket: WebsocketService,
  ) { }
  ngOnInit(): void {
    this.websocket.connect();
    this.websocket.getMessage().subscribe(data => console.log({ data }));
  }

}
