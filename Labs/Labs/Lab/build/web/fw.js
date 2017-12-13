"use strict";

function MakeFw() {
    var fw = {};


    function my$(shape) {
        return document.getElementById(shape);
    }
    fw.MakeTitle = function (params) {
        var titleObj = my$(params.id);

        var color = params.color || "grey";
        var text = params.text || "Change Your Text Here";
        titleObj.height = params.height;
        titleObj.width = params.width;
        titleObj.style.borderRadius = "0%";
        titleObj.style.border = params.border;
        titleObj.style.textAlign = "center";
        titleObj.style.paddingTop = (params.size / 3) + "px";
        titleObj.style.fontSize = "80px";
        titleObj.style.fontStyle="italic";

        titleObj.changeColor = function (newColor) {

            color = newColor;
            display();
        };

        titleObj.changeText = function (newText) {

            text = newText;

            display();
        };

        function display() {
            titleObj.style.backgroundColor = color;
            titleObj.innerHTML = text;
        }
        display();
        return titleObj;

    };
    
    fw.MakeText = function (params) {
        var textObj = my$(params.id);

        var textcolor = params.color || "grey";
        var text = params.text || "Change Your Text Here";
        textObj.height = params.height;
        textObj.width = params.width;
        textObj.style.borderRadius = "0%";
        textObj.style.border = params.border;
        textObj.style.textAlign = "center";
        textObj.style.paddingTop = (params.size / 3) + "px";
        textObj.style.fontSize = "30px";
        textObj.style.fontStyle="italic";
       
        

        textObj.changeBoxColor = function (newBox) {

           textcolor = newBox;
           
            display();
        };

        textObj.changeTextbox = function (newTbox) {

           text = newTbox;

            display();
        };

        function display() {
            textObj.style.backgroundColor = textcolor;
            textObj.innerHTML = text ;
        }
        display();
        return textObj;

    };
    
    
    
    

    fw.MakeRoom = function (params) {

        // make sure they passed in a parameter object and that this object has an id property
        if (!params || !params.id) {
            alert("MakeRoom must be passed an object with an 'id' property.");
            return;
        }

         //make sure the id property refers to a DOM element
        var roomObj = my$(params.id);
        if (!roomObj) {
           alert("MakeRoom must be passed an object with an 'id' property " +
                    "that references an HTML element.");
            return;
        }

        // set parameter default properties
        params.image = params.image || "pics/room_single.jpg";
        params.imgWidth = params.imgWidth || 400;
        params.imgHeight = params.imgHeight || 500;
        params.padding = params.padding || 12;
        params.roomcapacity = params.roomcapacity || 0;
        params.price = params.price || 0;
        params.backgroundColor = params.backgroundColor || "#CCCCCC";

        // check that numeric property is numeric
        if (isNaN(params.imgWidth)) {
            alert(params.roomcapacity + ": imgWidth must be numeric, setting to 100.");
            params.imgWidth = 100;

        }
        // check that certain properties are numeric
        if (isNaN(params.padding)) {
            alert(params.roomcapacity + ": padding must be numeric, setting to 12.");
            params.padding = 12;
        }
        // check that certain properties are numeric
        if (isNaN(params.price)) {
            alert(params.roomcapacity + ": room capacity must be numeric, setting to 0.");
            params.price = 0;
        }

        // declare private properties of employee object 
        var roomcapacity = params.roomcapacity; // declare private property 
        var image = params.image; // declare private property
        var price = params.price; // declare private property

        // set visual properties of employee object 
        roomObj.style.width = (params.imgWidth + (params.padding * 2)) + "px";
        roomObj.style.backgroundColor = params.backgroundColor;
        roomObj.style.borderRadius = "5px";
        roomObj.style.padding = params.padding + "px";
        roomObj.style.boxSizing = "border-box";
        roomObj.style.textAlign = "center";

        var roomImgObj = document.createElement("img");
        roomImgObj.src = image;
        roomImgObj.style.width = params.imgWidth + "px";
        roomImgObj.style.borderRadius = "5px";
        roomObj.appendChild(roomImgObj);

        var roomNameObj = document.createElement("span");
        roomNameObj.innerHTML = params.fullName;
        roomNameObj.style.fontWeight = "bold";
        roomObj.appendChild(roomNameObj);

        var roomPriceText = document.createElement("span");
        roomObj.appendChild(roomPriceText);
        display();

        roomObj.setImage = function (newImage) {
            image = newImage;
            display();
        };

        roomObj.setRoomCapacity = function (newName) {
            roomcapacity = newName; // update private property
            display();
        };

        roomObj.changePrice = function (changeTonewPrice) {
            price = changeTonewPrice;
            display();
        };

        function formatCurrency(num) {
            return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        }

        function display() {
            roomPriceText.innerHTML = "<br/>Price$: " + formatCurrency(price);
            roomNameObj.innerHTML = "<br/>Room Capacity:" + roomcapacity; // make visual change
            roomImgObj.src = image;
        }

        return roomObj;

    };
    
    
    
    
    
    
    
    fw.MakeRoom2 = function (params) {

        // make sure they passed in a parameter object and that this object has an id property
        if (!params || !params.id) {
            alert("MakeRoom must be passed an object with an 'id' property.");
            return;
        }

         //make sure the id property refers to a DOM element
        var room2Obj = my$(params.id);
        if (!room2Obj) {
           alert("MakeRoom must be passed an object with an 'id' property " +
                    "that references an HTML element.");
            return;
        }

        // set parameter default properties
        params.image = params.image || "pics/room_single.jpg";
        params.imgWidth = params.imgWidth || 400;
        params.imgHeight = params.imgHeight || 400;
        params.padding = params.padding || 12;
        params.room2capacity = params.room2capacity || 0;
        params.newprice = params.newprice || 0;
        params.backgroundColor = params.backgroundColor || "#CCCCCC";

        // check that numeric property is numeric
        if (isNaN(params.imgWidth)) {
            alert(params.room2capacity + ": imgWidth must be numeric, setting to 100.");
            params.imgWidth = 100;

        }
        // check that certain properties are numeric
        if (isNaN(params.padding)) {
            alert(params.room2capacity + ": padding must be numeric, setting to 12.");
            params.padding = 12;
        }
        // check that certain properties are numeric
        if (isNaN(params.newprice)) {
            alert(params.room2capacity + ": room capacity must be numeric, setting to 0.");
            params.newprice = 0;
        }

        // declare private properties of employee object 
        var room2capacity = params.room2capacity; // declare private property 
        var image = params.image; // declare private property
        var newprice = params.newprice; // declare private property

        // set visual properties of employee object 
        room2Obj.style.width = (params.imgWidth + (params.padding * 2)) + "px";
        room2Obj.style.backgroundColor = params.backgroundColor;
        room2Obj.style.borderRadius = "5px";
        room2Obj.style.padding = params.padding + "px";
        room2Obj.style.boxSizing = "border-box";
        room2Obj.style.textAlign = "center";

        var room2ImgObj = document.createElement("img");
        room2ImgObj.src = image;
        room2ImgObj.style.width = params.imgWidth + "px";
        room2ImgObj.style.borderRadius = "5px";
        room2Obj.appendChild(room2ImgObj);

        var room2NameObj = document.createElement("span");
        room2NameObj.innerHTML = params.fullName;
        room2NameObj.style.fontWeight = "bold";
        room2Obj.appendChild(room2NameObj);

        var room2PriceText = document.createElement("span");
        room2Obj.appendChild(room2PriceText);
        display();

        room2Obj.setImage = function (newImage) {
            image = newImage;
            display();
        };

        room2Obj.setRoom2Capacity = function (newRoomName) {
            room2capacity = newRoomName; // update private property
            display();
        };

        room2Obj.changePrice2 = function (change2newPrice) {
            newprice = change2newPrice;
            display();
        };

        function format2Currency(num) {
            return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        }

        function display() {
            room2PriceText.innerHTML = "<br/>Price$: " + format2Currency(newprice);
            room2NameObj.innerHTML = "<br/>Room Capacity:" + room2capacity; // make visual change
            room2ImgObj.src = image;
        }

        return room2Obj;

    };
    

    return fw;
}



    