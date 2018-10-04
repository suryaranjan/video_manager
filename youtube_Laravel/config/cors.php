<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS
    |--------------------------------------------------------------------------
    |
    | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
    | to accept any value.
    |
    */
   
//    'supportsCredentials' => true,
//    'allowedOrigins' => ['*'],
//    'allowedOriginsPatterns' => [],
//    'allowedHeaders' => ['Content-Type', 'X-Requested-With'],
//    'allowedMethods' => ['*'],
//     //'Access-Control-Allow-Credentials' => true,
//    //'Access-Control-Max-Age' => 3600,
//    'exposedHeaders' => [],
//    
//    'maxAge' => 3600,

];
// return [
//        'corsFilter' => [
//            
//            'cors' => [
//                // restrict access to
//                'Origin' => ['http://127.0.0.1:8000'],
//                'Access-Control-Allow-Origin'=>['http://127.0.0.1:8000'],
//                'Access-Control-Allow-Headers'=>['origin'],
//                'Access-Control-Request-Method' => ['POST', 'GET'],
//                // Allow only POST and PUT methods
//                'Access-Control-Request-Headers' => [''],
//                // Allow only headers 'X-Wsse'
//                'Access-Control-Allow-Credentials' => true,
//                // Allow OPTIONS caching
//                'Access-Control-Max-Age' => 3600,
//                // Allow the X-Pagination-Current-Page header to be exposed to the browser.
//                'Access-Control-Expose-Headers' => [''],
//            ],
//        ],
//    ];