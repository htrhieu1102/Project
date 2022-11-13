let rangeFilter = $('.range-filter');
$('.show-range-value').html(rangeFilter.val());
$(rangeFilter).on('input', () => {
    $('.show-range-value').html(rangeFilter.val());
})
