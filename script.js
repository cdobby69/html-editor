var editorHTML=
'<html>'+
'<head>'+
'<meta charset="utf-8" />'+
'<title></title>'+
'<link href="style.css" type="text/css" rel="stylesheet" />'+
'</head>'+
'<body onload="document.forms[0].ta.focus();document.forms[0].ta.select();">'+
'<form>'+
'<textarea name="ta" wrap="hard" spellcheck="false">'+
'<\/textarea>'+
'</form>'+
'</body>'+
'</html>';

var defaultCode='<h3>Welcome to our online real-time HTML editor!</h3>\n'+
'<p>Type some HTML code in the textarea above, and it will appear in the frame below.</p>\n'+
'<p>Webmaster and SEO tool by <a href="http://www.cloxy.net/" target="_top">Cloxy Tools</a>.</p>';

function init() {
	window.editor.document.open();
	window.editor.document.write(editorHTML);
	window.editor.document.close();
	window.editor.document.forms[0].ta.value=defaultCode;
	window.editor.document.forms[0].ta.onkeyup=update;
	window.editor.document.forms[0].ta.onmouseup=update;
	update();
}

function update() {
	window.result.document.open();
	window.result.document.write(window.editor.document.forms[0].ta.value);
	window.result.document.close();
}
