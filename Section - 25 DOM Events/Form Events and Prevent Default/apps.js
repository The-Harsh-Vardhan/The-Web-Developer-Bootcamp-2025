const my_form = document.querySelector("#shelterform");
const input = document.querySelector('#catName');
const my_list = document.querySelector('#cats');

my_form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);
    const catName = input.value;
    const new_li = document.createElement("LI");
    new_li.innerText = catName;
    my_list.append(new_li); 
    input.value = "";
});

console.log(input.value);