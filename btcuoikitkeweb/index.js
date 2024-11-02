let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    // kiemtra
    if (index >= slides.length) {
        currentSlide = 0; // vuot qua so luong hinh anh thi quay lai
    } else if (index < 0) {
        currentSlide = slides.length - 1; //neu am thi chuyen anh cuoi dung cho nut previous
    } else {
        currentSlide = index; 
    }
    
    //an nhung anh con lai neu khong co no bi de anh nen can co
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // hien thi hinh anh hien tai
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction); //chay ham
}

// auto chuyen slide sau 3s
setInterval(() => {
    changeSlide(1);
}, 3000);

// bat dau hien thi slide dung de nhet vao html
showSlide(currentSlide);
