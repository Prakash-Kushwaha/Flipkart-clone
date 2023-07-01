const flipkartContent = document.getElementById("content-flipkart");
const basketContent = document.getElementById("content-grocery");
const headerFlipkart = document.getElementById("header-flipkart");
const headerGrocery = document.getElementById("header-grocery");


function flipkart() {
    basketContent.style.display = "none";
    flipkartContent.style.display = "flex";
    headerFlipkart.style.color = "var(--color-brand-bbd)";
    headerFlipkart.style.borderBottom = "0.2rem solid var(--color-brand-bbd)";
    headerGrocery.style.color = "#000";
    headerGrocery.style.borderBottom = "none";
}
function basket() {
    flipkartContent.style.display = "none";
    basketContent.style.display = "flex";
    headerGrocery.style.color = "var(--color-brand-bbd)";
    headerGrocery.style.borderBottom = "0.2rem solid var(--color-brand-bbd)";
    headerFlipkart.style.color = "#000";
    headerFlipkart.style.borderBottom = "none";
}

