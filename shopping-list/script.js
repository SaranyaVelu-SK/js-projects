let shoppingArray = [];

const addBtn = document.getElementById("addItem");
const inputItem = document.getElementById("item");
const error = document.getElementById("error");
const container = document.querySelector(".container");

const insertButtons = (id) => {
    const div = document.createElement("div");
    const button1 = document.createElement("button");
    button1.textContent = "Delete";
    button1.dataset.id = id;
    div.appendChild(button1);
    button1.addEventListener("click", (e) => {
        shoppingArray = shoppingArray.filter(item => item.id !== Number(e.target.dataset.id));
        e.target.closest(".shopping-row").remove();
    })
    return div;
}

// const insertChecked=(id)=>{
//     const div = document.createElement("div");
//     const inputTag = document.createElement("input");
//     inputTag.id=`isPurchased-${id}`;
//     inputTag.type = "checkbox";
//     div.appendChild(inputTag);
//     return div;
// }
const updateShoppingList = (obj) => {
    const parentdiv = document.createElement("div");
    parentdiv.classList.add("shoppingTableHeader", "shopping-row");
    const shoppingItem = document.createElement("div");
    shoppingItem.textContent = obj.name;
    parentdiv.appendChild(shoppingItem);
    parentdiv.appendChild(insertButtons(obj.id));
    // parentdiv.appendChild(insertChecked(obj.id));
    container.append(parentdiv)


}

const idGenerator = () => {
    let count = 0;
    return () => {
        return ++count;
    }
}

const getId = idGenerator();

addBtn.addEventListener("click", (e) => {
    if (inputItem.value == "") {
        error.textContent = "Enter Item to add";
    } else {
        error.textContent = ""
        const id = getId();
        console.log(id);
        shoppingArray.push({ id: id, name: inputItem.value });
        updateShoppingList({ id: id, name: inputItem.value });
        console.log(shoppingArray);
        inputItem.value = "";
    }
})
