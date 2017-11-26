Welcome to home24artist Application
===================

This application is a SPA(single page application) and was written using Angular 5 framework.
https://youtu.be/e2K2ddEg184

Requirements
-------------

To run this application will be necessary some applications:

 - Npm 5.5.1 or superior;
 - Angular CLI 1.6.0-rc.0

## Running the application ##

To run the application with Service Workers management of cache, it will be necessary to deploy the application with the command **ng build --prod** or just use the application already deployed in the **dist** folder
To run, use some web server, like http-server to host the application.

## Features ##

 - Listing artists from bandsintown API
 - Listing events from bandsintown API
 - Retrieving the likes, official website and genre of the artist from Facebook
 - Filtering events
 - Calendar feature, shows each event in days of the calendar
 - Custom animations using Angular native modules
 - Google maps API integration, showing the location of the event on map 
 - Cache management using Service Workers library

## Deployment Strategy ##

After the build done, a good strategy of hosting the application will be host it on an EC2 container, and this container be hosted on a CloudFront, which will provide scalability to the application, redirection to the nearest server and other features.

