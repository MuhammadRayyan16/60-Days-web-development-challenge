let index = 0;

const changecolor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'teal'];

    document.getElementsByTagName("body")[0].
        style.backgroundColor = colors[index++];

    if (index >= colors.length) {
        index = 0;
    }
} 