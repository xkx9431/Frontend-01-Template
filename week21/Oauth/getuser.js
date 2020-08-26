// https://github.com/login/oauth/authorize?client_id=Iv1.4aa298552271cdc9&redirect_uri=http%3A%2F%2Flocalhost%3A8080&&scope=read%3Auser&state=123abc
//access_token=3d1538ad207646eb498d7f1ba9875550036b3e1a

{


    let xhr = new XMLHttpRequest;
    xhr.open('GET',`https://api.github.com/user`,true);
    xhr.setRequestHeader('Authorization',"token 3d1538ad207646eb498d7f1ba9875550036b3e1a");
    xhr.send(null);
    xhr.addEventListener("readystatechange",function(event){
        if(xhr.readyState == 4){
            console.log(event.responseText);
        }
    })
}