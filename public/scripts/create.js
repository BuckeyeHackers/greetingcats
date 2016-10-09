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
        $('.card')[0].setAttribute('class', 'card ' + this.innerHTML);
    }
})

$('#createVRButton').click(function (){
    var userCard = document.getElementById("userCard");
    var xhr = new XMLHttpRequest();
    var messageJSON = {};
    var cardText = document.getElementById("cardText");
    cardText.innerHTML = $("#cardText").val();

    console.log(cardText.value);

    messageJSON.cardDiv = userCard.innerHTML;
    console.log(messageJSON);



    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var link = 'http://greetingcats.tech/' + xhr.responseText;
          var a = $('#share-link');
          a.text(link);
          a.attr('href', link);
          new QRCode(document.getElementById("qrCode"), "http://greetingcats.tech/" + xhr.responseText);
        } else {
        }
    }
    xhr.open("POST", "/card/create");
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(messageJSON));


})

link = function(url){
  var anchor = document.createElement("a");
  anchor.setAttribute('id', 'share-link');
  anchor.innerHTML = 'http://greetingcats.tech/' + url;
  anchor.setAttribute('href', 'http://greetingcats.tech/' + url);
  anchor.setAttribute('target', '_blank');
  return anchor;
}

$('.ribbon').click( function(){
  $('.flip-container')[0].classList.toggle("flip")
})
$('.ribbon-left').click( function(){
  $('.flip-container')[0].classList.toggle("flip")
})
