var pic = document.getElementById("image");
var search = document.getElementById("btn");
var paragraph = document.getElementById("words");

var one = {
    imagesrc: "https://en.pimg.jp/055/074/856/1/55074856.jpg",
    name: "bento",
    adjective: "tasty",
    verb: "Grab"
}

var two = {
    imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tB9Bc-cDJdow0CoxjMX_99Y0Gh-u1j4EEw&usqp=CAU",
    name: "salmon",
    adjective: "savoury",
    verb: "Enjoy"
}

var three = {
    imagesrc: "https://t3.ftcdn.net/jpg/02/48/02/76/360_F_248027618_JJ1D4wvr5hffQUbxyhCwVlE0eDT5w2B5.jpg",
    name: "burrito",
    adjective: "huge",
    verb: "Handle"
}

var four = {
    imagesrc: "https://thumbs.dreamstime.com/b/digital-illustration-cartoon-sushi-cute-cartoon-sushi-112894039.jpg",
    name: "sushi",
    adjective: "appetizing",
    verb: "Anticipate"
}

var five = {
    imagesrc: "https://media.istockphoto.com/vectors/funny-sandwich-cartoon-illustration-in-retro-style-vector-id1335300811?k=20&m=1335300811&s=612x612&w=0&h=oobAHE0iwcoM0KojQHTXV57RjYPDTud2lB8p-0_2MMw=",
    name: "sandwich",
    adjective: "great",
    verb: "Partake"
}

var foods = [one, two, three, four, five];

search.addEventListener("click", function(){
    console.log("pressed");
    var rando = Math.floor((Math.random() * 4));
    console.log(rando);
    console.log(foods[rando]);
    pic.src = foods[rando].imagesrc;
    paragraph.innerHTML = foods[rando].verb + " " + foods[rando].adjective + " " + foods[rando].name;
    search.innerHTML = "Try Again?";
})