$(document).ready(function() {
	$('.img img').lazyload({
      effect : "fadeIn"
	});
	// menu function //
	$('.button a').click(function () {
	  var target = '#' + $(this).data('target')
	  var $target = $(target)
	  if ($('.content').hasClass('active')) {
	    $('.content').removeClass('active')
	  }
	  if ($('.nav').hasClass('active')) {
	  	$('.nav').removeClass('active')
	  }
	  if ($('.menu').hasClass('focus')) {
	  	$('.menu').removeClass('focus')
	  }
	  $target.addClass('active');
	});
	// mobile menu function //
	$('.menu').click(function() {
		$('.nav').addClass('nav-mobile')
		$('.nav').toggleClass('active');
		$('.menu').toggleClass('focus');
	})
	// logo background //
	$('.button a').mouseover(function () {
	  var x = $(this).parent().index()
	  logoPosition = x * -1170
	  var target = $(this).data('target')
	  logoBG = "url('./img/" + target + ".jpg')"
	  $('.logo img').css({
	  	'background':logoBG,
	  	'background-position':logoPosition
	  });
	})
	// links-button //
	$('.links-btn').click(function() {
		$('.footer').toggleClass('footer-mobile');
	})
	// view-box //
	var $image = $('.img');
	var imageViewer = $('.image-viewer');
	var imageContnet = $('.main-image');
	var $next = $('.next');
	var $prev = $('.prev');
	var $info = $('.info');

	// image-viewer //
	$image.click(function(){
	  var mainImage = $(this).html();
	  if($image.hasClass('open')) {
	    $image.removeClass('open');  
	  }
	  $(this).addClass('open');
	  imageViewer.fadeIn(200);
	  imageContnet.html(mainImage);
	  imageContnet.find('img').removeAttr('style');
	})
	// next/prev button //
	$next.click(function() {
	  var all = $('.open').siblings('.img').andSelf().length;
	  if ($('figure.open').index() === all - 1 ) {
	    return;
	  } 
	  $('.open').removeClass('open').next().toggleClass('open');
	  var main = $('.open').html();
	  imageContnet.html(main);
	  imageContnet.find('img').removeAttr('style');
	})
	$prev.click(function() {
	  var all = $('.open').siblings('.img').length;
	  if ($('figure.open').index() === 0) {
	    return;
	  } 
	  $('.open').removeClass('open').prev().toggleClass('open');
	  var main = $('.open').html();
	  imageContnet.html(main);
	  imageContnet.find('img').removeAttr('style');
	})
	$('.viewer-close').click(function() {
	  imageViewer.fadeOut(200);
	  $image.removeClass('open');
	  imageContnet.empty();
	})
	// show photo info //
	$info.click(function() {
	  imageContnet.find('img').toggleClass('blur');
	  imageContnet.find('figcaption').fadeToggle(200);
	})
	// article-viewer //
	var $tab = $('.tab')
	var articleViewer = $('.article-viewer')
	var articleContnet = $('.main-article');
	$tab.click(function(){
	  var article = '#' + $(this).data('article')
	  var $article = $(article)
	  var mainArticle = $article.html();
	  articleViewer.fadeIn(200);
	  articleContnet.html(mainArticle);
	})
	$('.viewer-close').click(function() {
	  articleViewer.fadeOut(200);
	  articleContnet.empty();
	})
})
