'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    indexContents(index);
}

function indexContents(obj) {
    const contents = document.querySelector('#index ul');
    const org = [
        "all"
    ];

    for (const content of obj.contents) {
        // indexOf()による判断
        const index = org.indexOf(content.org);
        if (index < 0) {
            org.push(content.org);
        };

        const contentsLi = document.createElement('li');
        contentsLi.classList.add(content.org);
        contents.appendChild(contentsLi);

        const date = document.createElement('u');
        date.textContent = content.date;
        contentsLi.appendChild(date);
        const name = document.createElement('strong');
        name.textContent = content.name;
        contentsLi.appendChild(name);
        const description = document.createElement('small');
        description.textContent = content.description;
        contentsLi.appendChild(description);
    };

    for (const orgEach of org.sort()) {
        const nav = document.querySelector('#index nav');
        const input = document.createElement('input');
        input.setAttribute('name', 'org');
        input.setAttribute('type', 'radio');
        input.id = orgEach;
        input.value = orgEach;
        if (orgEach == "all") {
            input.checked = true;
        };

        const label = document.createElement('label');
        label.textContent = orgEach;
        label.setAttribute('for', orgEach);

        nav.appendChild(input);
        nav.appendChild(label);

        input.addEventListener('change', () => {
            let targets = document.querySelectorAll("#index ul li");
            for (let ii of targets) {
                ii.hidden = false;
                let item_data = ii.getAttribute('class');
                if (orgEach && orgEach !== 'all' && orgEach !== item_data) {
                    ii.hidden = true;
                };
            };
        }, false);
    };
};

async function fetchHTML(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerHTML => {
            document.querySelector(query).innerHTML = innerHTML;
        }, false);
};

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        }, false);
};