const getButton = document.querySelector("button");
getButton.addEventListener("click", function () {
    const divEl = document.querySelector("div");
    const yas = document.querySelector("input[name='yas']").value;
    let result = 2023 - yas;
    divEl.innerHTML = `Yaşınız ${result}, gidecek çok yolunuz var!`;


    // I dont need any comments in this page

    if ((!Number.isFinite(result))) {
        divEl.innerHTML = `Sadece sayı giriniz!`;
    }

    if (result > 65) {
        divEl.innerHTML = `Yaşınız ${result}, uzun ömürler dilerim!`
    }

    if (result > 110) {
        divEl.innerHTML = `Ya uzun süredir yaşıyorsunuz ya da hiç var olmadınız!`;
    }


});