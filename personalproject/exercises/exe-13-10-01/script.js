const infoArray=[
    {
        name:"farank",
        lname:"Rahimi",
        age:35,
        eyeColor:"Braun",
        img :"faranak.jpg"
    },
    {
        name:"Kateryna",
        lname:"Shyrokova",
        age:19,
        eyeColor:"Blue",
        img :"Kateryna Shyrokova.jpg" 
    },
    {
        name:"Meleke",
        lname:"Ozou",
        age:35,
        eyeColor:"Braun",
        img :"melek.png" 
    },
];

    infoArray.forEach(info => {
    
    const el = document.querySelector("ul");
    const  li = document.createElement("li");
            el.appendChild(li);
            const newContent = document.createElement("p");
            newContent.innerHTML=info.name;
            li.appendChild(newContent);
            const newContent1 = document.createElement("p");
            newContent1.innerHTML = info.lname;
            li.appendChild(newContent1);
            const newContent2 = document.createElement("p");
            newContent2.innerHTML = info.age;
            li.appendChild(newContent2);
            const newContent3 = document.createElement("p");
            newContent3.innerHTML = info.eyeColor;
            li.appendChild(newContent3);
            const newContent4 = document.createElement('img');
            newContent4.src=info.img;
            li.appendChild(newContent4); 
});
 



