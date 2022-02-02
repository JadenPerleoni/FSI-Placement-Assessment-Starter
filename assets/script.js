console.log('JavaScript code has loaded!')

let yourName = "Jaden Perleoni" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let totalQuantity = 0
let total = document.querySelector('#qty-total')


// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

const gbQuantity = document.querySelector('#qty-gb')

const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
    gb += 1
    totalQuantity +=1
    gbQuantity.textContent = gb
    total.textContent = totalQuantity

})

const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
        if(gb > 0) { 
            gb -= 1
            totalQuantity -=1
            gbQuantity.textContent = gb
            total.textContent = totalQuantity

        }
       
})


const ccQuantity = document.querySelector('#qty-cc')

const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function() {
    cc += 1
    totalQuantity +=1
    ccQuantity.textContent = cc
    total.textContent = totalQuantity

})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
        if(cc > 0) { 
            cc -= 1
            totalQuantity -=1
            ccQuantity.textContent = cc
            total.textContent = totalQuantity

        }
       
})
   
const sugarQuantity = document.querySelector('#qty-sugar')

const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar += 1
    totalQuantity +=1
    sugarQuantity.textContent = sugar
    total.textContent = totalQuantity

})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
        if(sugar > 0) { 
            sugar -= 1
            totalQuantity -=1
            sugarQuantity.textContent = sugar
            total.textContent = totalQuantity
        }
       
})

    