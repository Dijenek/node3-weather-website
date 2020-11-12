
// adding simple comment
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

if (weatherForm) {
    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const location = search.value
    
        const url = '/weather?address=' + location
        

        messageOne.textContent = 'LOADING...'
        messageTwo.textContent = ''

        fetch(url).then((response) => {
            response.json().then((data) => {        
                if (data.error) {
                    messageOne.textContent = ''
                    messageTwo.textContent = data.error
                }
                else {
                    messageOne.textContent = data.address
                    messageTwo.textContent = data.forecast
                }        
        
            })
        })
    })
}

else {
    console.log('weatherForm is null for some reason')
}

