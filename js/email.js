var ul = document.getElementsByTagName('ul')[0],
    li = document.createElement('li'),
    a = document.createElement('a'),
    href = 'bWFpbHRvOmhlbGxvQGNocmlzdG9waGVybG9iYXkuY29t';

a.setAttribute('href', atob(href));
a.textContent = 'Email';
li.appendChild(a);
ul.insertBefore(li, ul.firstChild);