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

$('#createVRButton').click(function (){
    console.log("Clicky click!");
    var userCard = document.getElementById("userCard");
    var xhr = new XMLHttpRequest();
    var messageJSON = {};
    var cardText = document.getElementById("cardText");
    cardText.innerHTML = $("#cardText").val();

    console.log(cardText.value);

    messageJSON.cardDiv = userCard.innerHTML;


    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.responseText)
        } else {
        }
    }
    xhr.open("POST", "/card/create");
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(messageJSON));


})