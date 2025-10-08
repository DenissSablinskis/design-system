$(document).ready( () => {

    $('.color').on('mouseenter', event => {
        $(event.currentTarget).find('.background h2:first, .background h3').toggleClass('hidden');
        $(event.currentTarget).find('.description').toggleClass('hidden');
    });

    $('.color').on('mouseleave', event => { 
        $(event.currentTarget).find('.description').toggleClass('hidden');
        $(event.currentTarget).find('.background h2:first, .background h3').toggleClass('hidden');
    });


    const $preview = $('.preview');

    $('#text').on('keyup', event => {
        const $value = $(event.currentTarget).val();
        $preview.html($value);
    });

    $('#font').on('change', event => {
        const $value = $(event.currentTarget).val(); 
        $preview.css('fontFamily', $value);
    });

    $('#weight').on('change', event => {
        const $value = $(event.currentTarget).val(); 
        $preview.css('fontWeight', $value);
    });

    $('#style').on('change', event => {
        const $value = $(event.currentTarget).val(); 
        $preview.css('fontStyle', $value);
    });

     $('#size').on('change', event => {
        const $value = $(event.currentTarget).val(); 
        $preview.css('fontSize', $value);
    });

    $('#element').on('change', event => {
        const $value = $(event.currentTarget).val(); 
        $('#right').find('div').hide();
        $(`#right .${$value}`).fadeIn('slow');
        const $weight = $(`#right .${$value} .weight`).text();
        const $font = $(`#right .${$value} .font`).text();
        const $size = $(`#right .${$value} .size`).text();
        const $style = $(`#right .${$value} .style`).text();
        $(`#right .${$value} h1`).css('fontFamily', $font);
        $(`#right .${$value} h1`).css('fontWeight', $weight);
        $(`#right .${$value} h1`).css('fontSize', $size);
        $(`#right .${$value} h1`).css('fontStyle', $style);
    });

});