import $ from 'jquery';

$('<h1 />')
    .text('hello world jquery')
    .css({
        textAlign: 'center',
        color: 'red'
    })
    .appendTo($('header'));