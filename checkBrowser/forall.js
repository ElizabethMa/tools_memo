var ua = navigator.userAgent;
var browser = {
    ie: /msie/i.test(ua),
    ie6: /msie 6/i.test(ua),
    ie7: /msie 7/i.test(ua),
    ie8: /msie 8/i.test(ua),
    ie9: /msie 9/i.test(ua),
    360: /360se/i.test(ua),
    sogou: /;?se.+?MetaSr/i.test(ua),
    maxthon: /Maxthon/i.test(ua),
    tt: /TencentTraveler/i.test(ua),
    ff: /firefox/i.test(ua),
    webkit: /AppleWebKit/i.test(ua),
    opera: /Opera/i.test(ua),
    qqbrowser: /QQBrowser/i.test(ua),
    theworld: /Theworld/i.test(ua)
};
console.log(browser);