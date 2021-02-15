const openHam = () => {

    const nav = document.querySelector('.header-nav').classList.toggle('open');
    const line1 = document.querySelector('.line-1').classList.toggle('open');
    const line2 = document.querySelector('.line-2').classList.toggle('open');
    const line3 = document.querySelector('.line-3').classList.toggle('open');
    const links = document.querySelector('.header-links').classList.toggle('open');
    console.log("click");

}







const hamburger = document.querySelector('.hamburger').addEventListener('click', openHam);




