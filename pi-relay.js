/*
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */

var barnowl = require('barnowl');
var reelib = require('reelib');


// User-configurable: hostname and port
var options = { hostname: 'pareto.reelyactive.com', port: 80 };

// See barnowl documentation for additional options
var middleware = new barnowl( { enableMixing: true } );
 
// Expect a USB hub to be connected
middleware.bind( { protocol: 'serial', path: 'auto' } ); 

// Detection events are relayed to remote server
middleware.on('visibilityEvent', function(tiraid) {
  if(reelib.tiraid.isValid(tiraid)) {
    var event = { event: 'appearance', tiraid: tiraid };
    reelib.event.postUpdate(options, event, function(err, event, message) {
      if(!err) {
        console.log(reelib.tiraid.toShortString(tiraid));
      }
    });
  }
});

// Reel status events are also relayed to remote server
middleware.on('reelEvent', function(event) {
  reelib.reel.putStatusUpdate(options, event, function() { });
});
