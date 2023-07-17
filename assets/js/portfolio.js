function exitFullpage() {
  //$('#img-gallery').removeClass('active');
  $('#img-gallery').removeAttr('style');
  $('#img-gallery').toggleClass(['active', 'inactive']);
  $('body').css('overflow-y', 'visible');
}

function enterFullPage() {
  $('#img-gallery').toggleClass(['active', 'inactive']);
  $('#img-gallery').css({
    backgroundImage: 'url(' + this.src + ')',
    top: window.scrollY + 'px',
    height: window.outerHeight + 'px',
  });
  $('body').css('overflow-y', 'hidden');
}

$('img:not(#header-img)').on('click', enterFullPage);
$('#img-gallery').on('click', exitFullpage);
$(document).on('keydown', exitFullpage);

// Adjust the top margin of the first section, so there is no content overlap:
const firstSection = $('section:first-of-type');
const navBar = $('#nav-bar');

function addBtnListener(selector) {
  $(`#btn-${selector}-more`).on('click', () => {
    $(`#btn-${selector}-more`).css({ visibility: 'hidden' });
    $(`#${selector}-2`).css({ display: 'block' });
  });

  $(`#btn-${selector}-less`).on('click', () => {
    $(`#btn-${selector}-more`).css({ visibility: 'visible' });
    $(`#${selector}-2`).css({ display: 'none' });
  });
}

const sections = [
  'mekanika',
  'pequena-banda-robotica',
  'household-music',
  'phd',
  'music',
  'dald',
];
sections.forEach((selector) => {
  addBtnListener(selector);
});
