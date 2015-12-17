# Flat Load

Flat Load is an overly eager module loader for flattening modules for autoloading.

What this means is that Flat Load will require all of the modules within a directory and then flatten them into a single dimensional array.

This module is mostly usable for things like autoloading or registering routes, models, or other modules in your app.

## Installation

```shell
npm install --save flat-load
```

## Use

To use flat load to load all of the modules in a directory:

```js
var loader = require('flat-load');

loader(`${__dirname}/models`);
```

Since flat load returns a flat array of modules, this can be used to do work like registering routers with express:

```js
var loader = require('flat-load');
var app = require('express').app();

loader(`${__dirname}/controllers`).forEach((controller) => {
  app.use(controller);
});
```

## License

The MIT License (MIT)

Copyright (c) 2015 Ryan Tablada

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
