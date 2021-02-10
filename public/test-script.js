console.log('[This is coming from script tag API]');

const header = $('header.site-header').parent();

header.prepend('<div style="background-color: red; text-align: center">Hello this is coming from the public folder!</div>');