/*1) Promise.any() մեթոդը
 function anyPromise(arr){
  return new Promise(function(res,rej){
   arr.forEach(p=>{
   p.then(function(result){
    return res(result)
   }).catch(e=>e.message)
   })
  })
 } */



/*2) Promise.allSettled() մեթոդը

function allSettled(arr){
return new Promise(function(res,rej){
//let obj={}
let results=[]
arr.forEach((p,i)=>{
p.then(function(result){
 let obj={}
obj.status='fulfilled',
obj.value=result
results.push(obj)
res(results)
}).catch(function(err){
  let obj={}
obj.status='rejected',
obj.value=err
results.push(obj)
rej(results)
})
})
})
}
 */


3) Promise.race() մեթոդը


function racePromise(arr){
    return new Promise(function(res, rej){
        arr.forEach(p=>{
            p.then(function(result){
                res(result)
            })
            p.catch(function(e){
                rej(e.message)
            })

        })
    })
}




function createPromise(err,value,ms){
    return new Promise(function(res,rej){
        setTimeout(function(){
            if(err){
                rej(err)
            }else{
                res(value)
            }
        },ms)
    })
}

let arr=[
    createPromise(null,1,3000),
    createPromise(null,2,5000),
    createPromise(new Error('Hello'),3,2000),
    createPromise(null,4,4000),
]

/*   let arr=[

    createPromise(new Error('Hello1'),1,1000),
    createPromise(new Error('Hello2'),2,2000),
    createPromise(new Error('Hello3'),3,3000),

  ] */

let promises = racePromise(arr)
promises.then(function(val){
    console.log(val)
}).catch(e=> console.log(e))

