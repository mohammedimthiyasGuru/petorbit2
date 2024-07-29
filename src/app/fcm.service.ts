import { Injectable } from '@angular/core';
import { PushNotifications, Token, PushNotificationSchema, ActionPerformed } from '@capacitor/push-notifications';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor() {
    this.init();
  }

  async init() {
    // Request permission to use push notifications
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with the push notification service
        PushNotifications.register
      } else {
        // Show some error
        console.error('Push notification permission not granted');
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        console.log('Push registration success, token: ' + token.value);

        // // Optionally use the FCM plugin to set the token (optional)
        // FCM.getToken().then((result: { token: any; }) => {
        //   console.log('FCM Token: ', result.token);
        // });
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.error('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
}
