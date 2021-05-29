'use-strict';

const bodyEl = richTextField.document.getElementsByTagName('body')[0];
let isSourceCode = false;

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