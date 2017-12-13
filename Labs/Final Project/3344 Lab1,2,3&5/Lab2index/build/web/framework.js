"use strict";

function Framework() {
    var frameworkObject = {};

    function $(params) {
        return document.getElementById(params);
    }
    
    

    frameworkObject.makeFramework = function (params) {
        
        
        if (!params) {

            alert("you need to enter parameters to the function");
            return;
        }
        if (!params.id) {
            alert("you need to enter Id for the Div ");
            return;
        }
        
        if (!params.categories) {
            alert("you need to enter categories");
            return;
        }
        
        
        
        var portfolio = $(params.id);
        var buttonsDiv = $(params.buttonsDivId);
        var categories = params.categories;

        displayAll();

        buttonsDiv.addEventListener("click", function (event) {
            if (event.target.attributes[0].value === "radio") {

                if (event.target.id !== "all") {
                    hideRest(event.target.id);
                } else {
                    displayAll();
                }
            }
        });

        function displayAll() {
            for (var i = 0; i < categories.length; i++) {
                var hidingDivs = portfolio.getElementsByClassName(categories[i]);
                for (var j = 0; j < hidingDivs.length; j++) {
                    hidingDivs[j].classList.add("show");
                }
            }
        }

        function hideRest(visibleCategory) {
            for (var i = 0; i < categories.length; i++) {
                var hidingDivs = portfolio.getElementsByClassName(categories[i]);
                for (var j = 0; j < hidingDivs.length; j++) {
                    hidingDivs[j].classList.remove("show");
                }
            }

            var divs = portfolio.getElementsByClassName(visibleCategory);
            for (var i = 0; i < divs.length; i++) {
                divs[i].classList.add("show");
            }
        }
    };
    
    return frameworkObject;
}