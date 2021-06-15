
"use strict";


/*function showNumder (parent, child) {
    let parentNodes = document.querySelector(parent),
        childNodes = parentNodes.querySelectorAll(child),
        childlist = Array.prototype.slice.call(childNodes);


    for (let item of childlist) {
        item.innerHTML = `${childlist.indexOf(item) + 1} / ${childlist.length}`;
    }
}

showNumder('#parent', '.child');*/

$('.parent').each(function() {
    let parent = $(this),
        childNodes = parent.find('.child'),
        childlist = Array.prototype.slice.call(childNodes);

    for (let item of childlist) {
        item.innerHTML = `${childlist.indexOf(item) + 1} / ${childlist.length}`;
    }
});
