const reviews = [

    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "test text",

    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: "More test text",

    },
    {
        id: 3,
        name: "peter jones",
        job: "analyst",
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: "additional test text",

    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: "additional test text",

    },
]
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");  
const job = document.getElementById("job");  
const info = document.getElementById("info");    

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
});

//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem>reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});