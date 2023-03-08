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

/*const https=require("https");
/!*Read the text content of the URL and asynchronously pass it to the callback.*!/
function getText(url,callback){
//     start an HTTP GET request for the URL.
    request=https.get(url);

//     Register a function to handle the "response" event.
    request.on("response",response=>{
    //     The response event means that response headers have been received
     let httpStatus=response.statusCode;
     /!*The body of the HTTP response has not been received yet.*!/
        response.setEncoding("utf-8");
        let body="";

        /!*This event handler is called when the response is complete*!/
        response.on("end",()=>{
            if(httpStatus ===200){
                callback(null,body);
            }else{
                callback(httpStatus,null);
            }
        })
    })
    /!*We also register an event handler for lower-level network errors.*!/
    request.on("error",(err)=>{
        callback(err,null);
    });
}*/

// console.log(getText("https://www.mozilla.org/en-US/firefox/","https://www.mozilla.org/en-US/firefox/"))


function displayUserProfile(profile) {
    console.log(`Profile created for the User.`)
}

/*function c1(response){ //callback1
    let p4=response.json();
     return p4;
}
function displayUserProfile(profile) {
    console.log("profile logging")
}
function c2(response){ //callback2
    displayUserProfile(profile);
}

let url="/home/rajesh/Desktop/github/JavaScript/abs.js"
let p1=fetch(url); //promise1, task 1
let p2=p1.then(c1); // promise 2, task2
let p3=p2.then(c2); //promise 3, task3*/
//Very good example explaining promises.
/*fetch("api/user/profile")
    .then(response=>{
        if(!response.ok){
            return null;
        }
        let type=response.headers.get("content-type");
        if(type !=="application/json"){
            throw new TypeError(`Expected JSON, got ${type}`);
        }

    }).then(profile=>{
        if(profile){
            displayUserProfile(profile);
        }else{
            throw new TypeError(`we got 404 error and return null to end up here.`);
        }
    }).catch(e=>{
        if(e instanceof TypeError){
            throw  new TypeError(`type error thrown`);
        }else if (e instanceof  NetworkError){
            throw new NetworkError(`Network error thrown.`);
        }else{
            console.log(e)
        }

    });*/
/*function getJSON(url){
    return fetch(url).then(response=>response.json());
}
function getHighScore(){
    return getJSON("/api/user/profile").then(profile=>profile.highScore);
}*/

/*function wait(duration){
    return new Promise((resolve,reject)=>{
        if(duration < 0){
            reject(new Error("time travel not yet implemented"));
        }
        setTimeout(resolve,reject);
    }) ;
}*/
// const http =require("http");
//  function getJson(url){
//      return new Promise((resolve,reject)=>{
//         //  start an HTTP GET request for the specified URL.
//         request= http.get(url,response=>{
//             // Reject the Promise if the HTTP status is wrong.
//             if(response.statusCode!==200){
//                 reject(new Error(`HTTP status ${response.statusCode}`));
//                 response.resume(); // so we don't leak memory
//             } else if(response.headers['content-type'] !== "application/json"){
//                 reject( new Error(`The content-type is ${response.headers['content-type']}`));
//                 response.resume(); // don't leak memory.
//             }else{
//             // Otherwise, register events to read the body of the response.
//                 let body="";
//                 response.setEncoding("utf-8");
//                 response.on("data",chunk=>{body+=chunk;});
//                 response.on("end",()=>{
//                 //     When the response body is complete, try to parse it.
//                     try{
//                         let parsed=JSON.parse(body);
//                     //     if it parsed successfully, fulfill the promise.
//                         resolve(parsed);
//                     } catch (e){
//                         reject(e);
//                     }
//                 });
//                 /*We can reject the promise if the request fails before we even get a response( such as when the response is down.*/
//                 request.on("error",error=>{
//                     reject(error);
//                 });
//             }
//
//         })
//      });
//  }


/*
function fetchSequentially(urls) {
//     we'll store the URL bodies here as we fetch them.
    const bodies=[];
    function fetchOne(url){
        return fetch(url)
            .then(response =>response.text())
            .then(body => {
                    //     we save the body to an array, and we're purposely
                    //     omitting a return value here( returning undefined.
                bodies.push(body);
            });
    }
    // start with a promise that will fulfill right away (wiht value undefined.)
    let p=Promise.resolve(undefined);
    // Now loop through the desired URL, building a Promise chain.
    // of arbitrary length, fetching one URL at each stage of the chain.
    for(url of urls){
        p=p.then(()=>fetchOne(url));
    }
    // When the last Promise in that chain is fulfilled, then the bodies
    // array is ready. so let's return a Promise for that.
    // bodies array note that we don't include any error handlers.
    // we want to allow errors to propagate to the caller.
    return p.then(()=>bodies);
}
*/
/*fetchSequentially(urls)
    .then(bodies =>{/!*do something wiht the array of strings*!/}
    .catch(e=>console.error(e));
)*/














