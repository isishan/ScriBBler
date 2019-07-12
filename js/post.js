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