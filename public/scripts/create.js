$('li').click( function (){
    var siblings = this.parentNode.getElementsByTagName("li");
    for(var i = 0, len = siblings.length; i < len; i++){
        siblings[i].removeAttribute('class');
    }
    this.setAttribute('class', 'selected');
    if(this.parentNode.getAttribute('class') != 'templates'){
        $('textarea')[0].setAttribute('class', this.innerHTML);
    }
    else{
        $('.image')[0].setAttribute('class', 'image ' + this.innerHTML);
    }
})