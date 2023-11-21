import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

export const env = {
    production: true,
      hmr: false,
      http: {
          apiUrl: '<https://api.myweb.com>',
      },
      mqtt: {
          server: 'https://projeto-healthcare-808d1-default-rtdb.firebaseio.com',

          protocol: "wss",
          port: 1883
      }
  };
const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: env.mqtt.server,
    port: env.mqtt.port,
    protocol: "ws",
    password: "osNnJHAzSlqnasdZYrsblWAJsJ189OFclTrXWsJ0",
    path: '',
};

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [
        MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ],
})
export class CardModule { }