// Title: Responsive anti-overflow font-size resizer
// Description: Automaticaly reduces font-size if one word is bigger than its container width.
// Author: Gibran Sarraf
// URL: https://gibransarraf.com/
// Demo: https://gibransarraf.com/antioverflowfontresizer/

//--------------------------------------------------
//  DON'T USE, THIS CODE IS ONLY FOR THE DEMO PAGE
//--------------------------------------------------

(function ( $ ) {
    $.fn.aofsr = function( options ) {
        
        //-----------------------------
        //  Adjust font size function
        //-----------------------------
        function fontAdjust(txt,contWidth,textWidth,maxFontSize) {
            // If overflow is true
            if ( textWidth > contWidth ) {
                fontSize = ( contWidth * maxFontSize / textWidth ).toFixed(2);
                txt.css('font-size', fontSize + 'px');
                console.log('%c'+
                    ' Reduced from: ' + maxFontSize + ' to ' + fontSize + 'px ',
                    'background:red;color:white'
                );
                txt.parent().find(".js").html( '<b>JS</b> = ' + fontSize + 'px' );
                txt.parent().find(".css").html( '<b>CSS</b> = ' + maxFontSize + 'px' );
            }
        }

        this.each( function() {

            // Select the text
            var
            txt = $(this);

            // Define default options
            var
            settings = $.extend({
                phraseMode: false,
            }, options );
    
            // Variables
            var
            prevContWidth,
            contWidth,
            textWidth,
            maxFontSize,
            loaded = false;

            //------------------------------------
            //  Listen on Load and window Resize
            //------------------------------------
            $(window).on('load resize', function () {
    
                // Update text container Width
                contWidth = txt.innerWidth();
    
                // Load (First time)
                if (!loaded) {
                    // Phrase mode
                    if ( settings.phraseMode ) {
                        txt.css('white-space','nowrap');
                    }
                    // Avoid word break
                    txt.css({'word-break':'normal','word-wrap':'normal'});
                    // Text content width
                    textWidth = txt[0].scrollWidth;
                    // Max font size = Current font size
                    maxFontSize = parseInt(txt.css('font-size'));
    
                    // Welcome message
                    console.log('%c'+
                        ' Container width: ' + contWidth + 'px \n'+
                        ' Content width: ' + textWidth + 'px \n'+
                        ' Max Font Size: ' + maxFontSize + 'px \n'+
                        ' Phrase Mode: ' + settings.phraseMode + ' ',
                        ' background:black;color:white'
                    );
                    // Adjust font size
                    fontAdjust(txt,contWidth,textWidth,maxFontSize);
                    // Current container width
                    prevContWidth = contWidth;
                    loaded = true;
    
    
                // On window resize
                } else {
                    console.log('%c'+
                        ' Window resized ',
                        'background:grey;color:white'
                    );
                    // Check if text container changed
                    if (prevContWidth != contWidth) {
                        //	Widths difference
                        console.log('%c'+
                            ' Container ' + prevContWidth + ' != ' + contWidth + ' ',
                            ' background:yellow;color:black'
                        );
                        // Reset font-size
                        txt.css('font-size','');
                        txt.parent().find(".js").html( '' );
                        // Max font size = Current font size
                        maxFontSize = parseInt(txt.css('font-size'));
                        txt.parent().find(".css").html( '<b>CSS</b> = ' + maxFontSize + 'px' );
                        // Check if overflow happens
                        textWidth = txt[0].scrollWidth;
                        //  Adjust Font Size
                        fontAdjust(txt,contWidth,textWidth,maxFontSize);
                        // Current container width
                        prevContWidth = contWidth;
                    }
                }
            })
        });
        return this;
    };
}( jQuery ));