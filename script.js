const overview = document.querySelector('.overview');
const overviewButtton = document.getElementById('1');
const profileButton = document.getElementById('2');
const profile = document.querySelector('.profile');
const content = document.querySelector('.content');


overviewButtton.addEventListener('click',()=>{
    if(overview.style.display === 'none'){
        overview.style.display = "block";
    }else{
        overview.style.display = "none";
    }
});

profileButton.addEventListener('click',()=>{
    if(profile.style.display === 'none'){
        profile.style.display = "block";
    }else{
        profile.style.display = "none";
    }
})