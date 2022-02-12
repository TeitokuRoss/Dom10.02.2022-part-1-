"use strict";

//добавление дочернего
//element.append(newEl) - перед
//element.prepern(newEl) - после
//Добавление соседа
//element.befora(NewEl) = перед превым
//elemet.after(newEl) - после первого
//elemet.remove() - удаление себя

// const newEl = document.createElement("article");
// const rootDivEl = document.querySelector("#root");
// rootDivEl.append(newEl);
// const newP = document.createElement('p');
// newEl.before(newP);
const newEl = document.createElement("section");
const rootDivEl = document.querySelector("#root");
rootDivEl.append(newEl);
const newh2 = document.createElement("h2");
newEl.append(newh2);
const newar = document.createElement("article");
newEl.append(newar);
const newh3 = document.createElement("h3");
newar.append(newh3);
const newPl = document.createElement("p");
newar.append(newPl);
newh2.textContent = "Lorem";
newh3.textContent = "ispum";
newPl.textContent =
	"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapientebeatae alias voluptate? Sunt facere neque iste consequatur eaque atimpedit molestiae consequuntur nisi repellendus repellat, vel quidem voluptatem nobis ipsa.";
