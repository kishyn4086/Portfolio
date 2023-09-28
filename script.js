const galleryOneImages = ["https://i.postimg.cc/5yNLQy6t/image1.png", "https://i.postimg.cc/kG18QCbv/image2.png", "https://i.postimg.cc/zD0nZCcH/image3.png", "https://i.postimg.cc/X7q9VrRH/image4.png", "https://i.postimg.cc/vBv5mf8j/image5.png"];
let currentIndexOne = 0;


const galleryTwoImages = ["https://i.postimg.cc/FzLvFsGf/image1.jpg", "https://i.postimg.cc/HkHrNfs0/image2.jpg", "https://i.postimg.cc/XvYpjd5p/image3.jpg", "https://i.postimg.cc/V651TFCW/image4.jpg", "https://i.postimg.cc/pdcMDn6h/image6.jpg", "https://i.postimg.cc/1XpdYgJK/image7.jpg", "https://i.postimg.cc/mryGh5Qw/image8.jpg", "https://i.postimg.cc/7LTHK9r8/image9.jpg", "https://i.postimg.cc/hGnTnXDY/image10.jpg"];
let currentIndexTwo = 0;

const galleryThreeImages = ["https://i.postimg.cc/9Q3PJWkL/druckerei.jpg","https://i.postimg.cc/X7BcfZsZ/druckerei2.jpg", "https://i.postimg.cc/fWprXSxF/image1.jpg", "https://i.postimg.cc/4dMHyPkW/image2.jpg", "https://i.postimg.cc/BQFH8rvH/image3.jpg", "https://i.postimg.cc/141gczz6/image4.jpg", "https://i.postimg.cc/3wtv57L5/image5.jpg", "https://i.postimg.cc/Nj7XDRm0/image6.jpg", "https://i.postimg.cc/k5JbpDvv/image7.jpg"];
let currentIndexThree = 0;


const galleryFourImages = ["https://i.postimg.cc/7ZKmZvhD/image1.png", "https://i.postimg.cc/Kjh5Hxq7/image2.png", "https://i.postimg.cc/SQcdzYRg/image3.png", "https://i.postimg.cc/8cdb8992/image4.png", "https://i.postimg.cc/YSynbcB8/image5.png"];
let currentIndexFour = 0;


const galleryFiveImages = ["gallery6/image1.png", "gallery6/image2.jpg", "gallery6/image3.jpg", "gallery6/image4.jpg", "gallery6/image5.jpg",  "gallery6/image6.jpg",  "gallery6/image7.jpg", "gallery6/image8.jpg", "gallery6/image9.jpg", "gallery6/image10.jpg", "gallery6/image11.jpg","gallery6/image12.jpg", "gallery6/image13.jpg"];
let currentIndexFive = 0;


const gallerySixImages = ["gallery7/image1.jpg", "gallery7/image2.jpg", "gallery7/image3.jpg", "gallery7/image4.jpg", "gallery7/image5.jpg", "gallery7/image6.jpg","gallery7/image7.jpg", "gallery7/image8.jpg", "gallery7/image9.jpg", "gallery7/image10.jpg", "gallery7/image11.jpg"];
let currentIndexSix = 0;


const gallerySevenImages = ["gallery8/image1.jpg", "gallery8/image2.jpg", "gallery8/image3.jpg", "gallery8/image4.jpg", "gallery8/image5.jpg", "gallery8/image6.jpg", "gallery8/image7.jpg", "gallery8/image9.jpg", "gallery8/image10.jpg"];
let currentIndexSeven = 0;


const galleryEightImages = ["gallery9/image1.jpg", "gallery9/image2.jpg", "gallery9/image3.jpg", "gallery9/image4.jpg", "gallery9/image5.jpg", "gallery9/image6.jpg", "gallery9/image7.jpg", "gallery9/image8.jpg", "gallery9/image9.jpg", "gallery9/image10.jpg" ];
let currentIndexEight = 0;

const galleryNineImages = ["footer/donut1.jpg", "footer/donut2.jpg", "footer/donut3.jpg"];
let currentIndexNine = 0;




const currentImageOne = document.getElementById("current-image");
const leftOverlayOne = document.getElementById("left-overlay");
const rightOverlayOne = document.getElementById("right-overlay");

const currentImageTwo = document.getElementById("current-image-2");
const leftOverlayTwo = document.getElementById("left-overlay-2");
const rightOverlayTwo = document.getElementById("right-overlay-2");

const currentImageThree = document.getElementById("current-image-3");
const leftOverlayThree = document.getElementById("left-overlay-3");
const rightOverlayThree = document.getElementById("right-overlay-3");

const currentImageFour = document.getElementById("current-image-4");
const leftOverlayFour= document.getElementById("left-overlay-4");
const rightOverlayFour = document.getElementById("right-overlay-4");

const currentImageFive = document.getElementById("current-image-5");
const leftOverlayFive= document.getElementById("left-overlay-5");
const rightOverlayFive= document.getElementById("right-overlay-5");

const currentImageSix = document.getElementById("current-image-6");
const leftOverlaySix= document.getElementById("left-overlay-6");
const rightOverlaySix= document.getElementById("right-overlay-6");

const currentImageSeven = document.getElementById("current-image-7");
const leftOverlaySeven= document.getElementById("left-overlay-7");
const rightOverlaySeven= document.getElementById("right-overlay-7");

const currentImageEight = document.getElementById("current-image-8");
const leftOverlayEight= document.getElementById("left-overlay-8");
const rightOverlayEight= document.getElementById("right-overlay-8");

const currentImageNine= document.getElementById("current-image-9");
const leftOverlayNine= document.getElementById("left-overlay-9");
const rightOverlayNine= document.getElementById("right-overlay-9");



function createGallery(images, currentIndex, currentImage, leftOverlay, rightOverlay, galleryIndex) {
  function updateImage() {
    currentImage.src = images[currentIndex];
    const imageCount = document.getElementById(`image-count-${galleryIndex}`);
    imageCount.textContent = `Fig. ${currentIndex + 1} of ${images.length}`;
  }

  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }
  
    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    }
  
    rightOverlay.addEventListener("click", showNextImage);
    leftOverlay.addEventListener("click", showPreviousImage);
  
    return {
      updateImage,
      showNextImage,
      showPreviousImage,
    };
  }
  
  const galleryOne = createGallery(
    galleryOneImages,
    currentIndexOne,
    currentImageOne,
    leftOverlayOne,
    rightOverlayOne,
    1
  );
  
  const galleryTwo = createGallery(
    galleryTwoImages,
    currentIndexTwo,
    currentImageTwo,
    leftOverlayTwo,
    rightOverlayTwo,
    2
  );
  
  const galleryThree = createGallery(
    galleryThreeImages,
    currentIndexThree,
    currentImageThree,
    leftOverlayThree,
    rightOverlayThree,
    3
  );
  
  const galleryFour = createGallery(
    galleryFourImages,
    currentIndexFour,
    currentImageFour,
    leftOverlayFour,
    rightOverlayFour,
    4
  );
  
  const galleryFive = createGallery(
    galleryFiveImages,
    currentIndexFive,
    currentImageFive,
    leftOverlayFive,
    rightOverlayFive,
    5
  );

  const gallerySix = createGallery(
    gallerySixImages,
    currentIndexSix,
    currentImageSix,
    leftOverlaySix,
    rightOverlaySix,
    6
  );

  const gallerySeven = createGallery(
    gallerySevenImages,
    currentIndexSeven,
    currentImageSeven,
    leftOverlaySeven,
    rightOverlaySeven,
    7
  );

  const galleryEight = createGallery(
    galleryEightImages,
    currentIndexEight,
    currentImageEight,
    leftOverlayEight,
    rightOverlayEight,
    8
  );
  

  const galleryNine = createGallery(
    galleryNineImages,
    currentIndexNine,
    currentImageNine,
    leftOverlayNine,
    rightOverlayNine,
    9
  );



  // toggleevent
  var input = document.getElementById('toggleswitch');
  var leftside = document.getElementById('left');
  var rightside = document.getElementById('right');

  // var outputtext = document.getElementById('statustwo');


  input.addEventListener('change',function(){
      if(this.checked) {
          rightside.style.display='none';
          leftside.style.display='block';
          window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        leftside.style.display='none';
        rightside.style.display='block';
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  });


