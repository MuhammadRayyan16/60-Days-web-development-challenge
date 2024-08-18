let txt = document.getElementById("inputBox");
document.getElementsByName("format-option").forEach(function (e, index) {
    e.addEventListener("click", () => {
        formatText(index);
    });
});

const formatText = (index) => {
    switch (index) {
        case 0:
            txt.value = txt.value.toUpperCase();
            break;
        case 1:
            txt.value = txt.value.toLowerCase();
            break;
        case 2:
            txt.value = capitalizeSentences(txt.value);
            break;
        case 3:
            txt.value = capitalizeWords(txt.value);
            break;
    }
}

const capitalizeWords = (str) => {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

const capitalizeSentences = (str) => {
    let sentences = str.split(". ");
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    return sentences.join(". ");
}
