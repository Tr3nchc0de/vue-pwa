importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("/precache-manifest.c049b8c45de19a0259dc82906de1eaf2.js");


// vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'service-worker.js',
            // ...other Workbox options...
        }
    }
}