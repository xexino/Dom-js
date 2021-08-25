var COMMANDES = [

    {
        title: 'Laptop ',
        prix: 20.34,
        thumnail: "img/illu-tablette.jpg",
        quantity : 1  
    },

    {
        title: 'Laptop ',
        prix: 20.34,
        thumnail: "img/illu-tablette.jpg",
        quantity : 1  
   },

    {
        title: 'Laptop ',
        prix: 20.34,
        thumnail: "img/illu-tablette.jpg",
        quantity : 1  
  },

    {
        title: 'Laptop ',
        prix: 20.34,
        thumnail: "img/illu-tablette.jpg",
        quantity : 1  
 },

]

// affichage

var list_command = document.getElementById("list-commands");

//parcourir la liste des commands 
for (var command of COMMANDES) {
    //
    var shopping_item = `
    <section>
    <div class="product">
        <div class="descr">
            <img src="${command.thumnail}" alt="macBook">
            <p> ${command.title} <br> ${command.prix}$</p>
        </div>
        <div class="butt">
            <button>-</button>
            <input type="number" value="${command.quantity}">
            <button>+</button>
            <button><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>
    </section>`


    list_command.innerHTML += shopping_item

}
console.log(list_command) 
