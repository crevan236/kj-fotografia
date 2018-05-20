
// document.querySelector('head').insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="/assets/css/admin.css">');
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = 'postLoad';
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = '/assets/css/admin.css';
link.media = 'all';
head.appendChild(link);