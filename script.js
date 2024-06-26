let inputText = document.getElementById('textarea')
const criptografButton = document.getElementById('criptografButton')
const descriptografButton = document.getElementById('descriptografButton')
const copyButton = document.querySelector('.copyButton')
const textDescripted = document.querySelector('.textDescripted')
const manImage = document.getElementById('manImage')
const text__first = document.getElementById('text__first')
const text__second = document.getElementById('text__second')
const descriptedBox__img = document.getElementById('descriptedBox__img')

descriptografButton.addEventListener('click', () => {
    let textContent = inputText.value
    function verificarString(textContent) {
        if (/[A-ZÀ-ÖØ-Ý]/.test(textContent)) {
            return false;
        }
        
        if (/[À-ÖØ-öø-ÿ]/.test(textContent)) {
            return false;
        }

        return textContent
    }

    textDescripted.innerHTML = verificarString(textContent).replace(/ai/gi, 'a')
    .replace(/imes/gi, 'i')
    .replace(/enter/gi, 'e')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
    textDescripted.style.display = 'block'
    copyButton.style.display = 'block'
    manImage.style.display = 'none'
    text__first.style.display = 'none'
    text__second.style.display = 'none'
    descriptedBox__img.style.justifyContent = 'space-between'

})

criptografButton.addEventListener('click', () => {
    let textContent = inputText.value

    function verificarString(textContent) {
        
        if (/[A-ZÀ-ÖØ-Ý]/.test(textContent)) {
            return false;
        }
        
        
        if (/[À-ÖØ-öø-ÿ]/.test(textContent)) {
            return false;
        }
    
        return textContent
    }
    

    let arrText = verificarString(textContent).split("")
    for(i in arrText){
        
        if(arrText[i] == 'e'){
            arrText[i] = 'enter'
        }
        if(arrText[i] == 'i'){
            arrText[i] = 'imes'
        }
        if(arrText[i] == 'a'){
            arrText[i] = 'ai'
        }
        if(arrText[i] == 'o'){
            arrText[i] = 'ober'
        }
        if(arrText[i] == 'u'){
            arrText[i] = 'ufat'
        }
    }
    let ArrToString = arrText.join("");
    inputText.value = ''
    textDescripted.style.display = 'block'
    textDescripted.innerHTML = ArrToString
    copyButton.style.display = 'block'
    manImage.style.display = 'none'
    text__first.style.display = 'none'
    text__second.style.display = 'none'
    descriptedBox__img.style.justifyContent = 'space-between'

})

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(textDescripted.innerHTML)
    textDescripted.innerHTML = '<p>Nenhuma mensagem</p>'
})

