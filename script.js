window.addEventListener('load', ()=>{
    loadingContentFromLocalStorage();
})
const btn1 = document.getElementById("decreament");
const btn2 = document.getElementById("increase");
btn2.addEventListener('click', ()=>{
    var value = parseInt(document.getElementById("number").value,10);
    value = isNaN(value)? 0 : value;
    value++;
    document.getElementById("number").value = value;
})
btn1.addEventListener('click', ()=>{
    var value = parseInt(document.getElementById("number").value,10);
    value= isNaN(value)? 0:value;
    value < 1 ? value = 1:'';
    value--;
    document.getElementById("number").value = value;
})


// menu script

const open = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
close.addEventListener('click', ()=>{
    nav.classList.remove('menu_open');
})
open.addEventListener('click', ()=>{
    nav.classList.toggle('menu_open');
    cart.classList.add('hidden');
})

// cart open script

const icon = document.getElementById("cart")
const cart = document.getElementById("mainCart");
icon.addEventListener('click', ()=>{
    cart.classList.remove('hidden');
    cart.classList.toggle('man');
    if(cart.classList.contains('man')){
        cart.classList.add('hiden')
    }
})
const closeIcon = document.querySelector('.closeIcon'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
preview = document.querySelector('.preview')
closeIcon.addEventListener('click',()=>{
    preview.classList.add('closed')
})

const previewedImage = document.getElementById('mainPreviewImg');
const imagelist = ['images/image-product-1.jpg',
"images/image-product-2.jpg",
'images/image-product-3.jpg',
'images/image-product-4.jpg']
let slideIndex=0;
function slide(n){
        slideIndex+=n;
        if(slideIndex<1){
            previewedImage.src = imagelist[0]
        };
        if(slideIndex>0){
            previewedImage.src = imagelist[slideIndex]
        };
        if(slideIndex>=3){
            next.disabled = true;
        }else{
            next.disabled = false;
        };
        if(slideIndex<1){
            prev.disabled= true;
            slideIndex==0;
        }else{
            prev.disabled = false;
        };
const proPreviews = document.querySelectorAll('.proPreview');
    switch (slideIndex){
        case 0:
            proPreviews[1].classList.remove('active')
            proPreviews[2].classList.remove('active')
            proPreviews[3].classList.remove('active')
            proPreviews[0].classList.add('active')
        break;
        case 1:
            proPreviews[1].classList.add('active')
            proPreviews[2].classList.remove('active')
            proPreviews[3].classList.remove('active')
            proPreviews[0].classList.remove('active')
        break;
        case 2:
            proPreviews[1].classList.remove('active')
            proPreviews[2].classList.add('active')
            proPreviews[3].classList.remove('active')
            proPreviews[0].classList.remove('active')
            break;
        case 3:
            proPreviews[1].classList.remove('active')
            proPreviews[2].classList.remove('active')
            proPreviews[3].classList.add('active')
            proPreviews[0].classList.remove('active')
            break;
    }
}
const  bigImage = document.getElementById('bigImage')
const  BigImage = document.getElementById('BigImage')
const clickHandler = ()=>{
    preview.classList.remove('closed')
}
bigImage.addEventListener('click',clickHandler)

   
function windowCheck(){
    window.addEventListener('resize', ()=>{
        if(window.innerWidth < 768){
            bigImage.removeEventListener('click', clickHandler)
        }else{
            bigImage.addEventListener('click',clickHandler)
        }
    })   
    if(window.innerWidth < 768){
        bigImage.removeEventListener('click', clickHandler)
    }else{
        bigImage.addEventListener('click',clickHandler)
    }
}
windowCheck();
const clPrev = document.getElementById('clPrev'),
clNxt = document.getElementById('clNxt')

function mobileSlide(n){
    slideIndex +=n;
    if (slideIndex<1){
        BigImage.src=imagelist[0]
    }
    if(slideIndex>0){
        BigImage.src = imagelist[slideIndex]
    }
    if(slideIndex>=3){
        clNxt.disabled = true
    }else{
        clNxt.disabled= false
    }
    if(slideIndex<1){
        clPrev.disabled = true
    }else{
        clPrev.disabled = false
    }
}
const cartItem2 = document.querySelector('.cartItem2')
const cart_body = document.querySelector('.cart_body')
// add to cart button function here 
const btn = document.querySelector('.check')
const submitToCart=document.getElementById('submit');
submitToCart.addEventListener('click',()=>{
    if(document.getElementById("number").value>0){
       
    const cartItem2 = document.querySelector('.cartItem2')
    const productTitle= document.getElementById('title')
    const product_price =document.getElementById('product_price')
    const value = document.getElementById("number").value;
    const cartItem = document.createElement('div');

    //creating the cart item
    

    let itemImage = document.createElement('div');
    let image_scr = document.createElement('img');

    let itemDetail = document.createElement('div');
    let name = document.createElement('span')
    let priceTag = document.createElement('div')
    let price_per = document.createElement('span')
    let quantity = document.createElement('span')
    let total = document.createElement('span')

    let deleteBtn =document.createElement('div')
    let icon = document.createElement('img')

   

    cartItem.className = "cartItem"
    itemImage.className = "itemImage"
    image_scr.src = "images/image-product-1-thumbnail.jpg"
    itemDetail.className = "itemDetail"
    name.className = "name"
    priceTag.className = "priceTag"
    price_per.className = "price-per"
    quantity.className = "quantity"
    total.className = "total"
    deleteBtn.className = "deleteBtn"
    icon.src="images/icon-delete.svg"
    

    cartItem2.appendChild(cartItem).appendChild(itemImage).appendChild(image_scr)
    cartItem.appendChild(itemDetail).appendChild(name)
    itemDetail.appendChild(priceTag).appendChild(price_per)
    itemDetail.appendChild(priceTag).appendChild(quantity)
    itemDetail.appendChild(priceTag).appendChild(total)

    cartItem.appendChild(deleteBtn).appendChild(icon)
    
    btn.classList.remove('hide')
    cart_body.classList.remove('empty1')

    name.innerText=productTitle.innerText
    price_per.innerText=product_price.innerText + " X " + value
    total.innerText =" $ " + value * 125
    }
    saveCart();

})
function saveCart(){
    const saveCart = document.querySelectorAll('.cartItem');
    const savedCart=[];
    saveCart.forEach(cart=>{
        savedCart.push(cart.innerHTML)
    })
    localStorage.setItem('cartItemList', JSON.stringify(savedCart))
    console.log('saved')
}
function loadingContentFromLocalStorage(){
    const savedContent = localStorage.getItem('cartItemList');
    
    if(savedContent){
        
        const parseContent = JSON.parse(savedContent);
        parseContent.forEach(content=>{
            let cartItem = document.createElement('div');
            cartItem.className="cartItem"
            cartItem.innerHTML=content

            cartItem2.appendChild(cartItem)
        })
        
    }
    const checkList = JSON.parse(savedContent)
        if(checkList.length>0){
            cart_body.classList.remove('empty1');
            btn.classList.remove('hide')
        }
       
}
// function controlCart(){
//     const max_cartItem = 4;
//     const cartItem = document.querySelectorAll('.cartItem')

//     if(cartItem > max_cartItem){
//         for(let i=0; i< max_cartItem;i++){
//             cartItem2.removeChild(cartItem2.lastChild)
//         console.log(cartItem)
//         }
//     }
   
// }
// const cartItem = document.querySelectorAll('.cartItem')
