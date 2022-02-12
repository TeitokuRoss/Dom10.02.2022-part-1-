"use strict";

// const ulEl = document.querySelector("ul");

// const parentUl = ulEl.parentElement;

// const pBeforeUl = ulEl.previousElementSibling;

// //1 найти h3 через ul

// const h3El1 = ulEl.parentElement.firstElementChild;

// const h3El2 = ulEl.previousElementSibling.parentElement;

// const ulChildren = ulEl.children;

// for (const el of ulChildren) {
// 	el.addEventListener("click", (e) => {
// 		alert("I was clicked");
// 	});
// }

// const targetInfo = (e) => {
// 	console.log("e.target :>>", e.target);
// 	console.log("e.currentTarget :>>", e.currentTarget);
// };

// const ulClosestParentArtcile = ulEl.closest("article");
// const ulClosestParentbody = ulEl.closest("body");
// const ulClosestParentClass1 = ulEl.closest(".class1");

const h3 = document.querySelector("h3");

h3.onclick = (e) => {
	console.log("e.target:>>", e.target);
	console.log("e.currentTarget:>>", e.currentTarget);
	h3.nextElementSibling.style.color = "yellow";
};

//При клике на заголовок поменять цвет следующей p
//(использовать e.target или e.current)
//при клике на любой li выделить p lorem2
const ul = document.querySelector("ul");
const elis = document.querySelectorAll("li");

for (const el of elis) {
	console.log(el);
	el.addEventListener("click", (e) => {
		console.log("e.target:>>", e.target);
		console.log("e.currentTarget:>>", e.currentTarget);
		e.currentTarget.parentElement.nextElementSibling.style.color = "blue";
	});
}

/*Bubbling and capturing */

const targetInfo = (e) => {
	console.log("e.target", e.target);
	console.log("e.currentTarget:>>", e.currentTarget);
	e.stopPropagation(); //прекратить дальнейшей всплытие/погружения
};

document.body.onclick = targetInfo;
document.querySelector("article").onclick = targetInfo;
document.querySelector("ul").onclick = targetInfo;
document.querySelector("ul").firstElementChild.onclick = targetInfo;

document.body.addEventListener("click", targetInfo, { capture: true });
document.body.removeEventListener("click", targetInfo);
