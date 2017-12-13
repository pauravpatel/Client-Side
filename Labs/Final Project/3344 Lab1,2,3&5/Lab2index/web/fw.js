"use strict";

function MakeProductFw() {
    var fw = {};

    function my$(code){
        return document.getElementById(code);
    }

    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    function formatNumber(num) {
        num = parseFloat(num);
        return num.toLocaleString("en-US", {minimumFractionDigits: 0});
    }    
    

    fw.MakeRoom = function (params) {
        // make sure they passed in a parameter object and that this object has an code property
        if (!params || !params.code) {
            //alert("MakeBook must be passed an object with an 'code' property.");
            return;
        }
        // make sure the code property refers to a DOM element
        var roomObj = $(params.code);
        if (!roomObj) {
            //alert("MakeBook must be passed an object with an 'code' property " + "that references an HTML element.");
            return;
        }
        // set parameter default properties
        params.image = params.image || "pics/room_deluxe.png";
        params.imgWidth = params.imgWidth || 160;
        params.padding = params.padding || 12;
        params.title = params.title || "C# Programming";
        params.desc = params.desc || "unknown desc";
        params.price = params.price || 0;
        params.backgroundColor = params.backgroundColor || "#CCCCCC";
        // check that numeric property is numeric
        if (isNaN(params.imgWidth)) {
            alert(params.title + ": imgWidth must be numeric, setting to 100.");
            params.imgWidth = 100;
        }
        // check that certain properties are numeric
        if (isNaN(params.padding)) {
            alert(params.title + ": padding must be numeric, setting to 12.");
            params.padding = 12;
        }
        // check that certain properties are numeric
        if (isNaN(params.price)) {
            alert(params.title + ": price must be numeric, setting to 0.");
            params.price = 0;
        }

        // declare private properties of room object 
        var code = params.code;
        var title = params.title; // declare private property 
        var image = params.image; // declare private property
        var price = params.price; // declare private property
        var desc = params.desc; // declare private property

        // set visual properties of book object 
        roomObj.style.width = (params.imgWidth + (params.padding * 5)) + "px";
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

        var RoomCodeObj = document.createElement("span");
        RoomCodeObj.innerHTML = params.code;
        roomObj.appendChild(RoomCodeObj);

        var RoomTitleObj = document.createElement("span");
        RoomTitleObj.innerHTML = params.title;
        roomObj.appendChild(RoomTitleObj);
        

        var RoomPriceObj = document.createElement("span");
        RoomPriceObj.innerHTML = formatNumber(params.price);
        RoomPriceObj.style.fontWeight = "bold";
        roomObj.appendChild(RoomPriceObj);
        
        
        var RoomDescObj = document.createElement("span");
        RoomDescObj.innerHTML = params.desc;
        roomObj.appendChild(RoomDescObj);
        display();
        
        roomObj.setImage = function (newImage) {
            image = newImage;
            display();
        };
        roomObj.setTitle = function (newTitle) {
            title = newTitle; // update private property
            display();
        };

        roomObj.changePrice = function (priceChangeRatio) {
            price = parseFloat(priceChangeRatio);
            display();
        };



        function display() {
            RoomCodeObj.innerHTML = "<br/>Code: " + code;
            RoomPriceObj.innerHTML = "<br/>Price: " + formatCurrency(price);
            RoomTitleObj.innerHTML = "<br/>Title: " + title; // make visual change
            RoomDescObj.innerHTML = "<br/>Description: " + desc;
            roomImgObj.src = image;
        }
        return roomObj;
    };
    fw.MakeFlightPrice = function (params) {
        // make sure they passed in a parameter object and that this object has an code property
        if (!params || !params.code) {
            //alert("MakeFlightPrice must be passed an object with an 'code' property.");
            return;
        }
        // make sure the code property refers to a DOM element
        var fpObj = my$(params.code);
        if (!fpObj) {
            //alert("MakeFlightPrice must be passed an object with an 'code' property " + "that references an HTML element.");
            return;
        }
        params.padding = params.padding || 12;
        params.description = params.description || "Flight Management";
        params.version = params.version || "Air Bus";
        params.price = params.price || 3000;
        params.backgroundColor = params.backgroundColor || "#FFFFFF";

        // check that certain properties are numeric
        if (isNaN(params.padding)) {
            alert(params.description + ": padding must be numeric, setting to 12.");
            params.padding = 12;
        }
        // check that certain properties are numeric
        if (isNaN(params.price)) {
            alert(params.description + ": price must be numeric, setting to 0.");
            params.price = 0;
        }

        // declare private properties of employee object 
        var code = params.code;
        var description = params.description; // declare private property 
        var price = params.price; // declare private property
        var version = params.version; // declare private property

        fpObj.style.backgroundColor = params.backgroundColor;
        fpObj.style.borderRadius = "5px";
        fpObj.style.padding = params.padding + "px";
        fpObj.style.boxSizing = "border-box";
        fpObj.style.textAlign = "left";

        var fpCodeObj = document.createElement("span");
        fpCodeObj.innerHTML = params.code;
        fpCodeObj.style.fontWeight = "bold";
        fpObj.appendChild(fpCodeObj);

        var swDescriptionObj = document.createElement("span");
        swDescriptionObj.innerHTML = params.description;
        fpObj.appendChild(swDescriptionObj);
        

        var swPriceObj = document.createElement("span");
        swPriceObj.innerHTML = params.price;
        fpObj.appendChild(swPriceObj);
        
        
        var fpTypeObj = document.createElement("span");
        fpTypeObj.innerHTML = params.version;
        fpObj.appendChild(fpTypeObj);
        display();

        fpObj.setDescription = function (newDescription) {
            description = newDescription; // update private property
            display();
        };

        fpObj.changePrice = function (priceChangeRatio) {
            price = parseFloat(priceChangeRatio);
            display();
        };
        fpObj.raisePrice = function(){
            price = parseFloat(price) + (parseFloat(price) * 0.02) ;
            display();
        };
        fpObj.changeVersion = function (newVersion) {
            version = newVersion;
            display();
        };        

        function display() {
            fpCodeObj.innerHTML = "<br/>Code: " + code;
            swPriceObj.innerHTML = "<br/>Price: " + formatCurrency(price);
            swDescriptionObj.innerHTML = "<br/>Description: " + description; // make visual change
            fpTypeObj.innerHTML = "<br/>Flight Type: " + version;
        }
        return fpObj;
    }; 
    return fw;
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


