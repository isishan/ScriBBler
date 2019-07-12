function editSaveText(){
    buttonText=document.getElementById('button-post-page-edit');
    buttonIcon=document.getElementById('icon-post-page-edit');
    text=document.getElementById('blogBody');
    title=document.getElementById('blogTitleNew');
    if(buttonText.innerHTML.includes('Edit') )
    {
        buttonText.innerHTML='Save';
        buttonIcon.innerHTML='<i class="fa fa-save"></i>'
        text.setAttribute('contenteditable', 'true');
        text.setAttribute('style', 'border-style: groove; font-size:20px;');
        title.setAttribute('contenteditable', 'true');
        title.setAttribute('style', 'border-style: groove; font-size: 100%; font-family: \'Abel\', sans-serif; font-weight: bold;');
    }

    else 
    {
        buttonText.innerHTML='Edit';
        buttonIcon.innerHTML='<i class="fa fa-edit"></i>'
        text.setAttribute('contenteditable', 'false');
        text.setAttribute('style', 'border-style: none;');   
        title.setAttribute('contenteditable', 'false');
        title.setAttribute('style', 'border-style: none;'); 
    }
}

var likes=0;
function like(){
    likeButton=document.getElementById('like-button');
    likeButton.innerText='Liked!';
    likes++;
    liketext=document.getElementById('like-text');
    if(likes<=1)
        liketext.innerText=`${likes} person likes this !`;
    else
    {
        liketext.innerText=`${likes} people have liked this !`;
    }
}

function cmnt(){
    commentText=document.getElementById('comment');
    allComments=document.getElementById('all-comments');
    allComments.style.display='block';
    allComments.innerHTML+='<div class="single-comment">'+ commentText.value +'</div>';
}