pi-relay
========


![pi-relay](http://reelyactive.github.io/images/piHub-connected.jpg)


Prerequisites
-------------

You will require a [Raspberry Pi](https://www.raspberrypi.org) (preferably a Pi 3) and our [minimal starter kit](http://shop.reelyactive.com/products/starterkit-min).  See our [Make a Raspberry Pi Hub](http://reelyactive.github.io/make-a-pi-hub.html) tutorial for detailed step-by-step instructions.


Installation
------------

Clone the repo.

    npm install

(This step is fully documented in the [tutorial](http://reelyactive.github.io/make-a-pi-hub.html))


Operation
---------

Run the program from the root of the repository:

    node pi-relay

(This step is also fully documented in the [tutorial](http://reelyactive.github.io/make-a-pi-hub.html))


How do I know it's working?
---------------------------

The program is configured by default to send the data to our [Pareto platform](https://pareto.reelyactive.com).  A three-month trial is included with the [starter kit](http://getpareto.com/starter-kit/)  Log in to view the real-time data from the dashboard.

Prefer to stream the data to a different server?  Simply update the _hostname_ in the pi-relay.js file.


License
-------

MIT License

Copyright (c) 2016 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

