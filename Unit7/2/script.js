$(function(){
    //a
    console.log($('p:contains("Primero") + ul li:not(:empty)'));
    console.log($('ul:first li:not(:empty)'));

    //b
    console.log($('li:contains("Sistemas Informáticos")'));
    console.log($('ul:first li:not(:empty):eq(2)'));

    //c
    console.log($('li:contains("Sistemas Informáticos")').next());
    console.log($('ul:first li:eq(2) + li'));

    //d
    console.log($('ul:first li:eq(2) ~ li:not(:empty)'));


    //e
    console.log($('[href]'));


    //f
    console.log($(':not([href])'));


    //g
    console.log($(':contains("mod")'));


    //h
    console.log($(':contains("mod")'));


});
