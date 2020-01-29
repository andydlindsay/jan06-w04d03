# W04D03 AJAX

### To Do
- [x] Use AJAX to retrieve data from a remote server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a remote server
- [x] All without refreshing the browser

### AJAX
- Asynchronous JavaScript and XML
- eXtensible Markup Language
- invented by Microsoft
- outlook desktop application

- polling

- refresh


```js
$.ajax({
  url: 'www.example.com/users',
  method: 'GET',
  dataType: 'json',
  success: (data) => { console.log(data); },
  error: (err) => { console.error(err); }
});
```
```js
const fn = (arg1, arg2, arg3, arg4, arg5, arg6) => {

};
const fn2 = (options) => {
  const { arg1, arg2 } = options;
};
fn(37, true,,, false )
```



JSON
XML

{
  "name": "Andy"
}

<name>Andy</andy>
















.