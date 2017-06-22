# tools_memo

上报错误

```
Utils.report = function (id, description ) {
    description.user = {}; // 添加用户信息
    var description_str = JSON.stringify(description);

    return $.ajax(url, {
        method: 'PUT',
        headers: Utils.getHeaders(true),
        data: JSON.stringify({
            "issue": {
                "notes": description_str
            }
        })
    });
}

Utils.reportError = function ( description ) {
    // error id
    Utils.report(193, description);
}


```
js 收集报错信息

```
window.onerror = function(message, source, lineno, colno, error) {
    Utils.reportError({
        message: message, 
        source: source, 
        lineno: lineno, 
        colno: colno, 
        error: error
    });
};
```