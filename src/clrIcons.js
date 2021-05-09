var test = document.getElementsByClassName('clr-test-icon');
var testCount = document.getElementsByClassName('clr-test-icon').length;
for (var i = 0; i < testCount; i++) {
    test[i].innerHTML += '<svg class="clrIcon"><use xlink:href="./dist/spritemap.svg#sprite-test"></use></svg>'
}