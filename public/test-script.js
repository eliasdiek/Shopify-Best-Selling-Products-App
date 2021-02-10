console.log('[This is coming from script tag API]');

const header = $('header.site-header').parent();

const makeHeader = data => {
    header.prepend(`<div style="background-color: red; text-align: center">${data}</div>`);
}

fetch('https://cors-anywhere.herokuapp.com/https://54977972cbf7.ngrok.io/api/products?shop=yourdev.myshopify.com')
    .then(res => res.json())
    .then(data => {
        makeHeader(data.data);
    })
    .catch(error => console.log(error));