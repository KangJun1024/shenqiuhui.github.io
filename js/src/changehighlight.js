$(function () {
  $('.highlight').each(function (idx, val) {
    var figcaption = $(val);
    var isTitle = figcaption.find('figcaption').length;
    if (isTitle) {
      figcaption.addClass('code-has-title');
    }
  });
});
