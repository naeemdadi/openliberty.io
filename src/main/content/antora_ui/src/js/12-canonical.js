console.log("12-canonical.js loaded");
var link = document.createElement('link');
link.rel = 'canonical';
var url = "https://demo2-openlibertyio.mybluemix.net/"+(window.location.pathname+window.location.search).substr(1)
url = url.split('/');
url[4] = 'latest';
url = url.join('/')
link.href = url;
document.head.appendChild(link);