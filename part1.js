  //ALWAYS REMEMBER THE HIERACRCHY DIAGRAM OF DOM
//parentElement.insertBefore(newElement,currElement);
let parent = document.querySelector("ul");
parent.addEventListener('click',cb);
function cb(e) {//e=>event object 
  let Nodes = document.querySelectorAll("li");
  let succesor = Nodes[5];
  let elementNode = document.createElement("li");//creating an element
  let textNode = document.createTextNode("6");//creating a text node
  elementNode.appendChild(textNode); //appending text node inside element node
  parent.insertBefore(elementNode, succesor);
}
//******************************************************//
//INSERTING AN ELMEMENT IN body
//MORE PRECISE WAY::
let ele=document.createElement('p');
ele.innerHTML='<h1>HELLO</h1>';
//ele.innerText gives only this statement and erase the above statement i.e HTML
//so more precise way to add both the statements:=>
let textNode = document.createTextNode("This is text and we cannot use HTML tags here");
ele.appendChild(textNode);

//****REVISE THIS MISTAKE::=>*/
document.body.insertBefore(ele,parent);
//parentELEMENT is document.body not document

