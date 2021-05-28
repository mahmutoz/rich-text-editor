'use-strict';

let isSourceCode = false;
let isEditMode = true;
const bodyEl = richTextField.document.getElementsByTagName('body')[0];

function editMode(){
    richTextField.document.designMode = 'On';
}

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
        richTextField.document.designMode = 'On';
        isEditMode = false;
    } else {
        isEditMode = true;
    }

}
