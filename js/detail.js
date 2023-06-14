// const big = document.querySelector(".detail_main img");
// const small = document.querySelectorAll("#small li a");

// for(let i=0; i<small.length; i++) {
//     small[i].addEventListener("click", function(e){
//     const New= this.href;
//     big.setAttribute("src",New);
//     e.preventDefault();
//     });


$(function () {
    $("#small>li>a").click(function () {
        $(".detail_main img").attr("src", $(this).attr("href"));
        return false;
    })

});