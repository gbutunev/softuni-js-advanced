function extract(content) {
    let el = document.getElementById(content);
    let all = [];
    let re = /\((.*?)\)/g;

    const matches = el.textContent.matchAll(re);

    for (const match of matches) {
        all.push(match[1]);
    }

    return all.join("; ");
}