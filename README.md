# ngx-chips ionic `--prod` issue

## steps to repreduce
```sh
  git clone 
  npm install
```

```
npm start
```

open `www/index.html` in browser

``` ST
core.es5.js:1020 ERROR Error: Uncaught (in promise): TypeError: __decorate is not a function
TypeError: __decorate is not a function
    at Object.<anonymous> (ngx-chips.bundle.js:2923)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:2936)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:779)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:1145)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:3116)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:2923)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:2936)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:779)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:1145)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at Object.<anonymous> (ngx-chips.bundle.js:3116)
    at __webpack_require__ (ngx-chips.bundle.js:65)
    at c (polyfills.js:3)
    at Object.reject (polyfills.js:3)
    at NavControllerBase._fireError (nav-controller-base.js:322)
    at NavControllerBase._failed (nav-controller-base.js:310)
    at nav-controller-base.js:365
    at t.invoke (polyfills.js:3)
    at Object.onInvoke (core.es5.js:3890)
    at t.invoke (polyfills.js:3)
    at r.run (polyfills.js:3)
    at polyfills.js:3

```


minifiyed stacktrace

``` ST
ERROR Error: Uncaught (in promise): TypeError: i is not a function
TypeError: i is not a function
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at Object.<anonymous> (0.js:1)
    at e (0.js:1)
    at c (polyfills.js:3)
    at Object.reject (polyfills.js:3)
    at e._fireError (vendor.js:1)
    at e._failed (vendor.js:1)
    at vendor.js:1
    at t.invoke (polyfills.js:3)
    at Object.onInvoke (vendor.js:1)
    at t.invoke (polyfills.js:3)
    at r.run (polyfills.js:3)
    at polyfills.js:3
b	@	vendor.js:1
t.handleError	@	vendor.js:1
e.handleError	@	vendor.js:1
next	@	vendor.js:1
e.object.r	@	vendor.js:1
e.__tryOrUnsub	@	vendor.js:1
e.next	@	vendor.js:1
e._next	@	vendor.js:1
e.next	@	vendor.js:1
e.next	@	vendor.js:1
e.emit	@	vendor.js:1
(anonymous)	@	vendor.js:1
t.invoke	@	polyfills.js:3
r.run	@	polyfills.js:3
t.runOutsideAngular	@	vendor.js:1
onHandleError	@	vendor.js:1
t.handleError	@	polyfills.js:3
r.runGuarded	@	polyfills.js:3
(anonymous)	@	polyfills.js:3
n.microtaskDrainDone	@	polyfills.js:3
o	@	polyfills.js:3
Promise resolved (async)		
r	@	polyfills.js:3
t.scheduleTask	@	polyfills.js:3
onScheduleTask	@	polyfills.js:3
t.scheduleTask	@	polyfills.js:3
r.scheduleTask	@	polyfills.js:3
r.scheduleMicroTask	@	polyfills.js:3
f	@	polyfills.js:3
c	@	polyfills.js:3
(anonymous)	@	polyfills.js:3
window.webpackJsonp	@	vendor.js:1
(anonymous)	@	0.js:1

```


<hr>


This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

