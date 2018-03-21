// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC8Qmw-Ov_bWj9tEEW_ibO3Px_xYNcPZo0',
    authDomain: 'becat-mobile.firebaseapp.com',
    databaseURL: 'https://becat-mobile.firebaseio.com',
    projectId: 'becat-mobile',
    storageBucket: 'becat-mobile.appspot.com',
    messagingSenderId: '1064837644879'
  }
};
