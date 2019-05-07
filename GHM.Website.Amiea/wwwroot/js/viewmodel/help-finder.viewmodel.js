// GLOBALS

var caf_configurations_array = new Array();
var caf_descriptions_array = new Array();
var caf_images_array = new Array();
var caf_natural_images_array = new Array();
var only_two_fieldsets = false;
var makeSelectionText = "";
var initialLoadId = '';
var initialLoadTimestamp = '';
var initialClickTimestamp = '';
var amieaModTimestamp = '';
var amieaUseTime = '';

// GLOBALS ENDE

// MDG ---START

function Generator() { };
Generator.prototype.rand = Math.floor(Math.random() * 20000000 + 1) + Date.now();
Generator.prototype.getId = function () {
    return this.rand++;
};


$('.caf-input-wrapper').click(function () {
    set_first_configurator_click_timestamp();
});

function generate_unique_id() {

    var idGen = new Generator();
    if (initialLoadId === '') {
        initialLoadId = 'amiea' + idGen.getId();
    }
    //    console.log(initialLoadId);
}

function set_first_configurator_click_timestamp() {

    if (initialClickTimestamp === '') {
        initialClickTimestamp = jQuery.now();
        //        console.log( initialClickTimestamp + ' initial CLICK timestamp');
    }

}

function set_first_visit_timestamp() {

    if (initialLoadTimestamp === '') {
        initialLoadTimestamp = jQuery.now();
    }
    //    console.log(initialLoadTimestamp + ' initial VISIT timestamp');
}


function amiea_tracking_send() {

    var amiea_id = initialLoadId;
    var amiea_pageload = initialLoadTimestamp;
    var amiea_first_click = initialClickTimestamp;
    var amiea_ts_modified = amieaModTimestamp;
    var amiea_use_time = amieaUseTime;
    var response_success = '';
    var response_error = '';

    if (amiea_first_click == '' || amiea_first_click < 0) {
        return;
    }


    jQuery.ajax({
        type: "POST",
        url: configurator_vars_array.ajax_url,
        data: {
            action: 'amiea_safe_tracking',
            amiea_id: amiea_id,
            amiea_pageload: amiea_pageload,
            amiea_first_click: amiea_first_click,
            amiea_ts_modified: amiea_ts_modified,
            amiea_use_time: amiea_use_time,
            security: configurator_vars_array.ajax_nonce
        },
        beforeSend: function () {
            //                    console.log('test vor ajax');
        },
        success: function () {
            //                    console.log('SUCCESS - send amiea - Antwort an sucess');
        },
        complete: function () {
            // console.log('ajax-complete');
        }
    })
        .done(function (response) {
            if (console && console.log) {
                //                    console.log( response );
            }
            response_success = response.success;
            response_error = response.error;
            if (response_success === amiea_id) {
                //                    console.log('hier waren wir successful');
            }
            if (response_error === 'error') {
                response_error_message = response.error_message;
            }
            return;
        });
}

// MDG --- ENDE




function colorAdviceController() {

    var arrayVal = new Array();

    //ValidationCheckFailed prüft, ob alle Optionen gesetzt
    var validationCheckFailed = 0;


    //    arrayVal[0] = parseInt($('#caf-fieldset-line').val());

    $('#caf-fieldset-line .caf-input').each(function () {
        if ($(this).is(':checked')) {
            arrayVal[0] = parseInt($(this).attr('data-num'));
        }
    })


    only_two_fieldsets = false;
    if (arrayVal[0] == 3) {
        //        only_two_fieldsets = true;

    }

    $('.caf-fieldset').each(function (index) {

        if (validate($(this)) == false) {
            validationCheckFailed++;
            arrayVal[index + 1] = 0; // Default, wenn nichts ausgewählt
        }
        else {
            $(this).find('.caf-input').each(function () {
                if ($(this).is(':checked')) {
                    arrayVal[index + 1] = parseInt($(this).attr('data-num'));
                }

            })
        }

    })
    //        console.log(arrayVal);



    // Hier vielleicht mit Typecheck? und Auslagern is Funktion!

    //wenn nur zwei Fieldsets aktiv (aktuell nur bei organic line lips)
    if (only_two_fieldsets == true) {
        arrayVal[3] = 0;
        //        $('#caf-fieldset-2').hide();
        //        $('#caf-fieldset-2-headline').hide();

    }
    else {
        //        $('#caf-fieldset-2').show();
        //        $('#caf-fieldset-2-headline').show();

    }


    console.log(caf_configurations_array);
    console.log(arrayVal[0]);
    console.log(arrayVal[1]);
    console.log(arrayVal[2]);
    console.log(arrayVal[3]);
    var showValue = caf_configurations_array[arrayVal[0]][arrayVal[1]][arrayVal[2]][arrayVal[3]];

    //    var skin_tone_class = "caf-skin-tone-"+arrayVal[2];

    //console.log('validationCheckFailed '+validationCheckFailed);

    if (validationCheckFailed == 0 || (validationCheckFailed == 1 && only_two_fieldsets == true)) {
        //reset
        $('#caf-result-colors-wrapper').text('');
        $('#caf-message-wrapper').text('');

        if (showValue.length <= 0) {

            showValue = 'No product found. Please change hair color.';
            $('#caf-message-wrapper').html(showValue);
            cafUpdateImage(false);

        }
        else {

            for (i = 0; i < showValue.length; i++) {
                var color_markup = '';
                if (caf_descriptions_array[showValue[i]] != undefined) {
                    var color_title = caf_descriptions_array[showValue[i]]['nice_name'] + ' | ' + caf_descriptions_array[showValue[i]]['sn'];
                    var color_description = caf_descriptions_array[showValue[i]]['cd_en'];
                    var color_color = caf_descriptions_array[showValue[i]]['color'];

                    color_markup += '<div class="caf-single-color-wrapper caf-color-temperature caf-color-temperature-' + caf_descriptions_array[showValue[i]]['temperature'] + '">';
                    color_markup += '<div class="caf-single-color-color ' + color_color + '"></div>';
                    color_markup += '<div class="caf-single-color-text-wrapper">';
                    color_markup += '<span class="caf-color-title">' + color_title + '</span>';
                    color_markup += '<span class="caf-color-description">' + color_description + '</span>';
                    color_markup += '</div>';
                    color_markup += '</div>';


                    $('#caf-result-colors-wrapper').append(color_markup);

                }
                else {
                    console.log("caf_descriptions_array[showValue[i]] undefined");
                }



            }

            cafUpdateImage(true, arrayVal[1], arrayVal[3]);
        }
        toggleCafMobileView();
    }

    deactivateOptionsIfnotValid(validationCheckFailed, arrayVal);

    iFramePostMessage();


}


function deactivateOptionsIfnotValid(validationCheckFailed, arrayVal) {
    //reset
    $('.caf-input-wrapper').removeClass('caf-input-wrapper-disabled');
    $('.caf-input-wrapper').find('input').removeAttr('disabled');

    if (validationCheckFailed <= 1) // mindestens zwei von drei optionen sind gesetzt
    {
        //herausfinden, welches filedset nicht gesetzt ist




        var fieldset_string = '';

        $('.caf-fieldset').each(function (index) {
            if (validate($(this)) == false) {
                fieldset_string += '0';
            }
            else {
                fieldset_string += '1';
            }
        });

        //        console.log('fieldset_string '+fieldset_string);


        for (i = 0; i < caf_configurations_array[arrayVal[0]][arrayVal[1]][arrayVal[2]].length; i++) {

            check_array_val = caf_configurations_array[arrayVal[0]][arrayVal[1]][arrayVal[2]][i];

            if (check_array_val != undefined && check_array_val.length == 0) {
                $('#caf-fieldset-2 .caf-input-wrapper:eq(' + i + ')').addClass('caf-input-wrapper-disabled');
                $('#caf-fieldset-2 .caf-input-wrapper:eq(' + i + ')').find('input').attr('disabled', 'disabled');

            }
        }





    }
}


function validate(fieldset) {
    var count = 0;
    var fieldSetWithCheckboxes = fieldset.each(function (index, item) {
        if (($(item).find('input:radio').length > 0 && $(item).find('input:radio:checked').length === 0)) {
            count++;
        }
    });
    return (count > 0) ? false : true;
};




// Load Configuration-File und arrays füllen
function loadConfig(configFile) {
    console.log(configFile);
    jQuery.ajax({
        type: "GET",
        url: configFile,
        dataType: "xml",
        success: function (xml) {



            // Configurations
            //Array-Formatierung: Array[line][skin_type][skin_tone][hair_color]
            $(xml).find('line').each(function (index) {

                caf_configurations_array.push(index);

                caf_configurations_array[index] = new Array();

                $(this).find('skin_type').each(function (index2) {


                    caf_configurations_array[index].push($(this).attr('name'));

                    caf_configurations_array[index][index2] = new Array();

                    $(this).find('skin_tone').each(function (index3) {


                        caf_configurations_array[index][index2].push(index3);

                        caf_configurations_array[index][index2][index3] = new Array();

                        $(this).find('hair_color').each(function (index4) {


                            caf_configurations_array[index][index2][index3].push(index4);

                            caf_configurations_array[index][index2][index3][index4] = new Array();

                            $(this).find('product_color').each(function (index5) {


                                caf_configurations_array[index][index2][index3][index4].push($(this).attr('name'));



                            })


                        })


                    })

                    //



                })

            })
            // Configurations ENDE

            console.log(caf_configurations_array);

            // Descriptions
            $(xml).find('color_description').each(function (index) {

                caf_descriptions_array[$(this).attr('name')] = new Array();
                caf_descriptions_array[$(this).attr('name')]['cd_en'] = jQuery.trim($(this).text());
                caf_descriptions_array[$(this).attr('name')]['nice_name'] = $(this).attr('nice_name');
                caf_descriptions_array[$(this).attr('name')]['sn'] = $(this).attr('sn');
                caf_descriptions_array[$(this).attr('name')]['color'] = $(this).attr('color_class');
                caf_descriptions_array[$(this).attr('name')]['temperature'] = $(this).attr('temperature');


            })


            // Descriptions ENDE


            // Images
            $(xml).find('image_skin_type').each(function (index) {

                caf_images_array[index] = new Array();

                $(this).find('image_hair_color').each(function (index2) {

                    caf_images_array[index][index2] = jQuery.trim($(this).text());
                })


            })

            // Array with natural hair colors
            $(xml).find('image_skin_type').each(function (index) {



                $(this).find('image_hair_color').each(function (index2) {
                    if ($(this)[0].hasAttribute("natural") && $(this).attr('natural') == 'true') {
                        caf_natural_images_array[index] = new Array();
                        caf_natural_images_array[index] = jQuery.trim($(this).text());
                    }
                })


            })

            // Images ENDE

            console.log(caf_natural_images_array);

        }
    });


}
// Load Configuration-File und arrays füllen ENDE


function resetAll() {
    $('.caf-input').prop('checked', false);
    $('#caf-testresult-span').html('');
    $('#caf-result-colors-wrapper').text('');
    $('#caf-message-wrapper').html(makeSelectionText);
    cafUpdateImage(false);

    $('.caf-input-wrapper').each(function () {
        $(this).removeClass('caf-input-wrapper-disabled');
        $(this).find('input').removeAttr('disabled');
    })

}

function adjustConfiguratorHeight(trueorfalse) {

    if (trueorfalse == true) {
        $('#color-advice-result-wrapper').height($('#caf-form-col').height());
    }
    else {
        $('#color-advice-result-wrapper').css('height', 'auto');
    }
}

function toggleCafMobileView() {
    var breakpoint = 1140;

    if ($(window).width() <= breakpoint) {
        $('#caf-form-col').toggleClass('caf-form-col-toggled');
        $('.caf-form-toggle-text-hide').toggle();
        $('.caf-form-toggle-text-show').toggle();
        $("#color-advice-form-wrapper").toggle(500, "swing");
    }
    if ($('div#caf-form-col').hasClass('caf-form-col-toggled')) {
        $("#color-advice-result-wrapper").addClass("result-toggled");
        if ($(window).width() <= breakpoint) {
            adjustConfiguratorHeight(true);
        }
    }
    else {
        $("#color-advice-result-wrapper").removeClass("result-toggled");
        adjustConfiguratorHeight(false);

    }

    $("html, body").animate({ scrollTop: 10 }, 500);


}

function cafUpdateImage(emptyornot, index1, index2) {
    // an Image from configurator changed - interaction
    //amieaModTimestamp = jQuery.now();
    //amieaUseTime = (amieaModTimestamp - initialClickTimestamp);
    ////    console.log( amieaUseTime +  ' --- da ist die usage time ---');
    //// send ajax
    //amiea_tracking_send();
    //console.log("ádasd");
    //console.log(emptyornot);

    if (emptyornot == undefined) {
        emptyornot = true;
    }

    var placeholder_image = 'config_image_placeholder.jpg';

    if (emptyornot == true) {

        var imagename = caf_images_array[index1][index2];

        //wenn für red kein Image, dann das erste nehmen, was es gibt
        //            if(imagename.length == 0)
        //            {
        //                for(i=0;i<caf_images_array[index1].length; i++)
        //                {
        //                    if(caf_images_array[index1][i].length > 0)
        //                    {
        //                        imagename = caf_images_array[index1][i];
        //                        break;
        //                    }
        //                }
        //            }
        //wenn für red kein Image, dann das erste nehmen, was es gibt ENDE

        //            if(only_two_fieldsets == true)
        //            {
        //               var imagename = caf_natural_images_array[index1];
        //            }

        $('#caf-result-image-wrapper img').attr('src', '/images/helpfinder/color_advice/img/' + imagename);
        $('#caf-result-image-wrapper').removeClass('caf-placeholder-wrap');
    }
    else {
        $('#caf-result-image-wrapper').addClass('caf-placeholder-wrap');
        $('#caf-result-image-wrapper img').attr('src', '/images/helpfinder/color_advice/img/' + placeholder_image);

    }
}


// EVENTS

$(".reset").on("click", function () {
    console.log("asdasd");
    resetAll();
});
$(".fresh-mobile").on("click", function () {
    console.log("quy test");
    resetAll();
});
$('.caf-input').on('click', function () {
    colorAdviceController();
});
$('.btn-refesh-mobile').on('click', function () {
    resetAll();
});
$('div.caf-form-toggle').on('click', function () {

    toggleCafMobileView();

})

$('.caf-placeholder-wrap').on('click', function () {

    toggleCafMobileView();

})




$('#caf-reset-all-button').on('tapstart', function (e, touch) { resetAll(); })
    .on('tapend', function (e, touch) { resetAll(); })
    .on('tap', function (e, touches) { resetAll(); })
    .on('singletap', function (e, touch) { resetAll(); })
    .on('taphold', function (e, touch) { resetAll(); })
    .on('doubletap', function (e) { resetAll(); })
    .on('swipe', function (e) { resetAll(); })
    .on('swipeup', function (e) { resetAll();})
    .on('swipedown', function (e) { resetAll(); })
    .on('swipeleft', function (e) { resetAll(); })
    .on('swiperight', function (e) { resetAll(); })
$('#caf-fieldset-line').change(function () {
    //    resetAll();
    colorAdviceController();

});

$(document).ready(function () {
    generate_unique_id();
    set_first_visit_timestamp();

    $('#caf-message-wrapper').html(makeSelectionText);

    var baseUrl = window.location.href.replace("index.html", "");
    loadConfig('color-advice');
    //    adjustConfiguratorHeight();
});

$(window).resize(function () {
    //    adjustConfiguratorHeight();
});



// EVENTS ENDE



//iFrame integration

$(window).resize(function () {
    iFramePostMessage();
});

//$(window).load(function () {
//    iFramePostMessage();
//});


function iFramePostMessage() {
    var windowHeight = $('main').height();

    // Mobil den Aufklappteil beruecksichtigen
    var windowHeight2 = $('#caf-form-row .caf-form-col').height();

    if (windowHeight2 > windowHeight) {
        windowHeight = windowHeight2;
    }



    var offset_bottom = 100;
    var targetDomain = '*';

    window.parent.postMessage('resize:' + (windowHeight + offset_bottom), targetDomain);
}


// //iFrame integration ENDE
