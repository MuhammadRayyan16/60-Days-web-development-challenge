const reversestr = (str) => {
    let splitstr = str.split("");
    let reverseArray = splitstr.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

const Palindrome = () => {
    let msg = document.getElementById('msg').value;
    let ans = document.getElementById('answer');
    msg = msg.toLowerCase();

    if (msg === reversestr(msg)) {
        ans.innerText = "The entered string is a palindrome";
    } else {
        ans.innerText = "The entered string is not a palindrome";
    }
}
