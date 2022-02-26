window.onload = () => {
    toggleNavbar();
    showModal();
    hideModal();
}
const toggleNavbar = () => {
    const mobileNav = document.querySelector('.ul-mobile');
    document.querySelector('.toggle-nav-btn').onclick = () => {
        mobileNav.classList.toggle('d-none');
    }
    window.onresize = () => {
        const width = window.innerWidth;
        if(width > 768){
            mobileNav.classList.add('d-none');
        }
    }
}

const showModal = () => {
    var galleryImg = document.getElementsByClassName('gallery-img');
    var modal = document.querySelector('#modal');
    var imgBox = document.querySelector('#modal-img');
    var videoBox = document.querySelector('#modal-video');
    for(let i=0;i<galleryImg.length;i++){
        galleryImg[i].onclick = (e) => {
            var imgSrc = e.target.getAttribute("src");
            imgBox.src = imgSrc;
            imgBox.style.display = "block";
            videoBox.style.display = "none";
            modal.style.display = "block";
        }
    }
    document.getElementById('play-icon').onclick = () => {
          imgBox.style.display = "none";
          videoBox.style.display = "block";
          modal.style.display = "block";
    }
   
}

const hideModal = () => {
    document.querySelector('#hide-modal').onclick = () => {
        document.querySelector('#modal').style.display = "none";
        document.querySelector('#modal-video').removeAttribute("src");
        document.querySelector('#modal-video').setAttribute("src", "https://player.vimeo.com/video/31199236?h=29d1afd5ec")
    }
}