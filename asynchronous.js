/*const checkForUpdates=(time,unit) => `This is the function that checks for update in ${time} ${unit}`;
// console.log(setTimeout(checkForUpdates,30000));
/!*call checkForUpdates in one minute and then again every minute after that *!/
let updateIntervalId=setInterval(checkForUpdates,30000);

/!*setInterval() returns a value that we can use to stop the repeated.
*invocations by calling clearInterval().(similarly, setTimeout()
*  returns a value that you can pass to clearTimeOut())
* *!/
function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}
/!*Ask the web browser to run an object representing the HTML.
* <button> element that matches this css selector.
* *!/
/!*here document.querySelector returns an object that represent a single specified elements in the web page.*!/
let okay=document.querySelector('#confimUpdateDialog button.okay');
/!*
* Now register a callback function to be invoked when the user.
* clicks on that button.
* *!/
/!*applyUpdate is a hypothetical callback function that we assume is implemented somewhere else. *!/
/!*Here addEventListener specifies that kind of event that we are interested.*!/
okay.
('click',applyUpdate);

/!*Fetching data from webServer with code like this.*!/
function getCurrentVersionNumber(versionCallback) {
    /!*Make a scripted HTTP request to a backend version API.*!/
    let request=new XMLHttpRequest();
    request.open("GET","http://www.example.com/api/version");
    request.send();

    /!*Register a callback that will be invoked when the response arrives.*!/
    request.onload=function () {
        if(request.status===200){
            /!*If HTTP is good, get version number and call callback.*!/
            let currentVersion=parseFloat(request.responseText);
            versionCallback(null,currentVersion);
        }else{
            /!*otherwise report an error to the callback.*!/
            versionCallback(response.responseText,null);
        }
    };
    /!*Register another callback that will be invoked for network errors*!/
    request.onerror=request.ontimeout=function (e) {
        versionCallback(e.type,nul);

    }
}*/
/*const fs=require("fs");
const {text} = require("express"); //The "fs" module has fileSystem-related APIs.
let options={ // An Object to hold options for our program.
    //default options would go here.
};

// Read a configuration file, then call the callback function.
fs.readFile("config.json","utf-8",(error,text)=>{
    if(error){
    //     If there was an error,display a warning , but continue.
        console.warn("could no rea config file :", error);
    }else{
        Object.assign(options,JSON.parse(text));
    }
    startProgram(options);
})*/

const https=require("https");
/*Read the text content of the URL and asynchronously pass it to the callback.*/
function getText(url,callback){
//     start an HTTP GET request for the URL.
    request=https.get(url);

//     Register a function to handle the "response" event.
    request.on("response",response=>{
    //     The response event means that response headers have been received
     let httpStatus=response.statusCode;
     /*The body of the HTTP response has not been received yet.*/
        response.setEncoding("utf-8");
        let body="";

        /*This event handler is called when the response is complete*/
        response.on("end",()=>{
            if(httpStatus ===200){
                callback(null,body);
            }else{
                callback(httpStatus,null);
            }
        })
    })
    /*We also register an event handler for lower-level network errors.*/
    request.on("error",(err)=>{
        callback(err,null);
    });
}

console.log(getText("https://www.mozilla.org/en-US/firefox/","https://www.mozilla.org/en-US/firefox/"))



























