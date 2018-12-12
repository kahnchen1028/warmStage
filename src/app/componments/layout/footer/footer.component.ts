import { Component, OnInit, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  message: String;
  subject: WebSocketSubject<any>;
  constructor() { }

  ngOnInit() {

    this.subject = webSocket({ url: 'ws://localhost:5848', protocol: 'echo-protocol' });
    this.subject.subscribe(
      (msg) => this.message = msg.message,
      (err) => { console.log(err) },
      () => console.log('complete'))
  }
  send() {
    this.subject.next({ message: 'some message from client' });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subject.unsubscribe();
  }
}
