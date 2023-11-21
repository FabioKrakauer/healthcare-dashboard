import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { IMqttMessage, IMqttServiceOptions, MqttClientService, MqttModule, MqttService } from 'ngx-mqtt';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "https://projeto-healthcare-808d1-default-rtdb.firebaseio.com",
  protocol: "wss",
  port: 1883,
  password: "osNnJHAzSlqnasdZYrsblWAJsJ189OFclTrXWsJ0",
  path: '',
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  @Input() featureName: string = "Nao definido";
  @Input() color: string = "bg-info";
  @Input() icon: string = "";
  @Input() value: string = "";
  @Input() unit: string = "bpm";

  private subscription: Subscription;
  public message: string = "";

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });

    this.unsafePublish("teeeste", "uhum");
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
