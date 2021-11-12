let setInputValue = []
function getValue() {
    const input = document.getElementById("input").value;
    const prepData = prepareData(input);
    setInputValue = [prepData];
    // document.getElementById("list").innerText = input;
    for (let i = 0; i < setInputValue.length; i++) {
        // console.log(setInputValue[i].input)
        // const li = document.createElement("li");
        // li.innerText = setInputValue[i].input;
        // document.getElementById("list").appendChild(li);
        const div = document.createElement("div");
        div.innerHTML = `
        <div  class="header" id=${setInputValue[i].id}>
        <h1>${setInputValue[i].id + 1}: ${setInputValue[i].input} </h1>
        <button class="btn btn-primary" onclick="deleteItem(${setInputValue[i].id})">Delete</button>
        </div>
        `
        document.getElementById("list").appendChild(div)



    }
}

const deleteItem = (id) => {
    const deleteItem = document.getElementById(id);
    deleteItem.remove();

}

const prepareData = (input) => {
    const inputObj = {};
    inputObj.input = input;
    inputObj.id = setInputValue.length;
    return inputObj;

}

// document.getElementById("submit").addEventListener("click",function() {
//     const input = document.getElementById("input").value;
//     document.getElementById("list").innerText = input;
// })

