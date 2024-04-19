// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


document.querySelectorAll('.filter-button').forEach(button => { //filter-button is the class name of the buttons, and we are selecting all of them. 
    button.addEventListener('click', () => {//adding an event listener to each button. 
        const filter = button.dataset.filter; //filter is the name of the variable that we are using to represent the data-filter attribute of each button. dataset is the data attribute of the button, and filter is the name of the data attribute.

        // Remove 'active' class from all buttons
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button. 
        button.classList.add('active');

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block'; //block is the display property of the item.
            } else {
                item.style.display = 'none'; //none is the display property of the item. 
            }
        });
    });
});