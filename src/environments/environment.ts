// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rest_domain:'http://localhost:3000/api',
  socket_domain:'ws://localhost:8080',
  ghostCount:3,
  vapid_public_key:'BASOYyPGsgr_WHDNVvRTBY-9i1TBNeuE2ROQQGO8Q-Z2GsgzvGmMc7B5LKmzjz1ZeG5xEQypJF648HDkgN8tRGQ',
  googleCliendID:'1080224612439-mijm05g3tdgt7hq4rhah0e5tgv7s9a8e.apps.googleusercontent.com',
  // googleGeoCodeKey:'AIzaSyAvFfV2b1K0hyjU7JRqJJkGXbCp_tZNkyU',
  googleGetCityKey:'AIzaSyBWpfM2qC1qNYLhyxiHTS5pTSMTXXZ00OM'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
