let items=[]
let order_items=[]
let lenght=order_items.length

let i=0
let ss=["https://i0.wp.com/www.eeatit.com/wp-content/uploads/2020/10/finger-chips.jpg?fit=600%2C350&ssl=1","https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900","https://cdn.cdnparenting.com/articles/2018/07/361921454-H.webp","https://static.toiimg.com/photo/79811787.cms"]

  let img=document.createElement("img")
  setInterval(function (){
      if(i==ss.length)
      {
          i=0
      }
      img.src=ss[i]
      document.querySelector("#slidshow").append(img)
      i++
  },3000)



function foodItems(n,i,r)
{
    this.name=n,
    this.image_url=i,
    this.rate= r
}

let foodItem1=new foodItems("Drinks","https://static.toiimg.com/thumb/85330198.cms?width=680&height=512&imgsize=195244",99)
items.push(foodItem1)

let foodItem2=new foodItems("Pizza","https://cookieandkate.com/images/2021/07/classic-margherita-pizza.jpg",299)
items.push(foodItem2)

let foodItem3=new foodItems("Fingers chips","https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/french-fries-recipe-1.jpg",149)
items.push(foodItem3)

// let foodItem4=new foodItems("Burger","https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg",120)
// items.push(foodItem4)
// let count=0

items.map(function (ele){
    let box=document.createElement("div")
    let imgbox=document.createElement("div")
    let image=document.createElement("img")
    image.src=ele.image_url
    imgbox.append(image)
    let nam=document.createElement("p")
    nam.innerText=`Name: ${ele.name}`;

    let price=document.createElement("p")
    price.innerText=`Price: Rs ${ele.rate}`

    let inp=document.createElement("input")
    inp.type="checkbox"
    inp.addEventListener("click",function(){
       
            checkbox(ele)
        
        
    })
    inp.setAttribute("name",ele.name)
    inp.setAttribute("id","check")

    box.append(imgbox,nam,price,inp)
    document.querySelector("#food").append(box)
})
let order1=[]
let data;
function checkbox(ele){
    var filter =ele.name;
    order_items.push(ele)
    console.log(order_items)
    
        data= order_items.filter(function (ele){
            return ele.name==filter
        })
        order1.push(data)  
        console.log(order1)
        console.log("filter:",order_items)
        
    

  
   
}

function checkOrder(){
    return true;
}
let count=0
function order(){
    document.querySelector("#osf").innerHTML=""
   let img= document.createElement("img")
   img.src="https://media4.giphy.com/media/SYd3yFnhO8A0LGUlky/200w.webp?cid=ecf05e479bi7s2u1gap64bdnixxk6g064qzm9lyzz8pq5pb1&rid=200w.webp&ct=g"
   img.setAttribute("id","os")
    count++
   let h1=document.createElement("h1")
   h1.innerText=`Order No: ${count}`
   h1.setAttribute("id","id")
   document.querySelector("#osf").append(h1,img) 
// console.log(order_items)
   const mypromise=new Promise(function (resolve,reject){
        let order_status=false;
        setTimeout(function (){
            order_status=checkOrder()
            if(order_status==true){
                resolve("order completed")
            }
            else
            {
                reject("order incomplete")
            }
        },4000)
    });
    mypromise.then(function(res){
        document.querySelector("#os").src=data[0].image_url
    })
    
}

// let btn=document.createElement("button")
// btn.innerText="oeder"
// document.querySelector("#food").append(btn)
// console.log(document.querySelector("#check").value)