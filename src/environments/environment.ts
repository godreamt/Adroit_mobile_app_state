// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url : "http://adroitconchem.com/api/",
  imageUrl: 'http://adroitconchem.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// keytool -genkey -v -keystore adroit-sales-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias adroit-sales-executive

// What is your first and last name?
//   [Unknown]:  Godreamt technologies
// What is the name of your organizational unit?
//   [Unknown]:  Godreamt technologies
// What is the name of your organization?
//   [Unknown]:  Godreamt
// What is the name of your City or Locality?
//   [Unknown]:  Mangalore
// What is the name of your State or Province?
//   [Unknown]:  Karnataka
// What is the two-letter country code for this unit?
//   [Unknown]:  IN
// Is CN=Godreamt technologies, OU=Godreamt technologies, O=Godreamt, L=Mangalore, ST=Karnataka, C=IN correct?

// password: 12345678

// jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore adroit-sales-key.jks adroit-v1.apk adroit-sales-executive