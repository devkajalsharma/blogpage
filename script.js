
// const filterItem = document.querySelectorAll(".filter-item");
// const gallaryItem = document.querySelectorAll(".post-box ")
$(document).ready(function(){
$(".filter-item").click(function() {
$(this).addClass('active-filter').siblings().removeClass('active-filter')
})

$(".filter-item").click(function(){
const value = $(this).attr('data-filter');


if (value === 'all'){
    $('.post-box').show('1000');
}
else {
    $('.post-box').hide().filter('.' + value).show('1000');
}
})
})
