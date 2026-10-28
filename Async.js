//1
let arr = [1,2,3,4,5,6,7,8,9,0];
arr.forEach((c,i,t)=>{
    //console.log(c); // 1
    console.log(i);
    console.log(t);
})

//2
let newMap = arr.map((c,i,t)=>{
    return c;
})
console.log("Map:", newMap);

//3
let emp1 = [
    {name: "a" , score: 45},
    {name: "b" , score: 8},
    {name: "c" , score: 55},
    {name: "d" , score: 19},
    {name: "e" , score: 32}
]
let newFilt = emp1.filter((c,i,t)=>{
    return c.score>=20
})
console.log(newFilt);  /*{name: "a" , score: 45},
    {name: "c" , score: 55},
    {name: "e" , score: 32} */

//4
let emp2 = [
    {name: "aa" , salary: 500000},
    {name: "bb" , salary: 700000},
    {name: "cc" , salary: 680000},
    {name: "dd" , salary: 240000},
    {name: "ee" , salary: 930000},
    {name: "ff" , salary: 400000}
]
let newFilter = emp2.filter((c,i,t)=>{
    return c.salary>=300000
})
console.log(newFilter);

//5
let newFind = emp2.find((c,i,t)=>{
    return c.salary>200000
})
console.log(newFind); //{name: "aa" , salary: 500000}

//6
let newRed = emp2.reduce((acc,c,i,t)=>{
    return acc+c.salary
},0)
console.log(newRed); //3450000

//7
let newSome =arr.some((c,i,t)=>{
    return c%2==0
})
console.log(newSome); // true

//8
let newEve = arr.every((c,i,t)=>{
    return c>0
})
console.log(newEve); // false

//9
let ss = [3,67,89,67000,14,0]
let newSort = ss.sort((a,b)=>{
    return a-b;
})
console.log(newSort); // [0,3,14,67,89,67000]

//10
let newSort2 = ss.sort((a,b)=>{
    return b-a;
})
console.log(newSort2);// [67000,89,67,14,3,0]

//11 charAt()
let str = "Javascript";
console.log(str.charAt(4)); // s

//12 charcodeAt()
console.log(str.charCodeAt(2)); //118

//13 trim()
let str1 = " javascript";
console.log(str1.trim()); //"javascript"

//14 
console.log(str.toUpperCase()); //JAVASCRIPT
console.log(str.toLowerCase()); //javascript

//15
console.log(str.includes("script")); // true

//16
let str3 = "JAVA SCRIPT"
console.log(str3.startsWith("JAVA")); // true
console.log(str.endsWith(" script")); // false

//17
let x = "javaispopular , java can be learnt";
let result = x.replaceAll("java", "python");
console.log(result);

//18
let sp = "html-css-javascript-react";
console.log(sp.split()); // [html-css-javascript-react]

//19
let names = ["kavipriya", "suriya"]
console.log(names.join(",")) // kavipriya,suriya

//20
let sc = "Mom to be soon";
console.log(sc.slice(0,3)) // Mom

//21
let data = new Date();
console.log(data); //Wed Oct 28 2026 14:25:40 GMT+0530 (India Standard Time)
console.log(data.getFullYear()); //2026
console.log(data.getMonth()); //9
console.log(data.getDay()); //3

//22
let month =   ["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"];
let now = new Date();
let curMon = month[now.getMonth()];
console.log(curMon);

//23
console.log(data.getHours());  // 14 hours
console.log(data.getMinutes());  // 40 minutes
console.log(data.getSeconds()); // 8 sec

//24
data.setFullYear(2003);
data.setDate(30);
data.setMonth(0);
console.log(data); //Thu Jan 30 2003 14:46:46 GMT+0530 (India Standard Time)

//25
setTimeout(()=>{
    console.log("Welcome to JavaScript")
},3000);

//26
let newInt = setInterval(()=>{
    console.log("Learning JavaScript")
},2000);

//27
setTimeout(()=>{
    clearInterval(newInt)
},8000);

//28
function one(){
    console.log("one");
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}

one();
setTimeout(two,0);
three(); // output : one
//                   three
//                   two

//29
let login = new Promise(function(resolve, reject) {
    resolve("Login successful");
});

login.then(function(result) {
    console.log(result);
});

//30
let rej = new Promise(function(resolve,reject){
    reject("Invalid Password");
});
rej.catch(function(ans){
    console.log(ans);
});

//31
let results = new Promise(function(resolve, reject) {
    resolve("Success");
});

results
    .then(function(message) {
        console.log(message);
    })
    .finally(function() {
        console.log("Process completed");
    });

//32 
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

//33 
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(product) {
            console.log(product.title);
        });
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

//34
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

//35
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.warn("API Error:", error.message);
    });

//35
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.warn("API Error:", error.message);
    })
    .finally(function() {
        console.log("API call completed");
    });

//36
let obj = [
    {empName:"akshay",salary: 670000},
    {empName:"akil", salary: 550000},
    {empName:"vikram",salary: 23000}
];
let xx = obj.filter((c,i,t)=>{
    return c.salary<300000;
})
console.log(xx);
obj.forEach((c,i,t)=>{
console.log(c.empName);
console.log(c.salary);
})

//37
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let products = data.map(function(item) {
            return {
                title: item.title,
                price: item.price
            };
        });

        console.log(products);
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    });

//38
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let result = data.filter(function(item) {
            return item.category === "jewelery";
        });

        console.log(result);
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    });

//39
let numbers = [10, 20, 30, 40, 50];

// map()
let mapped = numbers.map(function(num) {
    return num * 2;
});
console.log("Map:", mapped);

// filter() 
let filtered = numbers.filter(function(num) {
    return num > 20;
});
console.log("Filter:", filtered);

// reduce()
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log("Reduce:", total);

// some() 
let checkSome = numbers.some(function(num) {
    return num > 40;
});
console.log("Some:", checkSome);

// every() - 
let checkEvery = numbers.every(function(num) {
    return num > 5;
});
console.log("Every:", checkEvery);

//40
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(item) {
            console.log("Title:", item.title);
            console.log("Price:", item.price);
            console.log("Category:", item.category);
            console.log("----------------------");
        });
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    })
    .finally(function() {
        console.log("Product listing completed");
    });