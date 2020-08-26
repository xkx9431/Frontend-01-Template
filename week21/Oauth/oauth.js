// Owned by: @xkx9431

// App ID: 78466

// Client ID: Iv1.4aa298552271cdc9

// Client secret: 81272d0add92b1c29f8d1ce87f3085499fd3a844

// http://localhost:8080/?code=b70987765fd43cb23cbf&state=123abc
//http://localhost:8080/?code=7f58a658fe0f232ec117&state=123abc
//access_token=3d1538ad207646eb498d7f1ba9875550036b3e1a

// https://github.com/login/oauth/authorize?client_id=Iv1.4aa298552271cdc9&redirect_uri=http%3A%2F%2Flocalhost%3A8080&&scope=read%3Auser&state=123abc
{
    let code  = "c8e23bd9964802621968";
    let state = 'abc123';
    let client_secret = "81272d0add92b1c29f8d1ce87f3085499fd3a844";
    let client_id = "Iv1.4aa298552271cdc9";
    let redirect_uri = encodeURIComponent("http://localhost:8080");
    let params =
    `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}
    `;

    let xhr = new XMLHttpRequest;
    xhr.open('POST',`https://github.com/login/oauth/access_token?${params}`,true);
    xhr.send(null);
    xhr.addEventListener("readystatechange",function(event){
        if(event.readystate == 4){
            debugger;
            console.log(event.responseText);
        }
    })
}

// access_token=3d1538ad207646eb498d7f1ba9875550036b3e1a&expires_in=28800&refresh_token=r1.9f9afcb0507dde57b8f546f2becb975cddfbbd81e87db31f0d480ed264767bf5ed7857c839b15579&refresh_token_expires_in=15897600&scope=&token_type=bearer
