(function ($) {
  var $comments = $('.js-reviews');

  $('.js-form1').submit(function () {
    var form = this;

    $(form).addClass('form--loading');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#review-form-submit').html('{{ site.data.ui-text[site.locale].review_btn_submitted | default: "Submitted" }}');
        $('.page__reviews-form .js-notice').removeClass('notice--danger');
        $('.page__reviews-form .js-notice').addClass('notice--success');
        showAlert('{{ site.data.ui-text[site.locale].review_success_msg | default: "Thanks for your review! It will show on the site once it has been approved." }}');
      },
      error: function (err) {
        console.log(err);
        $('#review-form-submit').html('{{ site.data.ui-text[site.locale].review_btn_submit  | default: "Submit Review" }}');
        $('.page__reviews-form .js-notice').removeClass('notice--success');
        $('.page__reviews-form .js-notice').addClass('notice--danger');
        showAlert('{{ site.data.ui-text[site.locale].review_error_msg | default: "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}');
        $(form).removeClass('disabled');
      }
    });

    return false;
  });
  function showAlert(message) {
    $('.page__reviews-form .js-notice').removeClass('hidden');
    $('.page__reviews-form .js-notice-text').html(message);
  }
})(jQuery);
