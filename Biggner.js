const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const Master = document.getElementById("Master");
const paypal = document.getElementById("paypal");
const mybutton = document.getElementById("mybutton");
const result = document.getElementById("result");

mybutton.onclick = () => {
    if (subscribe.checked) {
        result.innerHTML = "You are Subscribed";
    } else if (visa.checked) {
        result.innerHTML = "You selected Visa";
    } else if (Master.checked) {
        result.innerHTML = "You selected MasterCard";
    } else if (paypal.checked) {
        result.innerHTML = "You selected PayPal";
    }
};
