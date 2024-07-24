const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downlodBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput()
});

downlodBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    // if(img !== null){
    //     let imgAtrr = img.getAttribute('src');
    //     downloadBtn.setAttribute("href", imgAtrr);
    // }
    // else{
    //     downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    // }
    img !== null ? downlodBtn.setAttribute("href",img.getAttribute('src')) : downlodBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
})

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the Text or URL to generate your QR Code");
    // }

    qrText.value.length > 0 ? generateQRCode() : alert("Enter the Text or URL to generate your QR Code");
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"transparent",
        colorDark:"black",
    });
}
