function send(){
    emailjs.send("service_9mcavrt","template_ymf7nzc",{
        subject: "聯絡我們",
        name: document.querySelector("#name").value,
        option: document.querySelector("#qa").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
        }).then(response=>{
            console.log("succes",response.status);
        },(error)=>{
            console.log(error);
        })
        
}
window.addEventListener("load", function(send) {
    console.log("");
  });