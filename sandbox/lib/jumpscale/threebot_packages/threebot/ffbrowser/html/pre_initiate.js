"use strict";

var _dev = false;
var _hostname = "browser.threefold.io";
console.log(_hostname)
var _devhost = "localhost";
var _hostname_part = window.location.hostname.split('.');
var TOP_LEVEL_DOMAIN = typeof _hostname_part[1] != "undefined" ?  _hostname_part[1] : "";

