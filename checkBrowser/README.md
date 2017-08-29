# tools_memo

## for ie demo

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>上海信易信息科技股份有限公司</title>
    <!-- Bootstrap -->
    <link href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="libs/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <!-- upload files -->
    <link href="libs/jquery-file-upload-9.18.0/css/jquery.fileupload.css" rel="stylesheet">
    <!-- your css -->
    <link href="index.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="libs/html5shiv.min.js"></script>
      <script src="libs/respond.min.js"></script>
    <![endif]-->
    <noscript><link rel="stylesheet" href="libs/jquery-file-upload-9.18.0/css/jquery.fileupload-noscript.css"></noscript>
  </head>
```

## 上报错误

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