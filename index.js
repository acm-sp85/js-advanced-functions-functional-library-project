const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      for (const property in collection) {

        callback(collection[property])
      }
      return collection

    },

    map: function (testArr, callback) {

      const arrayResult = []
      for (const property in testArr) {
        arrayResult.push(callback(testArr[property]))
      }
      return arrayResult

    },

    reduce: function (testArr, callback, acc = -2) {


      for (const property in testArr) {

        acc = callback(acc, testArr[property], testArr)

      }

      return acc


    },

    find: function (intArr, predicate) {
      for (const property in intArr) {

        if (predicate(intArr[property])) {
          return intArr[property]
        }

      }


    },

    filter: function (intArr, predicate) {
      const filtered = []
      for (const property in intArr) {

        if (predicate(intArr[property])) {
          filtered.push(intArr[property])
        }

      }
      return filtered


    },

    size: function (collection) {

      let counter = 0
      for (const element in collection) {
        counter++
      }
      return counter

    },

    first: function (array, n) {

      const newArray = []

      if (n === undefined) {
        return array[0]
      }
      for (const element in array) {
        if (n > 0) {
          newArray.push(array[element])
          n = n - 1

        }
      }

      return newArray

    },
    last: function (array, n) {

      const newArray = []

      if (n === undefined) {
        return array[array.length - 1]
      }
      for (const element in array) {
        if (n > 0) {

          newArray.push(array[array.length - n])
          n = n - 1

        }
      }

      return newArray

    },
    compact: function (array) {
      const arrayCopy = []

      for (const e in array) {
        if (array[e]) {
          arrayCopy.push(array[e])
        }
      }

      return arrayCopy


    },
    sortBy: function (array, callback) {
      
      
      const newArr = []
      const sortedArray = []

      for(const e in array){
        newArr.push(array[e])
      }


      return newArr.sort(function (a, b) { 
          return callback(a) - callback(b) 
         })

         

    },
    flatten: function (array, shallow = "") {

      const newArray = []

      if (shallow) {

        mildDig(array)

      } else {

        dig(array)

      }

      function dig(array) {
        for (const e in array) {
          if (typeof array[e] === "object") {

            dig(array[e])
          } else {
            newArray.push(array[e])

          }
        }

      }

      function mildDig(array) {

        newArray.push(array[0])
        for (const e in array) {

          for (const elmnt in array[e]) {
            newArray.push(array[e][elmnt])
          }
        }

      }

      return newArray

    },

    uniq: function (array,isSorted, callback){
      const newArray = []
      if (isSorted){
        for(const e in array){

          newArray.push(array[e])
          console.log("array was already sorted")
        }


      } else {

        newArray.push(array.sort((a,b) => a-b))
        console.log("array wasn't sorted")

        for(const e in array){
          if(array[e] === array[e+1]){
            array.splice(e+1,1)
          }
        }

      }
      console.log(newArray)
      return newArray


    },
    keys: function (object){
      const objectKeys= []
      for(const key in object){
        objectKeys.push(key)
      }
      return objectKeys
    },
    values: function (object){
      const values = []
      for(const key in object){
        values.push(object[key])
      }
      return values

    },
    functions: function(object){
      const functions = []
      for(const key in object){
        if(typeof object[key] === "function"){
          functions.push(key)
        }
      }
      return functions
    }


  }
})()

fi.libraryMethod()






