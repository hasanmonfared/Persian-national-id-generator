document.getElementById('GenerateNationalId').addEventListener('click', function () {
    let numberRandomOrg = Math.floor(100000000 + Math.random() * 900000000).toString()
    let numberRandom = numberRandomOrg.split('')
    let sum = 0
    let i = 2
    numberRandom.reverse().forEach(function (value) {
        sum += value * i
        i += 1
    })
    let numberController = sum % 11
    if (numberController >= 2) {
        let cNum = 11 - numberController

        document.getElementById('showId').innerHTML = numberRandomOrg.toString() + cNum.toString() + '<br>'
    }
})

