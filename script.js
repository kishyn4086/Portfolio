
const galleryOneImages = ["gallery1/image1.jpg", "gallery1/image2.jpg", "gallery1/image3.jpg", "gallery1/image4.jpg", "gallery1/image5.jpg"];
let currentIndexOne = 0;

const galleryTwoImages = ["gallery2/image1.jpg", "gallery2/image2.jpg", "gallery2/image3.jpg", "gallery2/image4.jpg", "gallery2/image5.jpg"];
let currentIndexTwo = 0;

const galleryThreeImages = ["gallery3/image1.jpg", "gallery3/image2.jpg"];
let currentIndexThree = 0;

const galleryFourImages = ["gallery4/image1.png", "gallery4/image2.png", "gallery4/image3.png", "gallery4/image4.png", "gallery4/image5.png"];
let currentIndexFour = 0;

const galleryFiveImages = ["gallery5/folding.gif"];
let currentIndexFive = 0;


const gallerySixImages = ["gallery6/image1.png", "gallery6/image2.jpg", "gallery6/image3.jpg", "gallery6/image4.jpg", "gallery6/image5.jpg",  "gallery6/image6.jpg",  "gallery6/image7.jpg", "gallery6/image8.jpg", "gallery6/image9.jpg", "gallery6/image10.jpg", "gallery6/image11.jpg","gallery6/image12.jpg", "gallery6/image13.jpg"];
let currentIndexSix = 0;


const gallerySevenImages = ["gallery7/Brightness.gif"];
let currentIndexSeven = 0;


const galleryEightImages = ["gallery8/image1.jpg", "gallery8/image2.jpg", "gallery8/image3.jpg", "gallery8/image4.jpg", "gallery8/image5.gif"];
let currentIndexEight = 0;


const galleryNineImages = ["gallery9/image1.jpg", "gallery9/image2.jpg", "gallery9/image3.jpg", "gallery9/image4.jpg", "gallery9/image5.jpg", "gallery9/image6.jpg", "gallery9/image7.jpg", "gallery9/image8.jpg", "gallery9/image9.jpg", "gallery9/image10.jpg" ];
let currentIndexNine = 0;

const galleryTenImages = ["gallery10/image1.png", "gallery10/image2.png", "gallery10/image3.png", "gallery10/image4.png", "gallery10/image5.png"];
let currentIndexTen = 0;


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

const currentImageNine = document.getElementById("current-image-9");
const leftOverlayNine= document.getElementById("left-overlay-9");
const rightOverlayNine= document.getElementById("right-overlay-9");

const currentImageTen = document.getElementById("current-image-10");
const leftOverlayTen= document.getElementById("left-overlay-10");
const rightOverlayTen= document.getElementById("right-overlay-10");

function createGallery(images, currentIndex, currentImage, leftOverlay, rightOverlay, galleryIndex) {
  function updateImage() {
    currentImage.src = images[currentIndex];
    const imageCount = document.getElementById(`image-count-${galleryIndex}`);
    imageCount.textContent = `${currentIndex + 1}/${images.length}`;
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

  const galleryTen = createGallery(
    galleryTenImages,
    currentIndexTen,
    currentImageTen,
    leftOverlayTen,
    rightOverlayTen,
    10
  );


  // toggleevent
  var input = document.getElementById('toggleswitch');
  var leftside = document.getElementById('left');
  var rightside = document.getElementById('right');

  // var outputtext = document.getElementById('statustwo');


  input.addEventListener('change',function(){
      if(this.checked) {
          // rightside.style.opacity='0' fadeout
          rightside.classList.add('fadeout');
          leftside.classList.add('fade');
          leftside.style.opacity='1';
          rightside.style.display='none';
          leftside.style.display='block';
          window.scrollTo({ top: 0, behavior: 'smooth' });


      } else {
        rightside.classList.add('fade');
        leftside.classList.add('fadeout');
        leftside.style.display='none';
        rightside.style.display='block';
        rightside.style.opacity='1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
     
      }
  });



//   input.addEventListener('change',function(){
//     if(this.checked) {
//         rightside.style.opacity='0'
//         leftside.style.opacity='10'
//         leftside.classList.add('fade');

//     } else {
//         leftside.style.opacity='0'
//         rightside.style.opacity='10'
//     }
// });


