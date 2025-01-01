
var msg=document.getElementById("msg_card")
    const Close=()=>{
      msg.style.visibility='hidden'
      location.reload()
    }
    const NF=()=>{
      alert("Not Functional Yet")
    }
    var val;
    const getvalue=(temp)=>{
         val=temp;
    }
    const divs=document.querySelectorAll('.one')
    const chat=document.getElementById('Chatname')
      divs.forEach(div=>{
        div.addEventListener('click',()=>{
          const img=div.querySelector('img')
          getvalue(img.src)
          const name=div.querySelector('p')
          // console.log(img.src)
          // console.log(name.innerText)
          msg.style.visibility="visible"
          var newimg=chat.querySelector('img')
          console.log(newimg)
          var newname=chat.querySelector('p')
          console.log(newname)
          newimg.src=img.src
          newname.innerText=name.innerText
        })
      })
      var message=document.getElementById('inputmsg');
    //   var user=document.getElementById('user')
    //   var bot=document.getElementById('bot')
    var messages=document.getElementById('messages')
      var reply="This is a hardCoded message"
      const display=()=>{
        var imge=document.createElement('img')
        imge.src=val
        console.log(val)
        var newd1=document.createElement('div')
        newd1.id="user"
        var newd2=document.createElement('div')
        newd2.id="bot"
        newd2.append(imge)
        var newp=document.createElement('p')
        var newb=document.createElement('p')
        newp.innerText=message.value;
        newb.innerText=reply;
        newd1.appendChild(newp)
        newd2.appendChild(newb)
        messages.appendChild(newd1)
        messages.appendChild(newd2)
        message.value="";
        // bot.appendChild (newb)
        // user.appendChild(newp)
      }
      message.addEventListener('keypress',(event)=>{
        if(event.key==='Enter')
        {
            // console.log("Functional Run")
            display()
        }
      })
      let noti=document.getElementById('ncards')
      let specialP=document.getElementById('specialP')
        const noticlose=()=>{
          noti.style.visibility="hidden"
        }
        const notiopen=()=>{
          specialP.style.visibility='hidden'
          noti.style.visibility="visible"
        }

    // const Likes=document.querySelectorAll('.')
  




      document.addEventListener("DOMContentLoaded", () => {
        const requestsContainer = document.querySelector(".Requests");
        const acceptButtons = document.querySelectorAll(".accept-btn");
        const rejectButtons = document.querySelectorAll(".reject-btn");
      
        const checkNoRequests = () => {
          if (requestsContainer.children.length === 0) {
            const noRequestsMessage = document.createElement("p");
            noRequestsMessage.textContent = "No Requests";
            noRequestsMessage.style.textAlign = "center";
            noRequestsMessage.style.fontSize = "18px";
            noRequestsMessage.style.color = "#666";
            requestsContainer.appendChild(noRequestsMessage);
          }
        };
      
        acceptButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            alert("Request Accepted 😁👍");
            const request = event.target.closest(".Req");
            request.remove();
            checkNoRequests();
          });
        });
      
        rejectButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            alert("Request Rejected 😟");
            const request = event.target.closest(".Req");
            request.remove();
            checkNoRequests();
          });
        });
      });
    

      const change = (event) => {
        // Get the clicked element (the icon that was clicked)
        const clickedElement = event.target;
    
        // Check if the clicked icon is "Liked" or "UnLiked"
        if (clickedElement.classList.contains('UnLiked')) {
            // Hide the "UnLiked" icon and show the "Liked" icon
            clickedElement.style.visibility = 'hidden';
            clickedElement.nextElementSibling.style.visibility = 'visible'; // The "Liked" icon is next to the "UnLiked"
        } else if (clickedElement.classList.contains('Liked')) {
            // Hide the "Liked" icon and show the "UnLiked" icon
            clickedElement.style.visibility = 'hidden';
            clickedElement.previousElementSibling.style.visibility = 'visible'; // The "UnLiked" icon is before the "Liked"
        }
    }
    
   const posts = [
  {
      postuserimg:"P1.jpg",
      postusername:"Aquib Ali",
      userName: "Abdullah",
      postlocation: "Prayagraj",
      posttime: "11 Minutes AGO",
      postImage: "img2.jpg",
      caption: "Every sunset is a reminder that beauty and peace are always within reach ❤️.",
      likedBy: "Aquibali22 and 23 others"
  },
  {
      postuserimg:"P2.jpg",
      postusername:"Aryan Singh",
      userName: "Ali",
      postlocation: "Prayagraj",
      posttime: "11 Minutes AGO",
      postImage: "img1.jpg",
      caption: "Every visit to somewhere gives a new experience 😁",
      likedBy: "Aquibali22 and 23 others"
  },

    {
    postuserimg: "hacka/7.jpg",
    postusername: "Anjali Sharma",
    userName: "Pooja",
    postlocation: "Chandigarh",
    posttime: "25 Minutes AGO",
    postImage: "hacka/img8.jpg",
    caption: "The city beautiful, always a delight 🌸.",
    likedBy: "Anjalisharma8 and 45 others"
    },
    {
    postuserimg: "hacka/8.jpg",
    postusername: "Rahul Jain",
    userName: "Abhishek",
    postlocation: "Bangalore",
    posttime: "10 Minutes AGO",
    postImage: "hacka/img9.jpg",
    caption: "Hustling and thriving in Silicon Valley of India 🚀.",
    likedBy: "Rahuljain5 and 67 others"
    },
    {
    postuserimg: "hacka/11.jpg",
    postusername: "Priya Mehta",
    userName: "Sanya",
    postlocation: "Pune",
    posttime: "18 Minutes AGO",
    postImage: "hacka/img12.jpg",
    caption: "Weekend gateways and scenic hills 🌄.",
    likedBy: "Priyamehta32 and 50 others"
    },
    {
    postuserimg: "hacka/13.jpg",
    postusername: "Sonal Kapoor",
    userName: "Ritika",
    postlocation: "Chennai",
    posttime: "22 Minutes AGO",
    postImage: "hacka/img14.jpg",
    caption: "Marina Beach mornings are a bliss 🌊.",
    likedBy: "Sonalkapoor90 and 39 others"
    },




    {
      postuserimg: "hacka/20250101_165009.jpg",
      postusername: "Rajesh Sharma",
      userName: "Aarav",
      postlocation: "Varanasi",
      posttime: "5 Minutes AGO",
      postImage: "hacka/20250101_165135.jpg",
      caption: "The ghats of Ganga offer serenity and hope 🌅.",
      likedBy: "RajeshS99 and 40 others"
  },
  {
      postuserimg: "hacka/20250101_165108.jpg",
      postusername: "Priya Mehta",
      userName: "Ananya",
      postlocation: "Mumbai",
      posttime: "12 Minutes AGO",
      postImage: "hacka/20250101_165019.jpg",
      caption: "City of dreams and endless lights 🌆✨.",
      likedBy: "PriyaM89 and 25 others"
  },
  {
      postuserimg: "hacka/20250101_165128.jpg",
      postusername: "Amit Verma",
      userName: "Kabir",
      postlocation: "Delhi",
      posttime: "8 Minutes AGO",
      postImage: "hacka/20250101_165025.jpg",
      caption: "Busting the hustle in the capital city 🏙️.",
      likedBy: "AmitV45 and 36 others"
  },
  {
      postuserimg: "hacka/20250101_165152.jpg",
      postusername: "Sneha Rao",
      userName: "Megha",
      postlocation: "Bangalore",
      posttime: "15 Minutes AGO",
      postImage: "hacka/20250101_165132.jpg",
      caption: "Silicon Valley of India, where dreams take flight 🚀.",
      likedBy: "SnehaR12 and 50 others"
  },
  {
      postuserimg: "hacka/20250101_165248.jpg",
      postusername: "Rohit Gupta",
      userName: "Arjun",
      postlocation: "Jaipur",
      posttime: "6 Minutes AGO",
      postImage: "hacka/20250101_165155.jpg",
      caption: "Pink City sunsets are magical ✨🌅.",
      likedBy: "RohitG89 and 42 others"
  },
  {
      postuserimg: "hacka/20250101_165304.jpg",
      postusername: "Ankita Das",
      userName: "Pooja",
      postlocation: "Kolkata",
      posttime: "9 Minutes AGO",
      postImage: "hacka/20250101_165157.jpg",
      caption: "Adda sessions and endless chai ☕.",
      likedBy: "AnkitaD67 and 33 others"
  },
  {
      postuserimg: "hacka/20250101_165334.jpg",
      postusername: "Arvind Patel",
      userName: "Manav",
      postlocation: "Ahmedabad",
      posttime: "20 Minutes AGO",
      postImage: "hacka/20250101_165202.jpg",
      caption: "Heritage, food, and culture galore 🏰🍴.",
      likedBy: "ArvindP77 and 19 others"
  },
  {
      postuserimg: "hacka/20250101_165343.jpg",
      postusername: "Nisha Kumar",
      userName: "Tanya",
      postlocation: "Pune",
      posttime: "11 Minutes AGO",
      postImage: "hacka/20250101_165215.jpg",
      caption: "Nature meets city life 🌿🏙️.",
      likedBy: "NishaK81 and 60 others"
  },
  {
      postuserimg: "hacka/20250101_165346.jpg",
      postusername: "Vikram Malhotra",
      userName: "Raj",
      postlocation: "Chandigarh",
      posttime: "13 Minutes AGO",
      postImage: "hacka/20250101_165207.jpg",
      caption: "The city beautiful, always vibrant 🌸.",
      likedBy: "VikramM45 and 28 others"
  },
  {
      postuserimg: "hacka/20250101_165353.jpg",
      postusername: "Riya Singh",
      userName: "Roshni",
      postlocation: "Lucknow",
      posttime: "19 Minutes AGO",
      postImage: "hacka/20250101_165219.jpg",
      caption: "Kebabs and nawabs, a heritage unmatched 🌟.",
      likedBy: "RiyaS90 and 47 others"
  },
  {
      postuserimg: "hacka/20250101_165406.jpg",
      postusername: "Deepak Joshi",
      userName: "Abhishek",
      postlocation: "Hyderabad",
      posttime: "7 Minutes AGO",
      postImage: "hacka/20250101_165225.jpg",
      caption: "Charminar's charm never fades 🕌.",
      likedBy: "DeepakJ33 and 41 others"
  },
  {
      postuserimg: "hacka/20250101_165408.jpg",
      postusername: "Sonal Kapoor",
      userName: "Lakshmi",
      postlocation: "Chennai",
      posttime: "16 Minutes AGO",
      postImage: "hacka/20250101_165229.jpg",
      caption: "Marina Beach mornings, serene and calm 🌊.",
      likedBy: "SonalK88 and 54 others"
  },
  {
      postuserimg: "hacka/20250101_165439.jpg",
      postusername: "Karan Jain",
      userName: "Rohit",
      postlocation: "Indore",
      posttime: "5 Minutes AGO",
      postImage: "hacka/20250101_165242.jpg",
      caption: "Poha-jalebi mornings are unbeatable 🥰.",
      likedBy: "KaranJ19 and 25 others"
  },
  {
      postuserimg: "hacka/20250101_165451.jpg",
      postusername: "Aarav Sharma",
      userName: "Aryan",
      postlocation: "Bhopal",
      posttime: "10 Minutes AGO",
      postImage: "hacka/20250101_165243.jpg",
      caption: "The city of lakes, serene and beautiful 🛶.",
      likedBy: "AaravS29 and 31 others"
  },
  {
      postuserimg: "hacka/20250101_165457.jpg",
      postusername: "Ramesh Iyer",
      userName: "Yash",
      postlocation: "Coimbatore",
      posttime: "18 Minutes AGO",
      postImage: "hacka/20250101_165254.jpg",
      caption: "Tradition blends with nature here 🌳.",
      likedBy: "RameshI55 and 23 others"
  },
  {
      postuserimg: "hacka/20250101_165508.jpg",
      postusername: "Sneha Agarwal",
      userName: "Tanvi",
      postlocation: "Patna",
      posttime: "6 Minutes AGO",
      postImage: "hacka/20250101_165258.jpg",
      caption: "Modern charm meets ancient heritage 🏛️.",
      likedBy: "SnehaA60 and 37 others"
  },
  {
      postuserimg: "hacka/20250101_165518.jpg",
      postusername: "Aditya Verma",
      userName: "Kabir",
      postlocation: "Guwahati",
      posttime: "9 Minutes AGO",
      postImage: "hacka/20250101_165312.jpg",
      caption: "The Brahmaputra flows with life 🌊.",
      likedBy: "AdityaV78 and 30 others"
  },
  {
      postuserimg: "hacka/20250101_165538.jpg",
      postusername: "Meera Das",
      userName: "Ankita",
      postlocation: "Bhubaneswar",
      posttime: "21 Minutes AGO",
      postImage: "hacka/20250101_165315.jpg",
      caption: "Temple city vibes with a modern twist 🛕.",
      likedBy: "MeeraD45 and 22 others"
  },
  {
      postuserimg: "hacka/20250101_165543.jpg",
      postusername: "Rajiv Pandey",
      userName: "Manav",
      postlocation: "Dehradun",
      posttime: "15 Minutes AGO",
      postImage: "hacka/20250101_165322.jpg",
      caption: "The Himalayan lap of nature 🏞️.",
      likedBy: "RajivP39 and 34 others"
  },
  {
      postuserimg: "hacka/20250101_165548.jpg",
      postusername: "Pooja Sinha",
      userName: "Megha",
      postlocation: "Ranchi",
      posttime: "12 Minutes AGO",
      postImage: "hacka/20250101_165335.jpg",
      caption: "Nature and culture in perfect harmony 🌳.",
      likedBy: "PoojaS58 and 40 others"
  },
  {
      postuserimg: "hacka/20250101_165553.jpg",
      postusername: "Siddharth Malhotra",
      userName: "Raj",
      postlocation: "Pune",
      posttime: "8 Minutes AGO",
      postImage: "hacka/20250101_165337.jpg",
      caption: "Weekend trips and scenic beauty 🌄.",
      likedBy: "SiddharthM77 and 19 others"
  },
  {
      postuserimg: "hacka/20250101_165557.jpg",
      postusername: "Ishita Kapoor",
      userName: "Ananya",
      postlocation: "Kolkata",
      posttime: "14 Minutes AGO",
      postImage: "hacka/20250101_165358.jpg",
      caption: "Vibrant streets filled with joy 🎨.",
      likedBy: "IshitaK11 and 29 others"
  },
  {
      postuserimg: "hacka/20250101_171409.jpg",
      postusername: "Vivek Sharma",
      userName: "Sahil",
      postlocation: "Jaipur",
      posttime: "7 Minutes AGO",
      postImage: "hacka/20250101_165417.jpg",
      caption: "Amer Fort radiates history and beauty ✨.",
      likedBy: "VivekS71 and 50 others"
  },
  {
      postuserimg: "hacka/20250101_171414.jpg",
      postusername: "Riya Gupta",
      userName: "Tanya",
      postlocation: "Lucknow",
      posttime: "11 Minutes AGO",
      postImage: "hacka/20250101_165419.jpg",
      caption: "Chikankari and kebabs define this city 🌟.",
      likedBy: "RiyaG22 and 39 others"
  },
  {
      postuserimg: "hacka/20250101_171418.jpg",
      postusername: "Neeraj Rana",
      userName: "Abhishek",
      postlocation: "Ahmedabad",
      posttime: "20 Minutes AGO",
      postImage: "hacka/20250101_165429.jpg",
      caption: "Kite festivals and heritage buildings 🎉.",
      likedBy: "NeerajR40 and 17 others"
  },
  {
      postuserimg: "hacka/20250101_171420.jpg",
      postusername: "Pooja Verma",
      userName: "Ananya",
      postlocation: "Bangalore",
      posttime: "13 Minutes AGO",
      postImage: "hacka/20250101_165433.jpg",
      caption: "Tech parks and vibrant nightlife 💻.",
      likedBy: "PoojaV80 and 46 others"
  },
  {
      postuserimg: "hacka/20250101_171424.jpg",
      postusername: "Rohit Khanna",
      userName: "Kabir",
      postlocation: "Delhi",
      posttime: "19 Minutes AGO",
      postImage: "hacka/20250101_165434.jpg",
      caption: "A mix of chaos and charm 🌟.",
      likedBy: "RohitK22 and 30 others"
  },
  {
      postuserimg: "hacka/20250101_171429.jpg",
      postusername: "Amit Kumar",
      userName: "Yash",
      postlocation: "Surat",
      posttime: "10 Minutes AGO",
      postImage: "hacka/20250101_165452.jpg",
      caption: "The diamond city shines bright 💎.",
      likedBy: "AmitK93 and 28 others"
  },
  {
      postuserimg: "hacka/20250101_171431.jpg",
      postusername: "Nisha Roy",
      userName: "Lakshmi",
      postlocation: "Coimbatore",
      posttime: "18 Minutes AGO",
      postImage: "hacka/20250101_165456.jpg",
      caption: "Lush greenery and endless calm 🌴.",
      likedBy: "NishaR44 and 27 others"
  },
  {
    postuserimg: "hacka/20250101_171437.jpg",
    postusername: "Aarav Tiwari",
    userName: "Rohan",
    postlocation: "Agra",
    posttime: "10 Minutes AGO",
    postImage: "hacka/20250101_165500.jpg",
    caption: "Mesmerized by the timeless beauty of the Taj Mahal 🕌✨.",
    likedBy: "AaravT22 and 35 others"
},
{
    postuserimg: "hacka/20250101_171439.jpg",
    postusername: "Sneha Kapoor",
    userName: "Pooja",
    postlocation: "Shimla",
    posttime: "12 Minutes AGO",
    postImage: "hacka/20250101_165513.jpg",
    caption: "Winter magic in the hills of Shimla ❄️🏔️.",
    likedBy: "SnehaK89 and 44 others"
},
{
    postuserimg: "hacka/20250101_171444.jpg",
    postusername: "Rahul Singh",
    userName: "Aryan",
    postlocation: "Amritsar",
    posttime: "9 Minutes AGO",
    postImage: "hacka/20250101_165532.jpg",
    caption: "Golden Temple's tranquility is unmatched 🛕✨.",
    likedBy: "RahulS77 and 51 others"
},
{
    postuserimg: "hacka/20250101_171456.jpg",
    postusername: "Ishita Sharma",
    userName: "Ritika",
    postlocation: "Udaipur",
    posttime: "8 Minutes AGO",
    postImage: "hacka/20250101_165622.jpg",
    caption: "City of lakes, love, and royalty 🏰🌊.",
    likedBy: "IshitaS88 and 47 others"
},
{
    postuserimg: "hacka/20250101_171503.jpg",
    postusername: "Vikram Khurana",
    userName: "Abhishek",
    postlocation: "Rishikesh",
    posttime: "14 Minutes AGO",
    postImage: "hacka/20250101_165632.jpg",
    caption: "Yoga and Ganga vibes for the soul 🧘‍♂️🌊.",
    likedBy: "VikramK90 and 38 others"
},
{
    postuserimg: "hacka/20250101_171515.jpg",
    postusername: "Meera Gupta",
    userName: "Ananya",
    postlocation: "Vadodara",
    posttime: "11 Minutes AGO",
    postImage: "hacka/20250101_165636.jpg",
    caption: "Art and culture blend seamlessly here 🎨.",
    likedBy: "MeeraG72 and 40 others"
}

];
const loadPosts=()=>{
  let key1=localStorage.getItem('Current')
details=[localStorage.getItem(key1)]
details=JSON.parse(details[0])
let name=document.getElementById('name')
let nametag=document.getElementById('nametag')
let namemind=document.getElementById('namemind')
name.innerText=details.firstname;
nametag.innerText="@"+details.lastname;
namemind.placeholder="What's on your mind , "+details.firstname;

  const postcontainer=document.querySelector('.posts')
  posts.forEach(post=>{
  // const post=document.createElement('div')
  const postelement=`<div class="post">
                   <div class="one">
                  <img src=${post.postuserimg} alt="">
                  <div class="detail">
                      <p>${post.postusername}</p>
                      <p>${post.postlocation}, ${post.posttime}</p>
                  </div>
                 </div>
                 <div class="imgdiv">
                  <img id="postimg" src=${post.postImage} alt="">
                 </div>
                 <div class="postbtns">
                  <div class="like">
                    <svg xmlns="http://www.w3.org/2000/svg" class="UnLiked" onclick="change(event)" height="25" width="25" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg"  onclick="change(event)" class="Liked" height="25" width="25" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                  </div>
                  <div class="save">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>
                  </div>
                </div>
                <div class="comments">
                  <div class="CP1">
                    <img src="P1.jpg" alt="Can't load">
                    <img src="P2.jpg" alt="Can't load">
                    <img src="P3.jpg" alt="Can't load">
                  </div>
                  <div class="CP2">
                    <p>Liked by <b>${post.likedBy}</b></p>
                  </div>
                  <div class="CP3"></div>
                </div>
                <div class="caption">
                  <p><b>${post.userName} : </b>${post.caption}</p>
                </div></div>`
                // postcontainer.appendChild(postelement)
                postcontainer.innerHTML+=postelement
})
//


//Changing Names According to the User
}
window.onload = loadPosts;
const settingclose=()=>
{
  let setting=document.querySelector('.setting')
  setting.style.visibility="hidden"
}
const settingopen=()=>
{
  let setting=document.querySelector('.setting')
  setting.style.visibility="visible"
}

const changename = () => {
  let first = prompt("Enter new First name");
  let last = prompt("Enter new Last name");

  let key1 = localStorage.getItem('Current');
    let details = localStorage.getItem(key1); // Get the details as a string
  
  details = JSON.parse(details);
  
  details.firstname = first;
  details.lastname = last;

  localStorage.setItem(key1, JSON.stringify(details));

  alert("First name and Last name updated successfully!");
  location.reload()
};
const changepass = () => {
  let pass=prompt("Enter new password")

  let key1 = localStorage.getItem('Current');
    let details = localStorage.getItem(key1); // Get the details as a string
  
  details = JSON.parse(details);
  
  details.password =pass;

  localStorage.setItem(key1, JSON.stringify(details));

  alert("Password has been updated successfully!");
  location.reload()
};
const deleteAccount = () => {
  let key1 = localStorage.getItem('Current');
    if (key1) {
    localStorage.removeItem(key1);
        localStorage.removeItem('Current');
    
    alert("Account deleted successfully!");
  } else {
    alert("No account found to delete!");
  }
  window.location.href="index.html"
};
