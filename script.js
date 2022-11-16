console.log("Script running");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{//event ko listen karega click kiya toh sidebar aayega
    document.querySelector('.sidebar').classList.toggle('sidebarGo');//sidebar mein hamburgerlines click karne par sidebargo laga do ya hata do
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else
    {

        document.querySelector('.ham').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        }, 400);
        
    }

})