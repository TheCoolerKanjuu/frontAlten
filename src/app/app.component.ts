import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toast} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, ButtonModule, Ripple],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
  }
}
