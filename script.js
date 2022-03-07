let user = document.querySelector('.search__input');
let button = document.querySelector('.search__button')
let avatar = document.querySelector('.user__avatar');
let userName = document.querySelector('.user__name');
let userAt = document.querySelector('.user__at');
let userJoined = document.querySelector('.user__joined');
let userBio = document.querySelector('.user__bio');
let repos = document.querySelector('.user__info__repos');
let followers = document.querySelector('.user__info__followers');
let following = document.querySelector('.user__info__following');
let userLocation = document.querySelector('.user__location');
let userEmail = document.querySelector('.user__email');
let userTwitter = document.querySelector('.user__tt');
let userCompany = document.querySelector('.user__company');

button.addEventListener('click', function click(){

    fetch(`https://api.github.com/users/${user.value}`)
        .then(function(respostaServidor){
            data = respostaServidor.json();
            return data;
        }).then (function(respostaConvertida) {
            avatar.setAttribute('src',respostaConvertida.avatar_url);
            userName.textContent = respostaConvertida.name;
            userAt.textContent = '@'+ respostaConvertida.login;
            userJoined.textContent = respostaConvertida.created_at;
            userBio.textContent = respostaConvertida.bio;
            repos.textContent = respostaConvertida.public_repos;
            followers.textContent = respostaConvertida.followers;
            following.textContent = respostaConvertida.following;
            userLocation.textContent = respostaConvertida.location;
            userEmail.textContent = respostaConvertida.email;
            userTwitter.textContent = respostaConvertida.twitter_username;
            userCompany.textContent = respostaConvertida.company;
        })
})


let theme = document.querySelector('.header__theme');
let themeBody = document.querySelector('body');
let themeSearch = document.querySelector('.search__container');
let themeContent = document.querySelector('.content__container');
let themeUser = document.querySelector('.user__container');
let themeheader = document.querySelector('.header__container');
let themeSearchInput = document.querySelector('.search__input');
let themeIcon = document.querySelector('.theme__icon');



theme.addEventListener('click',()=>{
    themeBody.classList.toggle('dark');
    themeSearch.classList.toggle('dark');
    themeContent.classList.toggle('dark');
    themeUser.classList.toggle('dark');
    themeheader.classList.toggle('dark');
    themeSearchInput.classList.toggle('dark');
    if(theme.textContent === 'Dark'){
        theme.textContent = 'Light';
        themeIcon.setAttribute('src',"./assets/sunny.png");

    }else{
        theme.textContent = 'Dark';
        themeIcon.setAttribute('src',"./assets/moon.png");
    }
})
