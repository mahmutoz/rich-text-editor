'use-strict';

const bodyEl = richTextField.document.getElementsByTagName('body')[0];
let isSourceCode = false;
let isEditMode = true;
const btn = document.querySelectorAll('button');

function editMode(){
    richTextField.document.designMode = 'On';
}

btn.forEach( e => {
    e.addEventListener('click', function (){
        e.classList.toggle('active');
    });
});


function cmd(command){
    richTextField.document.execCommand(command, false, null);
}

function cmdArg(command, argument){
    richTextField.document.execCommand(command, false, argument);
}

function codeSource(){
    if(isSourceCode){
        bodyEl.innerHTML = bodyEl.textContent;
        isSourceCode = false;
    } else {
        bodyEl.textContent = bodyEl.innerHTML;
        isSourceCode = true;
    }
}

function toggleEdit(){
    if (isEditMode){
        richTextField.document.designMode = 'Off';
        isEditMode = false;
    } else {
        richTextField.document.designMode = 'On';
        isEditMode = true;
    }
}