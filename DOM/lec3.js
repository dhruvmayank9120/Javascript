//---->create element

//created the element
// function attach(content) {
//   let element = document.createElement("li");
//   element.innerHTML = content;

//   const element2 = document.createElement("li");
//   element2.innerHTML = content + "V2.0";

//   const parent = document.getElementById("root"); //inserted the element
//   parent.appendChild(element);
//   parent.append(element, element2);
// }

// attach("TS");
// attach("REACT");
// attach("NODEJS");
//note:the difference between append and appendChild is that append can take multiple nodes and strings as arguments, whereas appendChild only accepts a single node.

//---->create text node=>means no tag just text

// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById("root");
// parent.appendChild(element);

//---->create a attribute node: this means adding attribute to an element

// const element = document.createAttribute("id");
// element.value = "first";

//->access to first li
// const current_list = document.querySelector("li");
// current_list.setAttributeNode(element);

//access to 2nd list

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);

//---->access attribute of an element

// const element = document.getElementById("root");
// console.log(element.getAttribute("style"));
// element.setAttribute("custom", "20");
// element.setAttribute("class", "Rohan");
// element.removeAttribute("custom");

//---->Add nodes to the dom

// const parent = document.getElementById("root");

// const element = document.createElement("li");
// element.innerHTML = "TS";
//data

// parent.prepend(element); //it will add the element at the starting of the parent node
// parent.append(element); //it will add the element at the end of the parent node

// const child2 = parent.children[1];
// parent.insertBefore(element, child2); //it will add the element before the child2

// parent.replaceChild(element, child2); //it will replace the child2 with element

// const parent = document.getElementById("root");
// parent.innerHTML = "TS";//it will replace the existing content with TS
// parent.innerHTML += "<li>TS</li>"; //it will add the TS at the end of the existing content

// const element = document.createElement("div");
// element.innerHTML = "Hello coder army";

// parent.insertAdjacentElement("beforebegin", element); //it will add the element after the parent node
// parent.insertAdjacentElement("afterbegin", element); //it will add the element at the starting of the parent node
// parent.insertAdjacentElement("beforeend", element); //it will add the element at the end of the parent node
// parent.insertAdjacentElement("afterend", element); //it will add the element before the parent node

//---->remove nodes from the dom

// const element = document.querySelector("li"); //it will remove the first li element
// element.remove(); //it will remove the element itself

//->remove child node
// const parent = document.getElementById("root");
// const child = parent.children[1];
// parent.removeChild(child); //it will remove the child from the parent node
