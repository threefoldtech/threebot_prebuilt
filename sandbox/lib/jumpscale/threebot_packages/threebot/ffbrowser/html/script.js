"use strict";
var brand = function brand() {
    var head = document.getElementsByTagName('head')[0];
    if (TOP_LEVEL_DOMAIN == "threefold") {
        var div1 = document.createElement('div');
        div1.id = "loader1";
        var div2 = document.createElement('div');
        div2.id = "loader2";
        var div3 = document.createElement('div');
        div3.id = "loader3";
        var container = document.getElementById("container");
        var parent = container.parentNode;
        parent.insertBefore(div1, container);
        parent.insertBefore(div2, container);
        parent.insertBefore(div3, container);
        var _css = document.createElement('link');
        _css.href = "css/threefold.css";
        _css.rel = "stylesheet";
        _css.type = "text/css";
        head.appendChild(_css);
    } else {
        var _css2 = document.createElement('link');
        _css2.href = "css/jimber.css";
        _css2.rel = "stylesheet";
        _css2.type = "text/css";
        head.appendChild(_css2);
        var _div = document.createElement('div');
        _div.id = "loader1";
        var _container = document.getElementById("container");
        var _parent = _container.parentNode;
        _parent.insertBefore(_div, _container);
    }
    var css = document.createElement('link');
    css.href = "css/common.css";
    css.rel = "stylesheet";
    css.type = "text/css";
    head.appendChild(css);
};
var waterMarkBranding = function waterMarkBranding() {
    if (!_dev) {
        if (TOP_LEVEL_DOMAIN == "jimber" || TOP_LEVEL_DOMAIN == "threefold") {
            document.getElementById('watermark').src = "img/" + TOP_LEVEL_DOMAIN + "/watermark.svg";
        } else {
            var el = document.getElementById('watermark');
            el.parentNode.removeChild(el);
        }
    } else {
        document.getElementById('watermark').src = "img/jimber/watermark.svg";
    }
    setTimeout(function() {
        document.getElementsByTagName('body')[0].style.visibility = "visible";
        ;
    }, 300);
};
brand();
"use strict";
function TouchObject(event) {
    this.identifier = event.identifier;
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    this.force = event.force;
    this.pageX = event.pageX;
    this.pageY = event.pageY;
    this.radiousX = event.radiousX;
    this.radiousY = event.radiousY;
    this.rotatingAngle = event.rotatingAngle;
    this.screenX = event.screenX;
    this.screenY = event.screenY;
}
;"use strict";
function MouseObject(event) {
    this.type = event.type;
    this.clientX = event.x;
    this.clientY = event.y;
}
;"use strict";
var config = {
    apiKey: "AIzaSyDVKLjBpZjQwEhZ-yY-2FFm_M6grw57cDg",
    authDomain: "brokerdemo-8acc3.firebaseapp.com",
    databaseURL: "https://brokerdemo-8acc3.firebaseio.com",
    projectId: "brokerdemo-8acc3",
    storageBucket: "brokerdemo-8acc3.appspot.com",
    messagingSenderId: "722124796660"
};
firebase.initializeApp(config);
var _db = firebase.firestore();
_db.settings({
    timestampsInSnapshots: true
});
"use strict";
var _aliasBrowsing = false;
var _firstBrowseWrongAlias = false;
function browseToAlias(alias, browseFn, firstBrowse) {
    _db.collection("aliases").get().then(function(querySnapshot) {
        var foundMatch = false;
        querySnapshot.forEach(function(doc) {
            if (doc.id === alias) {
                browseFn(doc.data().url);
                foundMatch = true;
            }
        });
        if (!foundMatch && firstBrowse) {
            alert("Alias is not found!");
            _firstBrowseWrongAlias = true;
        } else {
            if (firstBrowse || _firstBrowseWrongAlias) {
                _firstBrowseWrongAlias = false;
                setTimeout(function() {
                    browseToAlias(alias, browseFn, false);
                }, 1500);
            }
        }
    });
}
function addAlias(alias, url, callback) {
    _db.collection("aliases").doc(alias).set({
        url: url
    }).then(function() {
        callback(true);
    }).catch(function(error) {
        callback(false);
        console.error("Error writing document: ", error);
    });
}
"use strict";
function DownloadManager() {
    var _downloads = [];
    this.addDownload = function(id, name) {
        if (document.getElementById('downloads').className.includes('hidden')) {
            toggleSlide('downloads');
        }
        _downloads.push(new Download(id,name));
    }
    ;
    this.removeDownload = function(download) {
        _downloads.splice(array.indexOf(download), 1);
    }
    ;
    this.getDownload = function(id) {
        var download = void 0;
        _downloads.forEach(function(element) {
            if (element.getId() == id) {
                download = element;
            }
        });
        return download;
    }
    ;
    this.updateGui = function() {
        if (document.getElementById('downloads').className.includes('hidden')) {}
        var old_dcnt = document.getElementById("downloadlist");
        var new_dcnt = document.createElement("div");
        new_dcnt.id = 'downloadlist';
        new_dcnt.className = 'card-content';
        _downloads.forEach(function(download) {
            if (download.getState() === "Cancelled") {
                return;
            }
            var ditm = document.createElement('div');
            ditm.className = 'dload-itm';
            var cropper = document.createElement('div');
            cropper.className = 'text-crop';
            ditm.appendChild(cropper);
            var label = document.createElement('div');
            label.className = 'dload-label';
            label.innerHTML = download.getInfo()[1];
            cropper.appendChild(label);
            var rPath = document.createElement('div');
            rPath.className = 'dload-id';
            rPath.innerHTML = download.getInfo()[4];
            rPath.onclick = function() {
                copyToClipboard(download.getInfo()[4]);
            }
            ;
            cropper.appendChild(rPath);
            ditm.appendChild(document.createElement("br"));
            var i = 0;
            var btn_holder = document.createElement('div');
            btn_holder.className = 'h-center';
            if (download.getState() !== "Finished") {
                generateButtons(download.getId()).forEach(function(button) {
                    switch (i) {
                    case 0:
                        button.className = 'pause download-buttons';
                        button.innerHTML = '\u23F8';
                        break;
                    case 1:
                        button.className = 'resume download-buttons';
                        button.innerHTML = '\u25B8';
                        break;
                    case 2:
                        button.className = 'close download-buttons';
                        button.innerHTML = '\u2715';
                        break;
                    }
                    btn_holder.appendChild(button);
                    i++;
                });
                ditm.appendChild(btn_holder);
            } else {
                var finished = document.createElement('span');
                finished.innerText = "Finished";
                ditm.appendChild(finished);
            }
            var pbar = document.createElement('div');
            pbar.className = 'pbar';
            pbar.style.width = download.getInfo()[3];
            ditm.appendChild(pbar);
            new_dcnt.appendChild(ditm);
        });
        old_dcnt.parentNode.replaceChild(new_dcnt, old_dcnt);
    }
    ;
    function generateButtons(id) {
        var pause_btn = document.createElement('button');
        pause_btn.innerText = '\u23F8';
        pause_btn.onclick = function() {
            downloadManager.getDownload(id).pause(id);
        }
        ;
        var resume_btn = document.createElement('button');
        resume_btn.innerText = '\u25B8';
        resume_btn.onclick = function() {
            downloadManager.getDownload(id).resume(id);
        }
        ;
        var cancel_btn = document.createElement('button');
        cancel_btn.innerText = '\u2716';
        cancel_btn.onclick = function() {
            downloadManager.getDownload(id).cancel(id);
        }
        ;
        return [pause_btn, resume_btn, cancel_btn];
    }
    this.processDownloadCommand = function(args) {
        var id = args[1];
        if (args[2] === 'STATE') {
            if (args[3] === 'announce') {
                this.addDownload(id, args[4]);
                this.getDownload(id).setRPath(args[5]);
                this.getDownload(id).setState("Downloading");
            } else {
                var download = this.getDownload(id);
                download.setState(args[3]);
            }
        } else if (args[2] === 'progress') {
            this.getDownload(id).setProgress(args[3] / args[4] * 100);
        }
    }
    ;
}
function Download(id, name) {
    var _id = id;
    var _name = name;
    var _state = "Pending";
    var _progress = 0;
    var _rPath = void 0;
    this.setState = function(state) {
        _state = state;
        downloadManager.updateGui();
    }
    ;
    this.setRPath = function(rPath) {
        _rPath = rPath;
    }
    ;
    this.setProgress = function(progress) {
        _progress = progress;
        downloadManager.updateGui();
    }
    ;
    this.getState = function() {
        return _state;
    }
    ;
    this.getId = function() {
        return _id;
    }
    ;
    this.getName = function() {
        return _name;
    }
    ;
    this.getProgress = function() {
        return _progress;
    }
    ;
    this.getInfo = function() {
        return [_id, _name, _state, Math.ceil(_progress) + "%", _rPath];
    }
    ;
    this.cancel = function(id) {
        var c = new BrowserCommand("w","cancel;" + id);
        c.send();
    }
    ;
    this.pause = function(id) {
        var c = new BrowserCommand("w","pause;" + id);
        c.send();
    }
    ;
    this.resume = function(id) {
        var c = new BrowserCommand("w","resume;" + id);
        c.send();
    }
    ;
}
var downloadManager = new DownloadManager();
"use strict";
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value"in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    }
    ;
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var JimberSettings = function() {
    function JimberSettings() {
        _classCallCheck(this, JimberSettings);
        var form = document.getElementById("jimber_settings_form");
        if (localStorage.getItem("jimber_settings") === null) {
            localStorage.jimber_settings = JSON.stringify({});
        }
        this.generateFormContent().forEach(function(element) {
            form.appendChild(element);
        });
    }
    _createClass(JimberSettings, [{
        key: "generateFormContent",
        value: function generateFormContent() {
            var _this = this;
            var elements = [];
            var pauselabel = document.createElement('label');
            pauselabel.textContent = "Do not render while out of focus";
            pauselabel.setAttribute("for", "pause");
            pauselabel.className = 'checkfield';
            elements.push(pauselabel);
            var pauseinput = document.createElement('input');
            pauseinput.type = "checkbox";
            pauseinput.name = "allow_pause";
            pauseinput.id = "pause";
            pauseinput.checked = this.isPauseAllowed();
            pauselabel.append(pauseinput);
            var pausespan = document.createElement('span');
            pausespan.className = 'checkmark';
            pauselabel.appendChild(pausespan);
            var linebreak = document.createElement('br');
            elements.push(linebreak);
            var compressionRatelabel = document.createElement('label');
            compressionRatelabel.textContent = "Quality ";
            compressionRatelabel.setAttribute("for", "compressionRate");
            elements.push(compressionRatelabel);
            var compressionRateinput = document.createElement('input');
            compressionRateinput.type = "range";
            compressionRateinput.value = JSON.parse(localStorage.jimber_settings).compressionRate || 5;
            compressionRateinput.min = 1;
            compressionRateinput.max = 10;
            compressionRateinput.id = "compression-rate";
            compressionRateinput.name = "compressionRate";
            compressionRateinput.onchange = function() {
                _this.setCompressionRate(compressionRateinput.value % 11);
            }
            ;
            elements.push(compressionRateinput);
            return elements;
        }
    }, {
        key: "isPauseAllowed",
        value: function isPauseAllowed() {
            return JSON.parse(localStorage.jimber_settings).allow_pause == "on";
        }
    }, {
        key: "setCompressionRate",
        value: function setCompressionRate(value) {
            var evt = new CustomEvent('compressionChanged',{
                detail: value
            });
            window.dispatchEvent(evt);
            window.onresize();
            return JSON.parse(localStorage.jimber_settings).compressionRate == value;
        }
    }, {
        key: "saveSettings",
        value: function saveSettings(form) {
            var serialized_form = this.serialize(form);
            serialized_form.compressionRate = document.querySelector('#compression-rate').value;
            localStorage.jimber_settings = JSON.stringify(serialized_form);
        }
    }, {
        key: "serialize",
        value: function serialize(form) {
            if (!form || form.nodeName !== "FORM") {
                return;
            }
            var data;
            var q = "{ ";
            var i, j = [];
            var amount = form.elements.length - 1;
            for (i = amount; i >= 0; i = i - 1) {
                if (form.elements[i].name === "") {
                    continue;
                }
                switch (form.elements[i].nodeName) {
                case 'INPUT':
                    switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'number':
                        q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                    case 'reset':
                    case 'submit':
                        q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                        break;
                    case 'checkbox':
                        if (form.elements[i].checked) {
                            q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                        } else {
                            q += "\"" + form.elements[i].name + "\":\"off\", ";
                        }
                        break;
                    case 'radio':
                        if (form.elements[i].checked) {
                            q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                        }
                        break;
                    }
                    break;
                case 'file':
                    break;
                case 'TEXTAREA':
                    q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                    break;
                case 'SELECT':
                    switch (form.elements[i].type) {
                    case 'select-one':
                        q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].options[j].value) + "\", ";
                            }
                        }
                        break;
                    }
                    break;
                case 'BUTTON':
                    switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q += "\"" + form.elements[i].name + "\":\"" + encodeURIComponent(form.elements[i].value) + "\", ";
                        break;
                    }
                    break;
                }
            }
            q = q.slice(0, -2) + "}";
            return JSON.parse(q);
        }
    }]);
    return JimberSettings;
}();
"use strict";
function JxCommand() {
    var _command;
    var _values;
    this.send = function() {
        _websocket.send(this.toString());
    }
    ;
    this.setContent = function(command, values) {
        this._command = command;
        this._values = values;
    }
    ;
    this.type = {
        CHANGEURL: 0x01,
        CLIPBOARD: 0x02,
        TOUCHEVENT: 0x04,
        SHOWINPUT: 0x05,
        HIDEINPUT: 0x06,
        KEYBOARDEVENT: 0x6b,
        PASTEEVENT: 0x70,
        MOUSEEVENT: 0x6d,
        RESIZEEVENT: 0x03,
        MOUSEWHEELEVENT: 0x77,
        CURSOR: 0x63,
        FOCUSEVENT: 0x66,
        SETCRF: 0x08
    };
}
;JxCommand.prototype.toString = function() {
    var temp = String.fromCharCode(this._command);
    this._values.forEach(function(element) {
        temp += ';' + element;
    });
    return temp;
}
;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
}
: function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
}
;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["./Decoder", "./YUVCanvas"], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        module.exports = factory(require("./Decoder"), require("./YUVCanvas"));
    } else {
        root.Player = factory(root.Decoder, root.YUVCanvas);
    }
}
)(this, function(Decoder, WebGLCanvas) {
    "use strict";
    var nowValue = Decoder.nowValue;
    var Player = function Player(parOptions) {
        var self = this;
        this._config = parOptions || {};
        this.render = true;
        if (this._config.render === false) {
            this.render = false;
        }
        ;this.nowValue = nowValue;
        this._config.workerFile = this._config.workerFile || "Decoder.js";
        if (this._config.preserveDrawingBuffer) {
            this._config.contextOptions = this._config.contextOptions || {};
            this._config.contextOptions.preserveDrawingBuffer = true;
        }
        ;var webgl = "auto";
        if (this._config.webgl === true) {
            webgl = true;
        } else if (this._config.webgl === false) {
            webgl = false;
        }
        ;if (webgl == "auto") {
            webgl = true;
            try {
                if (!window.WebGLRenderingContext) {
                    webgl = false;
                } else {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext("webgl");
                    if (!ctx) {
                        webgl = false;
                    }
                    ;
                }
                ;
            } catch (e) {
                webgl = false;
            }
            ;
        }
        ;this.webgl = webgl;
        if (this.webgl) {
            this.createCanvasObj = this.createCanvasWebGL;
            this.renderFrame = this.renderFrameWebGL;
        } else {
            this.createCanvasObj = this.createCanvasRGB;
            this.renderFrame = this.renderFrameRGB;
        }
        ;var lastWidth;
        var lastHeight;
        var onPictureDecoded = function onPictureDecoded(buffer, width, height, infos) {
            self.onPictureDecoded(buffer, width, height, infos);
            var startTime = nowValue();
            if (!buffer || !self.render) {
                return;
            }
            ;self.renderFrame({
                canvasObj: self.canvasObj,
                data: buffer,
                width: width,
                height: height
            });
            if (self.onRenderFrameComplete) {
                self.onRenderFrameComplete({
                    data: buffer,
                    width: width,
                    height: height,
                    infos: infos,
                    canvasObj: self.canvasObj
                });
            }
            ;
        };
        if (!this._config.size) {
            this._config.size = {};
        }
        ;this._config.size.width = this._config.size.width || 200;
        this._config.size.height = this._config.size.height || 200;
        if (this._config.useWorker) {
            var worker = new Worker("Decoder.js");
            this.worker = worker;
            worker.addEventListener('message', function(e) {
                var data = e.data;
                if (data.consoleLog) {
                    return;
                }
                ;onPictureDecoded.call(self, new Uint8Array(data.buf,0,data.length), data.width, data.height, data.infos);
            }, false);
            worker.postMessage({
                type: "Broadway.js - Worker init",
                options: {
                    rgb: !webgl,
                    memsize: this.memsize,
                    reuseMemory: this._config.reuseMemory ? true : false
                }
            });
            if (this._config.transferMemory) {
                this.decode = function(parData, parInfo) {
                    worker.postMessage({
                        buf: parData.buffer,
                        offset: parData.byteOffset,
                        length: parData.length,
                        info: parInfo
                    }, [parData.buffer]);
                }
                ;
            } else {
                this.decode = function(parData, parInfo) {
                    var copyU8 = new Uint8Array(parData.length);
                    copyU8.set(parData, 0, parData.length);
                    worker.postMessage({
                        buf: copyU8.buffer,
                        offset: 0,
                        length: parData.length,
                        info: parInfo
                    }, [copyU8.buffer]);
                }
                ;
            }
            ;if (this._config.reuseMemory) {
                this.recycleMemory = function(parArray) {
                    worker.postMessage({
                        reuse: parArray.buffer
                    }, [parArray.buffer]);
                }
                ;
            }
        } else {
            this.decoder = new Decoder({
                rgb: !webgl
            });
            this.decoder.onPictureDecoded = onPictureDecoded;
            this.decode = function(parData, parInfo) {
                self.decoder.decode(parData, parInfo);
            }
            ;
        }
        ;if (this.render) {
            this.canvasObj = this.createCanvasObj({
                contextOptions: this._config.contextOptions
            });
            this.canvas = this.canvasObj.canvas;
        }
        ;this.domNode = this.canvas;
        lastWidth = this._config.size.width;
        lastHeight = this._config.size.height;
    };
    Player.prototype = {
        onPictureDecoded: function onPictureDecoded(buffer, width, height, infos) {},
        recycleMemory: function recycleMemory(buf) {},
        createCanvasWebGL: function createCanvasWebGL(options) {
            var canvasObj = this._createBasicCanvasObj(options);
            canvasObj.contextOptions = options.contextOptions;
            return canvasObj;
        },
        createCanvasRGB: function createCanvasRGB(options) {
            var canvasObj = this._createBasicCanvasObj(options);
            return canvasObj;
        },
        _createBasicCanvasObj: function _createBasicCanvasObj(options) {
            options = options || {};
            var obj = {};
            var width = options.width;
            if (!width) {
                width = this._config.size.width;
            }
            ;var height = options.height;
            if (!height) {
                height = this._config.size.height;
            }
            ;obj.canvas = document.createElement('canvas');
            obj.canvas.style.backgroundColor = "#323232";
            return obj;
        },
        renderFrameWebGL: function renderFrameWebGL(options) {
            var canvasObj = options.canvasObj;
            var width = options.width || canvasObj.canvas.width;
            var height = options.height || canvasObj.canvas.height;
            if (canvasObj.canvas.width !== width || canvasObj.canvas.height !== height || !canvasObj.webGLCanvas) {
                canvasObj.canvas.width = width;
                canvasObj.canvas.height = height;
                canvasObj.webGLCanvas = new WebGLCanvas({
                    canvas: canvasObj.canvas,
                    contextOptions: canvasObj.contextOptions,
                    width: width,
                    height: height
                });
                canvasObj.webGLCanvas.canvas = canvasObj.canvas;
            }
            ;var ylen = width * height;
            var uvlen = width / 2 * (height / 2);
            canvasObj.webGLCanvas.drawNextOutputPicture({
                yData: options.data.subarray(0, ylen),
                uData: options.data.subarray(ylen, ylen + uvlen),
                vData: options.data.subarray(ylen + uvlen, ylen + uvlen + uvlen)
            });
            var self = this;
            self.recycleMemory(options.data);
        },
        renderFrameRGB: function renderFrameRGB(options) {
            var canvasObj = options.canvasObj;
            var width = options.width || canvasObj.canvas.width;
            var height = options.height || canvasObj.canvas.height;
            if (canvasObj.canvas.width !== width || canvasObj.canvas.height !== height) {
                canvasObj.canvas.width = width;
                canvasObj.canvas.height = height;
            }
            ;var ctx = canvasObj.ctx;
            var imgData = canvasObj.imgData;
            if (!ctx) {
                canvasObj.ctx = canvasObj.canvas.getContext('2d');
                ctx = canvasObj.ctx;
                canvasObj.imgData = ctx.createImageData(width, height);
                imgData = canvasObj.imgData;
            }
            ;imgData.data.set(options.data);
            ctx.putImageData(imgData, 0, 0);
            var self = this;
            self.recycleMemory(options.data);
        }
    };
    return Player;
});
"use strict";
function startStream(playerId, wsUri, useWorker, webgl, reconnectMs) {
    if (!window.player) {
        window.player = new Player({
            useWorker: useWorker,
            webgl: webgl,
            size: {
                width: 840,
                height: 480
            }
        });
        var playerElement = document.getElementById(playerId);
        playerElement.appendChild(window.player.canvas);
        window.debugger = new debug(playerId);
    }
    var separator = new Uint8Array([0, 0, 0, 1]);
    function addSeparator(buffer) {
        var tmp = new Uint8Array(4 + buffer.byteLength);
        tmp.set(separator, 0);
        tmp.set(new Uint8Array(buffer), 4);
        return tmp.buffer;
    }
    var ws = new WebSocket(wsUri);
    ws.binaryType = 'arraybuffer';
    ws.onopen = function(e) {
        checkState();
        ws.onmessage = function(msg) {
            window.player.decode(new Uint8Array(addSeparator(msg.data)));
            if (window.debugger)
                window.debugger.nal(msg.data.byteLength);
        }
        ;
    }
    ;
    ws.onclose = function(e) {
        if (reconnectMs > 0) {
            setTimeout(function() {
                startStream(playerId, wsUri, useWorker, webgl, reconnectMs);
            }, reconnectMs);
        }
    }
    ;
}
function avgFPS(length) {
    this.index = 0;
    this.sum = 0;
    this.length = length;
    this.buffer = Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0);
    this.tick = function(tick) {
        this.sum -= this.buffer[this.index];
        this.sum += tick;
        this.buffer[this.index] = tick;
        if (++this.index == this.length)
            this.index = 0;
        return Math.floor(this.sum / this.length);
    }
    ;
    this.avg = function() {
        return Math.floor(this.sum / this.length);
    }
    ;
    return this;
}
function toggleHide(id) {
    var el = document.getElementById(id);
    if (el.style.display == 'block') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
}
function toggleSlide(id) {
    var el = document.getElementById(id);
    if (el.className.includes('anchor-hidden')) {
        el.className = el.className.replace('anchor-hidden', 'anchor-shown');
    } else if (el.className.includes('anchor-shown')) {
        el.className = el.className.replace('anchor-shown', 'anchor-hidden');
    }
}
function debug(playerId) {
    this.started = +new Date();
    this.fps = new avgFPS(50);
    this.last = +new Date();
    this.nals = 0;
    this.frames = 0;
    this.total = 0;
    this.secondTotal = 0;
    this.playerWidth = 0;
    this.playerHeight = 0;
    this.bandwidthArray = [];
    this.ele = document.getElementById('statis');
    window.player.onPictureDecoded = function(buffer, width, height, infos) {
        window.debugger.frame(width, height);
    }
    ;
    this.nal = function(bytes) {
        this.nals++;
        this.total += bytes;
        this.secondTotal += bytes;
    }
    ;
    this.frame = function(w, h) {
        this.playerWidth = w;
        this.playerHeight = h;
        this.frames++;
        var now = +new Date()
          , delta = now - window.debugger.last;
        this.fps.tick(delta);
        this.last = now;
    }
    ;
    setInterval(function() {
        var mib = (window.debugger.total / 1048576).toFixed(2);
        var date = new Date(null);
        date.setSeconds((+new Date() - window.debugger.started) / 1000);
        var avg = (window.debugger.total * 8 / 1000 / (date.getTime() / 1000)).toFixed(2);
        var dur = date.toISOString().substr(11, 8);
        statis.innerHTML = '[Resolution: ' + window.debugger.playerWidth + 'x' + window.debugger.playerHeight + '], [' + Math.floor(1 / window.debugger.fps.avg() * 1000) + ' fps], [Curr. Bandwidth Use: ' + (window.debugger.secondTotal * 8 / 1000).toFixed(2) + ' Kbits/s], [' + avg + ' Kbits/s Session Average], [Total: ' + mib + ' MiB], [' + window.debugger.nals + ' NAL units], [' + window.debugger.frames + ' frames in ' + dur + ']';
        window.debugger.secondTotal = 0;
    }, 1000);
}
"use strict";
var _websocket;
var remoteOpen = false;
var _clipboard = "";
var jxCommand = new JxCommand();
function wsConnect(location) {
    if (_websocket) {
        _websocket.close(3001);
    } else {
        var url = location;
        _websocket = new WebSocket(url);
        _websocket.onopen = function() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.getElementById("fakeinput").oninput = oninputMobile;
            } else {
                document.getElementById("fakeinput").focus();
                document.getElementById("fakeinput").oninput = function() {
                    Paste();
                }
                ;
            }
            remoteOpen = true;
            checkState();
        }
        ;
        _websocket.onmessage = function(msg) {
            if (msg.data instanceof Blob) {
                var imageUrl = URL.createObjectURL(msg.data);
                var img = document.querySelector("#photo");
                img.src = imageUrl;
                img.onload = function() {
                    if (img.width != 0) {
                        var tmpCanvas = document.createElement('canvas');
                        var context = tmpCanvas.getContext('2d');
                        tmpCanvas.width = img.width;
                        tmpCanvas.height = img.height;
                        context.drawImage(img, 0, 0);
                        var myData = context.getImageData(0, 0, img.width, img.height);
                        render(myData);
                    }
                }
                ;
            } else {
                var res = msg.data.split(";");
                if (res[0] == "c") {
                    changeCursor(res[1]);
                } else if (msg.data.charCodeAt(0) == 2) {
                    _clipboard = res[1];
                } else if (msg.data.charCodeAt(0) == 5) {
                    showInput();
                } else if (msg.data.charCodeAt(0) == 6) {
                    hideInput();
                }
            }
        }
        ;
        _websocket.onclose = function(evt) {
            if (evt.code == 3001) {
                console.log('ws closed');
                _websocket = null;
            } else {
                _websocket = null;
                console.log('ws connection errorm retry in 5');
                setTimeout(function() {
                    wsConnect(location);
                }, 5000);
            }
            remoteOpen = false;
        }
        ;
        _websocket.onerror = function(evt) {
            if (_websocket.readyState == 1) {
                console.log('ws normal error: ' + evt.type);
            }
        }
        ;
    }
}
window.addEventListener('compressionChanged', function(e) {
    this.setCompressionRate(e.detail);
});
document.onkeydown = function(evt) {
    if (_searching)
        return;
    evt = evt || window.event;
    var c = new JxCommand();
    c.setContent(c.type.KEYBOARDEVENT, [evt.which, '0', translateModifiers(evt)]);
    c.send();
    if (evt.which == 9) {
        cancelEvent(evt);
    }
}
;
document.onkeyup = function(evt) {

    if (_searching)
        return;
    if (_clipboard != "") {
        copyToClipboard(_clipboard);
        _clipboard = "";
    }
    evt = evt || window.event;
    var c = new JxCommand();
    c.setContent(c.type.KEYBOARDEVENT, [evt.which, '1', translateModifiers(evt)]);
    c.send();

    if (evt.which == 229) {
        cancelEvent(evt);
    }
}
;
document.onkeypress = function(evt, nocancel) {
    if (_searching)
        return;
    evt = evt || window.event;
    var c = new JxCommand();
    c.setContent(c.type.KEYBOARDEVENT, [evt.which, '2', translateModifiers(evt)]);
    c.send();
    if (!nocancel) {
        cancelEvent(evt);
    }
}
;
document.oncontextmenu = function(evt) {
    var c = new JxCommand();
    c.setContent(c.type.MOUSEEVENT, [btoa(JSON.stringify(new MouseObject(evt)))]);
    c.send();
    cancelEvent(evt);
    return false;
}
;
var _focused = true;
window.onblur = function() {
    _focused = false;
    var c = new JxCommand();
    c.setContent(c.type.FOCUSEVENT, ['lost']);
    if (jimberSettings.isPauseAllowed())
        c.send();
}
;
window.onfocus = function() {
    _focused = true;
    var c = new JxCommand();
    c.setContent(c.type.FOCUSEVENT, ['focus']);
    c.send();
}
;
function translateModifiers(event) {
    var modifiers = 0;
    if (event.shiftKey)
        modifiers |= 0x02000000;
    if (event.ctrlKey)
        modifiers |= 0x04000000;
    if (event.altKey)
        modifiers |= 0x08000000;
    if (event.metaKey)
        modifiers |= 0x10000000;
    return modifiers;
}
function copyToClipboard(text) {
    var aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    var worked = document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("fakeinput").focus();
}
function setUpRemote() {
    var canvas = document.getElementsByTagName('canvas')[0];
    var _mousedown = false;
    window.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
    canvas.addEventListener('mousedown', function(event) {
        closeout(event);
        if (event.which == 3)
            return false;
        _searching = false;
        var c = new JxCommand();
        c.setContent(c.type.MOUSEEVENT, [btoa(JSON.stringify(new MouseObject(event)))]);
        c.send();
        cancelEvent(event);
        _mousedown = true;
    }, false);
    canvas.addEventListener('mouseup', function(event) {
        if (event.which == 3)
            return false;
        release();
        var c = new JxCommand();
        c.setContent(c.type.MOUSEEVENT, [btoa(JSON.stringify(new MouseObject(event)))]);
        c.send();
        cancelEvent(event);
        _mousedown = false;
    }, false);
    canvas.addEventListener('mousemove', function(event) {
        var c = new JxCommand();
        var upOrDown = _mousedown ? "d" : "u";
        c.setContent(c.type.MOUSEEVENT, [btoa(JSON.stringify(new MouseObject(event)))]);
        c.send();
        cancelEvent(event);
    }, false);
    canvas.addEventListener('wheel', function(event) {
        var c = new JxCommand();
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        var deltaX = event.deltaX;
        var deltaY = event.deltaY;
        if (isFirefox) {
            deltaX = deltaX * 15;
            deltaY = deltaY * 15;
        }
        c.setContent(c.type.MOUSEWHEELEVENT, [event.layerX, event.layerY, event.clientX, event.clientY, deltaX, deltaY, translateModifiers(event)]);
        c.send();
    }, false);
    function onTouch(event) {
        var object = {};
        object["type"] = "touch";
        object["name"] = name;
        object["time"] = new Date().getTime();
        object["event"] = event.type;
        object["changedTouches"] = [];
        object["stationaryTouches"] = [];
        for (var i = 0; i < event.changedTouches.length; ++i) {
            object.changedTouches.push(new TouchObject(event.changedTouches[i]));
        }
        for (var i = 0; i < event.targetTouches.length; ++i) {
            var targetTouch = event.targetTouches[i];
            if (object.changedTouches.findIndex(function(touch) {
                return touch.identifier === targetTouch.identifier;
            }) === -1) {
                object.stationaryTouches.push(new TouchObject(event.changedTouches[i]));
            }
        }
        var c = new JxCommand();
        c.setContent(c.type.TOUCHEVENT, [btoa(JSON.stringify(object))]);
        c.send();
        if (typeof lastTouch !== 'undefined' && object["event"] === "touchend") {
            var diff = new Date() - lastTouch["time"];
            if (diff < 250) {
                var elem = document.getElementById("fakeinput");
                elem.value = "";
                elem.setAttribute('style', 'display:none;');
            }
        }
        if (object["event"] === "touchstart") {
            lastTouch = object;
        }
        cancelEvent(event);
    }
    canvas.addEventListener("touchstart", onTouch, false);
    canvas.addEventListener("touchend", onTouch, false);
    canvas.addEventListener("touchcancel", onTouch, false);
    canvas.addEventListener("touchmove", onTouch, false);
}
function changeCursor(cursor) {
    switch (parseInt(cursor)) {
    case 0:
        document.body.style.cursor = "default";
        break;
    case 2:
        document.body.style.cursor = "crosshair";
        break;
    case 3:
        document.body.style.cursor = "wait";
        break;
    case 4:
        document.body.style.cursor = "text";
        break;
    case 5:
        document.body.style.cursor = "n-resize";
        break;
    case 6:
        document.body.style.cursor = "e-resize";
        break;
    case 7:
        document.body.style.cursor = "ne-resize";
        break;
    case 8:
        document.body.style.cursor = "se-resize";
        break;
    case 9:
        document.body.style.cursor = "move";
        break;
    case 10:
        document.body.style.cursor = "none";
        break;
    case 11:
        document.body.style.cursor = "row-resize";
        break;
    case 12:
        document.body.style.cursor = "col-resize";
        break;
    case 13:
        document.body.style.cursor = "pointer";
        break;
    case 14:
        document.body.style.cursor = "not-allowed";
        break;
    case 15:
        document.body.style.cursor = "help";
        break;
    case 16:
        document.body.style.cursor = "progress";
        break;
    case 17:
        document.body.style.cursor = "pointer";
        break;
    case 18:
        document.body.style.cursor = "pointer";
        break;
    case 19:
        document.body.style.cursor = "pointer";
        break;
    case 20:
        document.body.style.cursor = "pointer";
        break;
    case 21:
        document.body.style.cursor = "pointer";
        break;
    default:
        document.body.style.cursor = "default";
    }
}
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    event.returnValue = false;
    event.cancelBubble = true;
}
function Paste() {
    var value = document.getElementById("fakeinput").value;
    var c = new JxCommand();
    c.setContent(c.type.PASTEEVENT, [value]);
    c.send();
    document.getElementById("fakeinput").value = "";
}
var _softDontHide = false;
var _typing = false;
function showInput() {
    if (!_typing) {
        var elem = document.getElementById("fakeinput");
        elem.setAttribute('style', 'display:inline;');
        elem.focus();
        _softDontHide = true;
    }
    _typing = false;
}
var oninputMobile = function oninputMobile(event) {
    _typing = true;
    var fakeinput = document.getElementById("fakeinput");
    var x = fakeinput.value;
    x = x.replace("^", "");
    var charAdded = x.charAt(x.length - 1);
    if (event.inputType == "deleteContentBackward") {
        charAdded = "Backspace";
        document.onkeydown({
            'which': 8
        });
        document.onkeyup({
            'which': 8
        });
        fakeinput.value = "^";
        setTimeout(function() {
            fakeinput.setSelectionRange(fakeinput.value.length, fakeinput.value.length);
        }, 50);
        return;
    }
    var obj = {
        "altKey": false,
        "charCode": 0,
        "code": "",
        "ctrlKey": false,
        "key": charAdded,
        "keyCode": 97,
        "location": 0,
        "metaKey": false,
        "repeat": false,
        "shiftKey": false,
        "string": charAdded,
        "time": 1528881386861,
        "type": "keydown",
        "which": charAdded.charCodeAt(0)
    };
    document.onkeypress(obj, true);
    fakeinput.value = "^";
    fakeinput.focus();
    fakeinput.setSelectionRange(fakeinput.value.length, fakeinput.value.length);
};
function setCompressionRate(compressionRate) {
    console.log('remoteclient set compression rate ' + compressionRate);
    var c = new JxCommand();
    c.setContent(c.type.SETCRF, [compressionRate]);
    c.send();
    return false;
}
"use strict";
var _websocketBrowser;
var browserOpen = false;
var _connectionHasBeenOpen = false;
var _reloadOnFocus = false;
function wsBrowserConnect(location) {
    if (_websocketBrowser) {
        _websocketBrowser.close(3001);
    } else {
        var url = location;
        _websocketBrowser = new WebSocket(url);
        _websocketBrowser.onopen = function() {
            _connectionHasBeenOpen = true;
            browserOpen = true;
            var c = new BrowserCommand("a",btoa(navigator.userAgent));
            c.send();
            browseToUrl(true);
            setTimeout(function() {
                window.onresize();
                sentCookies();
                jimberSettings.setCompressionRate(document.querySelector('#compression-rate').value);
            }, 1500);
        }
        ;
        _websocketBrowser.onmessage = function(msg) {
            var res = msg.data.split(";");
            if (res[0] == "u") {
                changeUrl(res[1]);
            } else if (res[0] == "t") {
                changeTitle(res[1]);
            } else if (res[0] == "o") {
                openTab(res[1]);
            } else if (res[0] == "k") {
                storeCookie(res[1]);
            } else if (res[0] == "l") {
                deleteCookie(res[1]);
            } else if (res[0] == "a") {
                alert(atob(res[1]));
            } else if (res[0] == "m") {
                confirmDialog(atob(res[1]));
            } else if (res[0] == "i") {
                changeIcon(res[1]);
            } else if (res[0] == "w") {
                downloadManager.processDownloadCommand(res);
            }
        }
        ;
        _websocketBrowser.onclose = function(evt) {
            if (_connectionHasBeenOpen && _focused) {
                window.location.reload(true);
            }
            if (evt.code == 3001) {
                _websocketBrowser = null;
            } else {
                _websocketBrowser = null;
                setTimeout(function() {
                    wsBrowserConnect(location);
                }, 5000);
            }
            browserOpen = false;
        }
        ;
        _websocketBrowser.onerror = function(evt) {
            if (_websocketBrowser.readyState == 1) {
                console.log('ws normal error: ' + evt.type);
            }
        }
        ;
    }
}
function BrowserCommand(commandString, value) {
    var commandString = commandString;
    var value = value;
    this.send = function() {
        _websocketBrowser.send(commandString + ";" + value);
    }
    ;
}
;var resizeTimer;
window.onresize = function() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var c = new BrowserCommand("r",width + ";" + height);
    c.send();
    var c = new JxCommand();
    c.setContent(c.type.RESIZEEVENT, [width, height]);
    c.send();
    if (!_softDontHide) {
        var elem = document.getElementById("fakeinput");
        elem.value = "";
        elem.setAttribute('style', 'display:none;');
    }
    _softDontHide = false;
}
;
function changeUrl(url) {
    if (!_aliasBrowsing) {
        history.pushState({}, undefined, "#" + url);
    }
}
function changeTitle(title) {
    document.title = title;
}
function changeIcon(url) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link')
      , oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = 'data:image/png;base64,' + url;
    if (oldLink) {
        head.removeChild(oldLink);
    }
    head.appendChild(link);
}
function openTab(url) {
    if (url.startsWith("http://notab-") || url.startsWith("https://notab-")) {
        history.replaceState(undefined, undefined, "#" + url.replace("http://notab-", "http://").replace("https://ontab-", "https://"));
        browseToUrl(false);
        return;
    }
    window.open("http://" + _hostname + "/#" + url, '_blank');
}
function confirmDialog(text) {
    var value = confirm(text);
    console.log("value for confirm is " + value);
    var intValue = value ? 1 : 0;
    var c = new BrowserCommand("m",intValue);
    c.send();
}
function storeCookie(cookieB64) {
    var storedCookies;
    if (localStorage.getItem("cookies") === null) {
        storedCookies = {};
    } else {
        storedCookies = JSON.parse(localStorage.getItem("cookies"));
    }
    var cookiedecoded = atob(cookieB64);
    var cookieName = cookiedecoded.split(";")[0];
    storedCookies[cookieName] = cookiedecoded;
    localStorage.setItem("cookies", JSON.stringify(storedCookies));
}
function deleteCookie(cookieB64) {
    var storedCookies;
    if (localStorage.getItem("cookies") === null) {
        storedCookies = {};
    } else {
        storedCookies = JSON.parse(localStorage.getItem("cookies"));
    }
    var cookiedecoded = atob(cookieB64);
    var cookieName = cookiedecoded.split(";")[0];
    if (storedCookies[cookieName] !== null) {
        delete storedCookies[cookieName];
    }
    localStorage.setItem("cookies", JSON.stringify(storedCookies));
}
function sentCookies() {
    if (localStorage.getItem("cookies") !== null) {
        var storedCookies = JSON.parse(localStorage.getItem("cookies"));
        for (var cookieName in storedCookies) {
            var rawCookie = storedCookies[cookieName];
            var c = new BrowserCommand("k",btoa(rawCookie));
            c.send();
        }
    }
    var c = new BrowserCommand("d");
    c.send();
}
window.onhashchange = function() {
    browseToUrl(false);
}
;
function browseToUrl(firstbrowse) {
    var url = window.location.hash.substr(1);
    if (url === "") {
        url = "http://www.google.be";
    }
    var sendBrowse = function sendBrowse(url) {
        var c = new BrowserCommand("b",url + ";0");
        c.send();
    };
    if (url.charAt(0) == "$") {
        _aliasBrowsing = true;
        browseToAlias(url.substring(1), sendBrowse, firstbrowse);
    } else {
        sendBrowse(url);
        if (firstbrowse) {
            setTimeout(function() {
                browseToUrl(false);
            }, 1500);
        }
    }
    firstbrowse = false;
}
var _searching = false;
window.onkeydown = function(e) {
    if (e.keyCode == 70 && e.ctrlKey) {
        cancelEvent(e);
        var el = document.getElementById("search");
        if (el.style.display == 'block') {
            _searching = false;
        } else {
            el.style.display = 'block';
            _searching = true;
        }
        document.getElementById("search").select().focus();
        return false;
    }
    if (e.which == 27) {
        _searching = false;
        document.getElementById("search").style.display = 'none';
    }
}
;
function searchFocus() {
    _searching = true;
}
function search() {
    var c = new BrowserCommand("s",document.getElementById("search").value);
    c.send();
}
function next() {
    var c = new BrowserCommand("n","");
    c.send();
}
function previous() {
    var c = new BrowserCommand("p","");
    c.send();
}
function initialSize() {
    var c = new BrowserCommand("r",100 + ";" + 100);
    c.send();
    var c = new JxCommand();
    c.setContent(c.type.RESIZEEVENT, [100, 100]);
}
"use strict";
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var playingAudio = false;
var nextTime = 0;
function scheduleBuffers() {
    while (audioBuffer.length) {
        var buffer = audioBuffer.shift();
        var source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        if (nextTime == 0 || _addLatency) {
            console.log("Adding latency");
            nextTime = audioCtx.currentTime + 0.03;
        }
        source.start(nextTime);
        nextTime += source.buffer.duration;
    }
    ;playingAudio = false;
}
"use strict";
var _websocketAudio;
var audioOpen = false;
var audioBuffer = new Array();
var _lastSoundPacket = Date.now();
var _addLatency = false;
function wsAudioConnect(location) {
    if (_websocketAudio) {
        _websocketAudio.close(3001);
    } else {
        var url = location;
        _websocketAudio = new WebSocket(url);
        _websocketAudio.binaryType = 'arraybuffer';
        _websocketAudio.onopen = function() {
            audioOpen = true;
            checkState();
        }
        ;
        _websocketAudio.onmessage = function(msg) {
            _addLatency = false;
            if (Date.now() - _lastSoundPacket > 100) {
                _addLatency = true;
            }
            _lastSoundPacket = Date.now();
            audioCtx.decodeAudioData(msg.data, function(buffer) {
                audioBuffer.push(buffer);
                if (!playingAudio) {
                    playingAudio = true;
                    scheduleBuffers();
                }
            }, function(e) {
                console.log("Error with decoding audio data" + e.err);
            });
        }
        ;
        _websocketAudio.onclose = function(evt) {
            if (evt.code == 3001) {
                _websocketAudio = null;
            } else {
                _websocketAudio = null;
                setTimeout(function() {
                    wsAudioConnect(location);
                }, 5000);
            }
            audioOpen = false;
        }
        ;
        _websocketAudio.onerror = function(evt) {
            if (_websocketAudio.readyState == 1) {
                console.log('ws normal error: ' + evt.type);
            }
        }
        ;
    }
}
"use strict";
function checkState() {
    if (_websocketBrowser != null && _websocket != null) {
        if (browserOpen && remoteOpen && audioOpen && window.debugger.total > 0) {
            liftCurtain();
        } else {
            setTimeout(function() {
                checkState();
            }, 2000);
        }
    }
}
;function liftCurtain() {
    if (!_dev) {
        if (TOP_LEVEL_DOMAIN == "threefold") {
            document.getElementById("loader1").style.animation = 'fadeOut 1s forwards';
            document.getElementById("loader2").style.animation = 'fadeOut 1s forwards';
            document.getElementById("loader3").style.animation = 'fadeOut 1s forwards';
            fade();
            return;
        } else if (TOP_LEVEL_DOMAIN == "jimber") {
            fade();
        } else {
            fade();
        }
    } else {
        fade();
    }
}
;var fade = function fade() {
    document.getElementById("loader1").style.animation = 'fadeOut 1s forwards';
    document.getElementById("logotype").style.animation = 'slideFromRight 1000ms ease-out 1s forwards, slideUp 1000ms ease-in 2s forwards';
    document.getElementById("upper").style.animation = 'slideUp 1000ms ease-in 2s forwards';
    document.getElementById("slogan").style.animation = 'slideFromLeft 1000ms ease-out 1s forwards, slideDown 1000ms ease-in 2s forwards';
    document.getElementById("lower").style.animation = 'slideDown 1000ms ease-in 2s forwards';
};
"use strict";
waterMarkBranding();
function httpGetAsync(theUrl, callback) {
    if (!_dev) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText, false);
        }
        ;
        xmlHttp.open("GET", theUrl, true);
        xmlHttp.send(null);
    } else {
        callback("", true);
    }
}
var jimberSettings = new JimberSettings();
function saveSettings() {
    jimberSettings.saveSettings(document.getElementById("jimber_settings_form"));
}
var startEnv = function startEnv(response, dev) {
    if (!dev) {
        response = JSON.parse(response);
        wsConnect("wss://" + _hostname + "/ws/" + response.cid + "/remote");
        wsBrowserConnect("wss://" + _hostname + "/ws/" + response.cid + "/browser");
        startStream('container', "wss://" + _hostname + "/ws/" + response.cid + "/stream", true, 'auto', 2000);
        wsAudioConnect("wss://" + _hostname + "/ws/" + response.cid + "/audio");
        setUpRemote();
        checkState();
    } else {
        wsConnect("ws://" + _devhost + ":6661");
        wsBrowserConnect("ws://" + _devhost + ":6662");
        startStream('container', "ws://" + _devhost + ":8081", true, 'auto', 2000);
        wsAudioConnect("ws://" + _devhost + ":8082");
        setUpRemote();
        checkState();
    }
};
httpGetAsync("https://" + _hostname + "/container", startEnv);
onload = adding;
var body = document.body;
var dragme = document.getElementById('hamburger');
var button = document.getElementById('burger-btn');
var body_t = document.body;
var dragme_t = document.getElementById('hamburger');
var cs = dragme.style;
var dragme2 = document.getElementById('toolbox');
var dragme2_t = document.getElementById('toolbox');
var win = document.getElementById('settings');
var cs2 = dragme2.style;
var y = 0;
var x = 0;
var xoff = 0;
var yoff = 0;
var moving = false;
var isMobile = false;
if (/Mobi|Android/i.test(navigator.userAgent)) {
    win.style.position = 'relative';
    isMobile = true;
}
cs.top = '100px';
cs.left = window.innerWidth - 100 + 'px';
cs2.top = '180px';
cs2.left = window.innerWidth - 100 + 'px';
function adding() {
    button.addEventListener('mousedown', hold, false);
    button.addEventListener('mouseup', click, false);
    if (!isMobile) {
        win.addEventListener('mousedown', hold2, false);
    }
    document.addEventListener('mouseup', release, false);
    document.addEventListener('mouseenter', release, false);
    button.addEventListener('touchstart', hold, false);
    document.addEventListener('touchend', release, false);
    window.addEventListener('orientationchange', function() {
        this.setTimeout(snap, 100);
    }, false);
}
function hold() {
    document.addEventListener('mousemove', move, true);
    document.addEventListener('touchmove', tmove, true);
}
function hold2(e) {
    if (!e.target.closest('#compression-rate')) {
        win.addEventListener('mousemove', move2, true);
        document.addEventListener('mousemove', move2, true);
    }
    xoff = e.clientX - win.style.left.slice(0, -2);
    yoff = e.clientY - win.style.top.slice(0, -2);
}
function release() {
    setTimeout(function() {
        moving = false;
    }, 100);
    document.removeEventListener('mousemove', move, true);
    win.removeEventListener('mousemove', move2, true);
    document.removeEventListener('mousemove', move2, true);
    document.removeEventListener('touchmove', tmove, true);
    if (cs2.display == 'none') {
        snap();
    }
}
function closeout(e) {
    if (!e.target.closest('#settings')) {
        document.getElementById('settings').style.display = 'none';
    }
}
function snap() {
    if (cs.left.slice(0, -2) > window.innerWidth / 2) {
        x = window.innerWidth - 100;
    } else {
        x = 20;
    }
    if (cs.top.slice(0, -2) > window.innerHeight - 320) {
        y = window.innerHeight - 320;
    }
    if (cs.top.slice(0, -2) < 20) {
        y = 20;
    }
    updatePos(x, y);
}
function updatePos(x, y) {
    cs.top = y + 'px';
    cs.left = x + 'px';
    cs2.top = y + 80 + 'px';
    cs2.left = cs.left;
}
function click() {
    if (!moving) {
        if (cs2.display == 'none') {
            cs2.display = 'flex';
        } else {
            cs2.display = 'none';
        }
    }
}
function move(event) {
    moving = true;
    var epY = event.clientY;
    var epX = event.clientX;
    cs.position = "absolute";
    y = epY - dragme.offsetHeight / 2;
    x = epX - dragme.offsetWidth / 2;
    updatePos(x, y);
}
var _firstMove2 = true;
function move2(event) {
    if (_firstMove2) {
        yoff = win.style.top;
        xoff = win.style.left;
    }
    _firstMove2 = false;
    var epY = event.clientY;
    var epX = event.clientX;
    win.style.position = "absolute";
    y = epY - yoff;
    x = epX - xoff;
    win.style.top = y + 'px';
    win.style.left = x + 'px';
}
function tmove(touch) {
    moving = true;
    var epY = touch.touches[0].clientY;
    var epX = touch.touches[0].clientX;
    cs.position = "absolute";
    y = epY - dragme.offsetHeight / 2;
    x = epX - dragme.offsetWidth / 2;
    updatePos(x, y);
}
cs.position = "";
