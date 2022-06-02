const func1 = () => {
    return new Promise((resolve, reject) => {
        const user = { username: 'Maktab_76', type: 'Admin' };
        if (user.username === 'kimia') {
            resolve(user);
        } else {
            reject('not matched');
        }

    });

}

const func2 = () => {
    return new Promise((resolve, reject) => {
        const product = { title: 'book' };
        if (product.title === 'book') {
            resolve(product);
        } else {
            reject('title not matched');
        }

    })
};

let promise = func1();

promise.then(function (data) {
    console.log("data", data);
    return func2();
})
.catch(error=>{
    console.log(error)
});

promise.then((data)=>{ 
func1();
func2();});