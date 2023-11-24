document.addEventListener('DOMContentLoaded',function(){
    let submit=document.querySelector('#submit').value;
    let newTask=document.querySelector('#task').value;
    submit.disabled=true;
    newTask.addEventListener('input',function(){});
    document.querySelector('form').addEventListener('submit',function(){
        let text=newTask.value;
        let listItem=document.createElement('li');
        listItem.textContent=text;
        document.querySelector('#tasks').appendChild(listItem);
        newTask.value='';
        return false;
    });
});