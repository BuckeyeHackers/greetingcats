
var baseURL = "/assets/img360/";
var cardList = {
    items: [
        {
            textureURL: baseURL + "bg.jpg",
            title: "This is a picture!",
            description: "wow cool!"
        }

    ]
}

module.list = function(){
    return cardList;
}