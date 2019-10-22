(function() {
  // namespace
  window.Fruum = window.Fruum || {};

  // load script
  function load_script(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    // IE
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          if (callback) callback();
        }
      };
    } else {
      script.onload = function() {
        if (callback) callback();
      };
      script.onerror = function() {
        if (callback) callback();
      };
    }
    script.src = url;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  }

  // on document ready
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  // helpers
  function normalizeUrl(url) {
    url = url || '';
    if (url.length && url[url.length - 1] !== '/') {
      url += '/';
    }
    return url;
  }

  function is_fruum_link(node) {
    if (!node || !node.getAttribute) return;
    var href = node.getAttribute('href');
    if (href && href.indexOf('#fruum:') == 0) {
      return href.replace('#fruum:', '');
    }
  }

  function is_fruum_attr(node) {
    if (!node || !node.getAttribute) return;
    return node.getAttribute('fruum-link');
  }

  function remove_class(el, className) {
    if (!el) return;
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function add_class(el, className) {
    if (!el) return;
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  function has_class(el, className) {
    if (!el) return false;
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

  function outer_height(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }

  function bind_event(selector, event, fn) {
    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, function(el, i) {
      el.addEventListener(event, fn);
    });
  }

  // initialize loader on document ready
  ready(function() {
    // loader html (replaced by server)
    var preview_html = '<div id="fruum-preview">  <div class="fruum-nav-about fruum-js-fixed">    powered by fruum  </div>  <div class="fruum-header fruum-js-fixed">    <div class="fruum-nav-header"></div>    <div style="width: 100px;">      <div class="fruum-placeholder"></div>    </div>    <div class="fruum-nav-subtitle" style="width: 70%;min-width: 200px;">      <div class="fruum-placeholder fruum-small-text"></div>    </div>    <div class="fruum-nav-filters"></div>  </div>  <div class="fruum-content fruum-js-varying">    <div class="fruum-content-item">      <div class="fruum-avatar-placeholder"></div>      <div class="fruum-item-text">        <div style="width: 200px;">          <div class="fruum-placeholder"></div>        </div>        <div style="width: 95%;min-width: 230px;">          <div class="fruum-placeholder fruum-small-text"></div>        </div>      </div>    </div>    <div class="fruum-content-item">      <div class="fruum-avatar-placeholder"></div>      <div class="fruum-item-text">        <div style="width: 230px;">          <div class="fruum-placeholder"></div>        </div>        <div style="width: 100%;min-width: 230px;">          <div class="fruum-placeholder fruum-small-text"></div>        </div>        <div style="width: 40%;min-width: 140px;">          <div class="fruum-placeholder fruum-small-text"></div>        </div>      </div>    </div>    <div class="fruum-content-item">      <div class="fruum-avatar-placeholder"></div>      <div class="fruum-item-text">        <div style="width: 160px;">          <div class="fruum-placeholder"></div>        </div>        <div style="width: 100%;min-width: 230px;">          <div class="fruum-placeholder fruum-small-text"></div>        </div>        <div style="width: 70%;min-width: 140px;">          <div class="fruum-placeholder fruum-small-text"></div>        </div>      </div>    </div>    <div class="fruum-content-item">      <div class="fruum-avatar-placeholder"></div>      <div class="fruum-item-text">        <div style="width: 210px;">          <div class="fruum-placeholder"></div>        </div>        <div style="width: 95%;min-width: 230px;">          <div class="fruum-placeholder fruum-small-text"></div>        </div>      </div>    </div>  </div>  <div class="fruum-interactions-footer fruum-js-fixed">    <div class="fruum-avatar-placeholder"></div>  </div></div>';

    window.fruumSettings = window.fruumSettings || {};
    // replaced by server
    window.fruumSettings.app_id = '{{app_id}}';
    window.fruumSettings.fullpage_url = normalizeUrl('');
    window.fruumSettings.pushstate = Boolean(parseInt('0'));
    window.fruumSettings.sso = Boolean(parseInt('1'));

    // force fullpage
    if (window.fruumSettings.container && window.fruumSettings.fullpage == undefined) {
      window.fruumSettings.fullpage = true;
    }
    // force history
    if (window.fruumSettings.fullpage && window.fruumSettings.history == undefined) {
      window.fruumSettings.history = true;
    }
    // force restore
    if (window.fruumSettings.history && window.fruumSettings.restore == undefined) {
      window.fruumSettings.restore = true;
    }

    // add css
    (function() {
      // this is replaced by server
      var css = '#fruum-preview{position:fixed !important;z-index:9999 !important;background-color:#fcfcfc !important;font-size:8px !important;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:0;height:100%;top:0;right:0;-webkit-transition:width 0.3s;transition:width 0.3s}#fruum-preview.fruum-peak{width:70px;box-shadow:0 0 4px rgba(0,0,0,0.3) !important;overflow:hidden}#fruum-preview.fruum-clicked{width:69em;max-width:99%;box-shadow:0 0 4px rgba(0,0,0,0.3) !important}#fruum-preview .fruum-nav-about{position:relative;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;height:2.4em;width:100%;min-width:250px;color:#9a969a;font-size:1.25em;line-height:2.4em;background-color:#E5E4E5;padding-left:1.6em}#fruum-preview.fruum-fullpage{position:relative !important;width:100%;max-width:100%;margin:0 auto;height:100%;-webkit-transition:none;transition:none;background-color:#FCFCFC}#fruum-preview.fruum-fullpage .fruum-nav-about{text-align:right;padding-right:1.6em}#fruum-preview.fruum-fullpage .fruum-content{background-color:rgba(0,0,0,0.02)}#fruum-preview .fruum-small-text{font-size:.37em;line-height:0em}#fruum-preview .fruum-header{background-color:#FCFCFC;border-bottom:1px solid #EDEDED;font-size:1.75em;padding-top:.57em;padding-left:1.14em;padding-right:1.14em}#fruum-preview .fruum-nav-header{height:2.28em;margin-bottom:.57em}#fruum-preview .fruum-nav-filters{height:1.14em;margin-top:.285em;margin-bottom:.285em}#fruum-preview .fruum-nav-subtitle{margin-top:.1425em}#fruum-preview .fruum-interactions-footer{min-width:230px;background-color:#FCFCFC;border-top:1px solid #EDEDED;height:6em;padding:1em 2em}#fruum-preview .fruum-interactions-footer .fruum-avatar-placeholder{float:right;width:4em;height:4em}#fruum-preview .fruum-content{min-width:330px;font-size:1.75em;padding:1.14em}#fruum-preview .fruum-content-item{display:block;width:100%;overflow:hidden;clear:both;margin-bottom:1.14em}#fruum-preview .fruum-item-text{float:left;display:block;margin-left:1.14em}#fruum-preview .fruum-avatar-placeholder{float:left;width:3.705em;height:3.705em;background-color:#EDEDED;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%}#fruum-preview .fruum-placeholder{display:inline-block;height:1em;width:100%;background-color:#EDEDED;border-radius:.5em;-moz-border-radius:.5em;-webkit-border-radius:.5em}';
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      (document.head || document.getElementsByTagName('head')[0]).appendChild(style);
    })();

    // add html
    (function() {
      // this is replaced by server
      var div = document.createElement('div');
      div.innerHTML = preview_html;
      var frag = document.createDocumentFragment();
      var child;
      while (child = div.firstChild) { // eslint-disable-line
        frag.appendChild(child);
      }
      var parent;
      if (window.fruumSettings.container) {
        parent = document.querySelectorAll(window.fruumSettings.container)[0];
      } else {
        parent = (document.body || document.getElementsByTagName('body')[0]);
      }
      if (parent) parent.appendChild(frag);
    })();

    var el_preview = document.getElementById('fruum-preview');
    var loaded = false;

    function resize_loader(el) {
      if (!el) return;

      var el_varying = el_preview.querySelector('.fruum-js-varying'),
          el_fixed = el_preview.querySelectorAll('.fruum-js-fixed'),
          el_varying_style = getComputedStyle(el_varying);

      var fixed_height = 0;
      for (var i = 0; i < el_fixed.length; ++i) {
        fixed_height += outer_height(el_fixed[i]);
      }
      el_varying.style.height = (
        outer_height(el) - fixed_height -
        parseInt(el_varying_style.marginTop) -
        parseInt(el_varying_style.marginBottom)
      ) + 'px';
    }
    setTimeout(function() {
      resize_loader(el_preview);
    }, 0);

    function launch_fruum() {
      if (!loaded) {
        loaded = true;
        resize_loader(el_preview);
        if (window.fruumSettings.container) {
          add_class(el_preview, 'fruum-fullpage');
        } else {
          add_class(el_preview, 'fruum-clicked');
        }
        // this is replaced by server
        //window.fruumSettings.fruum_host = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

        // check for bot in fullpage mode
        if (window.fruumSettings.container &&
            window.fruumSettings.fullpage_url &&
            /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
        ) {
          // load static HTML
          var request = new XMLHttpRequest(),
              docid = window.fruumSettings.view_id;
          request.open('GET',
            window.fruumSettings.fruum_host +
            '/_/robot/' + window.fruumSettings.app_id +
            (docid ? '/v/' + docid : ''), true);

          request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
              var el = document.querySelectorAll(window.fruumSettings.container)[0];
              el.innerHTML = request.responseText;
            }
          };
          request.send();
        } else {
          // append fruum
          load_script(window.fruumSettings.fruum_host +
            '/_/get/js/' + window.fruumSettings.app_id);
        }
      }
    }

    // expose launcher
    window.Fruum.launch = function(doc_id) {
      if (window.Fruum.api) {
        window.Fruum.api.open(doc_id);
      } else {
        window.fruumSettings.view_id = doc_id;
        launch_fruum();
      }
    };

    function process_click(event, link) {
      if (link) {
        event && event.preventDefault();
        window.Fruum.launch(link);
      }
    }
    function process_mouseover(event, link) {
      if (link) {
        var el = document.getElementById('fruum');
        if (el && !has_class(el, 'fruum-hide')) return;
        resize_loader(el_preview);
        add_class(el_preview, 'fruum-peak');
      }
    }
    function process_mouseout(event, link) {
      if (link) {
        remove_class(el_preview, 'fruum-peak');
      }
    }
    function detectViewID() {
      var viewid = '';
      if (window.location.hash &&
          window.location.hash.indexOf('#v/') == 0 &&
          window.fruumSettings.history &&
          !window.fruumSettings.pushstate
      ) {
        viewid = window.location.hash.replace('#v/', '');
      } else if (window.fruumSettings.pushstate &&
               window.fruumSettings.fullpage_url &&
               window.fruumSettings.history &&
               window.location.href.indexOf(window.fruumSettings.fullpage_url + 'v/') == 0
      ) {
        viewid = window.location.href.replace(
          window.fruumSettings.fullpage_url + 'v/', ''
        );
      }
      return {
        id: viewid.split('/')[0],
        jumpto: viewid.split('/')[1],
      };
    }

    // bind event
    bind_event('a[href]', 'click', function(e) {
      process_click(e, is_fruum_link(this));
    });
    bind_event('[fruum-link]', 'click', function(e) {
      process_click(e, is_fruum_attr(this));
    });
    if (!window.fruumSettings.fullpage) {
      bind_event('a[href]', 'mouseover', function(e) {
        process_mouseover(e, is_fruum_link(this));
      });
      bind_event('a[href]', 'mouseout', function(e) {
        process_mouseout(e, is_fruum_link(this));
      });
      bind_event('[fruum-link]', 'mouseover', function(e) {
        process_mouseover(e, is_fruum_attr(this));
      });
      bind_event('[fruum-link]', 'mouseout', function(e) {
        process_mouseout(e, is_fruum_attr(this));
      });

      // check for fruum hastag on url
      if (window.fruumSettings.restore) {
        var detect_view = detectViewID();
        window.fruumSettings.view_id = detect_view.id;
        window.fruumSettings.jumpto = detect_view.jumpto;
        if (window.fruumSettings.view_id) {
          launch_fruum();
        } else if (window.sessionStorage && window.sessionStorage.getItem) {
          // check session storage
          try {
            if (window.sessionStorage.getItem('fruum:open:' + window.fruumSettings.app_id) | 0) {
              launch_fruum();
            }
          } catch (err) {}
        }
      }
    } else {
      var detect_view = detectViewID(); // eslint-disable-line
      window.fruumSettings.view_id = detect_view.id;
      window.fruumSettings.jumpto = detect_view.jumpto;
      launch_fruum();
    }
  });
})();
