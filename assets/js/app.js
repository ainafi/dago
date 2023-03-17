$(document).ready(function () {
    $('.owl-carousel').owlCarousel()
    $(".map").googleMap()
    $(".avenuedubaobab").addMaker({
        coords:[-2025033,44.419266],
        id:'maker1'
    })
    $(".Diego-Suarez").addMaker({
        coords:[-12.2292015,49.2773511],
        id:'maker2'
    })

    

    
   
})