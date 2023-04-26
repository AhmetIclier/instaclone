"use strict";

let posts = [
    {
        "author": "Ahmet Iclier",
        "profilePic": "ahmet-avatar.jpg",
        "postimg": "1.jpg",
        "likecount": 123456,
        "caption": "das ist die Beschreibung des Posts",
        "comments": ["AI 1", "AI 2", "AI 3"]
    },
    {
        "author": "Developer Akademie",
        "profilePic": "ahmet-avatar.jpg",
        "postimg": "2.jpg",
        "likecount": 1235,
        "caption": "neues Office in München",
        "comments": ["da 1", "da 2", "da 3"]
    },
    {
        "author": "Ahmet Iclier",
        "profilePic": "ahmet-avatar.jpg",
        "postimg": "3.jpg",
        "likecount": 123456,
        "caption": "das ist die Beschreibung des Posts",
        "comments": ["ai 1", "ai 2", "ai 3"]
    },
    {
        "author": "Mr. unknown",
        "profilePic": "ahmet-avatar.jpg",
        "postimg": "4.jpg",
        "likecount": 123456,
        "caption": "das ist die Beschreibung des Posts",
        "comments": ["u 1", "u 2", "u 3"]
    },
];

function render() {
    let post = document.getElementById('post-area');
    post.innerHTML = '';
    
    for (let i = 0; i<posts.length; i++) {
        const dieserPost = posts[i];
            post.innerHTML += `
            <div class="post-item">
                <div class="post-title">
                    <div class="flexstart">
                        <img src="img/${dieserPost['profilePic']}" class="profile-pic">
                        <span class="user-name">${dieserPost['author']}</span>
                    </div>
                    <span class="material-symbols-outlined menu-icon">more_vert</span>
                </div>
                <div class="post-img">
                    <img src="img/${dieserPost['postimg']}" ondblclick="like(${i})">
                </div>
                <div id="interactions" class="interaction-container">
                    <div class="interaction-span">
                        <div class="left">
                            <span id="like${i}" class="material-symbols-outlined" onclick="like(${i})">favorite</span>
                            <span class="material-symbols-outlined">chat_bubble</span>
                            <span class="material-symbols-outlined">near_me</span>
                        </div>
                        <div class="right">
                            <span class="material-symbols-outlined">bookmark</span>
                        </div>
                    </div>
                    <div class="like-area">Gefällt <span id="like-counter${i}">${dieserPost['likecount']}</span> Mal</div>
                    <div class="caption-section">
                        <span class="caption">${dieserPost['author']}</span>${dieserPost['caption']}
                    </div>
                    <div id="comment-section${i}" class="comment-section">
                    </div>
                    <div class="flex-between">
                    <input id="newComment${i}" class="comment-input" type="text" placeholder="Kommentar hinzufügen..."><button onclick="addComment(${i})" class="comment-button">Posten</button>
                    </div>
                    </div>
                </div>
            </div>
            `;
        }
updateComments();
}

function updateComments() {
    for (let i = 0; i<posts.length; i++) {      //Schleife für jeden Post
        let kommentarsektion = document.getElementById(`comment-section${i}`); // Kommentarsektion in variable packen
        kommentarsektion.innerHTML = ''; // kommentarsektion leeren
        const dieserPost = posts[i];    // einzelnen Post in variable packen für zuordnung der kommentare
        
        for(let j = 0; j<dieserPost["comments"].length; j++) { // zweite schleife um kommentare-array aus jedem post zu durchlaufen
            kommentarsektion.innerHTML += `
            <span class="comment-author">User${j}</span>${dieserPost['comments'][j]}<br> 
            `
        }
    }
}


function renderCounter(i) {
    let counter = document.getElementById(`like-counter${i}`);
    counter.innerHTML = posts[i]["likecount"];

}

function like(i) {
    let currentPost = posts[i];         //gelikeder post
    let currentStatus = document.getElementById(`like${i}`).classList.contains('liked'); // prüfen ob class liked drin ist
    let currentclasses = document.getElementById(`like${i}`).classList;                 // classlist vom Post
    if (currentStatus) {
        currentPost['likecount'] -=1;
        currentclasses.remove('liked');
        renderCounter(i);
    } else {
        currentPost['likecount'] +=1;
        currentclasses.add('liked');
        renderCounter(i);
    }
}



function addComment(i) {
    let kommentar = document.getElementById(`newComment${i}`).value;
    let post = posts[i];

    post['comments'].push(kommentar);

    document.getElementById(`newComment${i}`).innerHTML = '';
    render();
}




