/*
  Async & Await With Try, Catch, Finally
*/



fetchData();


let item;
async function fetchData() {
    console.log("Before Fetch");
    try {
        let myData = await fetch("https://localhost:7005/api/Products");
        let items = await myData.json();

        function info(item) {
            let random = `./products/${item.name.split(" ").join("")}.jpg`;
            console.log(random);
            product = `<section class="produce">
    <div class="img-bpx">
        <img src="${random}" alt="">
        <span>-12%</span>
    </div>
    <div class="info">
        <div class="stars">              
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>         
        </div>
        <div class="title">
            <h3>${item.name}</h3>
            <p>Availability: ${item.amount} In Stock</p>
        </div>
        <div class="price">
            <del>&euro;${item.price+(item.price*12/100)}</del>
            <span>&euro;${item.price}<Price/span>
        </div>
        <p> ${item.description} </p>
        <div class="reaction">
            <button><i class="fas fa-shopping-bag"></i></button>
            <button><i class="far fa-heart"></i></button>
            <button><i class="fas fa-sliders-h"></i></button>
            <button><i class="fas fa-external-link-alt"></i></button>
        </div>
    </div>
</section>`
        }
        for (let i = 0; i < items.length; i++) {
            info(items[i]);
            let element = document.querySelector(".content");
            element.insertAdjacentHTML('afterend', product)

        }



    } catch (reason) {
        console.log(`Reason: ${reason}`);
    } finally {
        console.log("After Fetch");
    }

}