//Function that acts when we press the Edit or Save button.
function editSaveText(){
    buttonText=document.getElementById('button-post-page-edit');
    buttonIcon=document.getElementById('icon-post-page-edit');
    text=document.getElementById('blogBody');
    title=document.getElementById('blogTitleNew');
    if(buttonText.innerHTML.includes('Edit') ){
        buttonText.innerHTML='Save';                                        // Replacing the Edit text with Save
        buttonIcon.innerHTML='<i class="fa fa-save"></i>';                  // Replacing the edit icon with the save
        text.setAttribute('contenteditable', 'true');                       // Making the article editable
        text.setAttribute('style', 'border-width: 1px; border-style: groove; ');        //Adding border to the editable article
        title.setAttribute('contenteditable', 'true');                      // Making the title editable
        title.setAttribute('style', 'border-width: 1px; border-style: groove; font-size: 100%; font-family: \'Abel\', sans-serif; font-weight: bold;');     //Adding border to the editable title
    }

    else {
        buttonText.innerHTML='Edit';                                        //Replacing the Save text with Edit
        buttonIcon.innerHTML='<i class="fa fa-edit"></i>'                   //Replacing the Save icon witgh Edit
        text.setAttribute('contenteditable', 'false');                      //Making the article uneditable
        text.setAttribute('style', 'border-style: none;');                  //Removing border from the article
        title.setAttribute('contenteditable', 'false');                     //Making the title uneditable
        title.setAttribute('style', 'border-style: none;');                 //Removing border from the title
    }
}

var likes=0;
// Function to increase the number of likes and edit the text below it
function like(){
    likeButton=document.getElementById('like-button');
    likeButton.innerText='Liked!';
    likes++;
    liketext=document.getElementById('like-text');
    if(likes<=1)
        liketext.innerText=`${likes} person likes this !`;
    else{
        liketext.innerText=`${likes} people have liked this !`;
    }
}

//Function to add the text written in comment box to the all comments area
function cmnt(){
    commentText=document.getElementById('comment');             // Accessing the comment written in comment box
    allComments=document.getElementById('all-comments');        // Accessing the area where comment needs to be published
    if(commentText.value!=''){
        allComments.style.display='block';
        allComments.innerHTML='<div class="single-comment">'+ commentText.value +'</div>' + allComments.innerHTML;
        commentText.value='';
    }
}

// Making the create post modal visible
function createpost(){
  modal1.style.display='none';
  modal2.style.display='none';
}
