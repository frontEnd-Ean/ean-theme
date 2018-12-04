/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function(context, settings) {

    }
  };

  $('.eventos-modulo .view-content > div').each(function() {
    var cant = $(this).find('.datetime').length;

    var str = $(this).html();
    // console.log(str);
    var res = str.replace(" - ", "");
    $(this).html(res);
    // console.log(res);

    $(this).find('.datetime').each(function(cant) {
      $(this).addClass('last-' + cant);

      var conEspacio = $(this).html();

      var sinEspacio = conEspacio.replace(" ", "<br />");

      $(this).html(sinEspacio);

    });

    $('p').filter(function() {
      return this.innerHTML == '&nbsp;';
    }).remove();

  });


  /**
   * ::::::: Back To Top :::::::
   */

  // Show or hide the sticky footer button
  var $back_to_top = $('[data-js="back-to-top"]');
  var $back_top_speed = 500;
  var $offset_fade = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > $offset_fade) {
      $($back_to_top).fadeIn($offset_fade);
    } else {
      $($back_to_top).fadeOut($offset_fade);
    }
  });

  // Animate the scroll to top
  $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, $back_top_speed);
  });



if ($('.form-contacto').length > 0 && $('.interna-programa').length > 0) {
    /**
     * :::::::  Call To Action :::::::
     */
    var $ac_show_offset = 300;
    var $ac_show_width = 768;
    var $ac_wrap = $('[data-js="action-call-wrap"]');


    $(window).scroll(function() {
      if ($(window).width() < $ac_show_width) {
        if ($(this).scrollTop() > $ac_show_offset) {
          $ac_wrap.show();
        } else {
          $ac_wrap.hide();
        }
      }
    });
  }
  /**
   * :::::::  Scroll Smooth for Anchor :::::::
   */

  $(document).on('click', '.action-call-btn', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 65
    }, 500);
  });

  $(document).on('click', '.ancla-form', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#form-programa').offset().top - 80
    }, 500);
  });


  // Tabs en Ofertas académicas

  var titulos = [],
    cantTitulos = $('.field--name-field-metodologia').length;


  $('.field--name-field-metodologia').each(function() {
    var titulo = $(this).text();
    // var titulo = $(this).find('.field__item a').text();
    console.log(titulo);
    titulos.push(titulo);
  });


  $('#tab-metodologia li').each(function(cantTitulos) {
    $(this).find('a').text(titulos[cantTitulos]);
    $(this).find('a').attr('href', '#' + titulos[cantTitulos]);


  });

  $('.tab-content .tab-pane').each(function(cantTitulos) {
    $(this).attr('id', titulos[cantTitulos]);
    $(this).attr('aria-labelledby', titulos[cantTitulos]);
  });

  // console.log(cantTitulos, titulos);


  // mostrar Botón

  if ($(window).width() >= 768) {
    $(window).scroll(function() {
      if ($('#form-programa').visible(true)) {
        $('.ancla-form').hide();
      } else {
        $('.ancla-form').show();
      }
    });
  }

  // Animación Números
  if ($('.counter').length > 0) {
    $('.counter').before('<span class="falso">0</span>');
    var show = true;
    var countbox = ".datos";
    $(window).on("scroll load resize", function() {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        // if ($('.counter').visible(true)) {
        $('.counter').show();
        $('.falso').hide();
        $('.counter').spincrement({
          from: 1,
          // fade: false,
          thousandSeparator: ",",
          // decimalPlaces: 4,
          duration: 1200
        });
        // console.log(w_top, e_top);

        show = false;
      }
    });

  }

  // altura h2 productos
  function altura($valor) {
    if ($valor.length > 0) {
      var max = -1;
      $valor.each(function() {
        $(this).css('height', 'auto');
        var h = $(this).height();
        max = h > max ? h : max;
      });
      $valor.height(max);
    }
  }

  var ancho = $(window).width();

  if (ancho >= 768) {
    $(document.body).on('post-load', function() {
      // altura($('.programas-grid .grid'));
    });
    $(window).resize(function() {
      // altura($('.programas-grid .grid'));
    });
  }

  if ($('#tab-metodologia').length > 0) {


    var link = $('#tab-metodologia').offset();
    // console.log(link);

    //enlace a la cabecera del tab
    $('#tab-metodologia').find('a').on('click', function() {
      console.log('clic en el tab', link);
      $('html, body').animate({
        scrollTop: $('.field--name-field-informacion-complementaria').offset().top - 250
      }, 500);
    });
  }
  if ($(window).width() >= 1200) {
    $(window).scroll(function() {
      if ($('header.principal').visible(true)) {
        $('.logo-fixed').fadeOut();
      } else {
        $('.logo-fixed').fadeIn();
      }

    });
  }

  $('#p_sap').on('click',  function(event) {
    event.preventDefault();
    cerrar();
  });

  $('a[href="#ModalBuscador"]').on('click',  function(event) {
    event.preventDefault();
    console.log('buenas');
    // cerrar();
    $('.ModalBuscador').modal('toggle');
  });



  //Cerrar modal
  function cerrar() {
      $('#myModal').on('shown.bs.modal', function (e) {
          $("#myModal").modal('hide');
      })
  }


    $('.btnRecibirInfo').click(function() {
        $('#form-programa').css('border', '2px solid #3BAC53');
        setTimeout(function() {
            $('#form-programa').css('border', '0px solid transparent');
        }, 4000);
    });
 
})(jQuery, Drupal);


