let posts=document.querySelectorAll('.content')
let parent=document.getElementById('postcard')
let card=document.getElementById('card')
posts.forEach(post=>{
    post.addEventListener('click',()=>{
        parent.style.visibility="visible"
        post.childNodes.forEach(child=>{
            if(child.tagName=='IMG')
            {
               let tag=document.createElement('img')
               tag.src=post.id;
               card.append(tag)
            }
            else if(child.tagName=='VIDEO')
            {
                let tag=document.createElement('video')
               tag.src=post.id;
               tag.controls=true
               tag.autoplay=true
               card.append(tag)
             
            }
        })

    })
})
const closecard=()=>{
    parent.style.visibility="hidden"
        card.removeChild(card.children[1]);
}