import {uiGmapGoogleMapApiProvider} from 'angular-google-maps';

export function googleMapConfig(uiGmapGoogleMapApiProvider) {
    'ngInject';
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}
