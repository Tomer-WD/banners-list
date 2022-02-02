const bannersList = document.querySelector('#banners-list');
let idIncrenemt = 0;
let arr = [];

function getFormData() {
    idIncrenemt++;
    const elementId = 'banner' + idIncrenemt
    let inputImg = document.querySelector('.img').value;
    let inputLink = document.querySelector('.link').value
    createNewBanner(elementId, inputLink, inputImg );

}

function createNewBanner(element_id, redirect_link, banner_img) {
    const link = document.createElement("a");
    const img = document.createElement("img");
    link.setAttribute("href", redirect_link);
    link.setAttribute('target','_blank');
    img.src = banner_img;
    link.appendChild(img);
    bannersList.appendChild(link);
    arr.push({element_id, redirect_link, banner_img})
    img.style.width = '320px';
    img.style.height = '320px';
    console.log(arr.length)
}


const save = document.querySelector('.save');
const clear = document.querySelector('.clear');

save.addEventListener('click', () => {

   localStorage.setItem('banners-data', JSON.stringify(arr))
   document.querySelector('.img').value = '';
   document.querySelector('.link').value = '';
})

clear.addEventListener('click', () => {
    localStorage.clear()
    location.reload();
})

window.addEventListener('load', () => {
    if(localStorage.getItem('banners-data') !== null){
        for (let i = 0; i <= localStorage.length; i++) {
              const myObj = JSON.parse(window.localStorage.getItem((localStorage.key('banners-data'))))
              const link = document.createElement("a");
              const img = document.createElement("img");
              link.setAttribute("href", myObj[i].redirect_link);
              link.setAttribute('target','_blank');
              img.src = myObj[i].banner_img;
              link.appendChild(img);
              bannersList.appendChild(link);
              img.style.width = '320px';
              img.style.height = '320px';
            }
        }
})
