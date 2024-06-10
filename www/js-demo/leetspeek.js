"use strict";

let textareaEingabe = null;

let divErgebnis = null;


/**
 * Nimmt Initialisierungen vor, sobald die Seite geladen ist.
 */
document.addEventListener( "DOMContentLoaded", function() {

    textareaEingabe = document.getElementById( "eingabe" );
    if (! textareaEingabe ) {

        console.error( "<textarea> nicht gefunden." );
        return;
    }

    divErgebnis = document.getElementById( "ergebnis" );
    if (! divErgebnis ) {

        console.error( "<div>-Element für Ergebnis nicht gefunden." );
        return;
    }

    console.log( "Seite initialisiert." );
});


/**
 * Event-Handler für Button "Übersetzen".
 */
function onUebersetzenButton() {

    divErgebnis.innerHTML = "";

    const eingabe = textareaEingabe.value.trim();

    if ( eingabe.length === 0 ) {

        divErgebnis.innerHTML  =
            "<strong>FEHLER:</strong> Bitte geben Sie einen Text zum Übersetzen ein!";

    } else {

        divErgebnis.innerHTML =
                "<strong>Übersetzungsergebnis: </strong>" +
                    eingabe.replace( /a/gi , "4" )
                           .replace( /b/gi , "8" )
                           .replace( /e/gi , "3" )
                           .replace( /g/gi , "9" )
                           .replace( /i/gi , "1" ).replace( /l/gi , "1" )
                           .replace( /o/gi , "0" )
                           .replace( /s/gi , "5" )
                           .replace( /z/gi , "2" );
    }

    return false;
}


/**
 * Event-Handler für Button "Zurücksetzen".
 */
function onZuruecksetzenButton() {

    textareaEingabe.value = "";
    divErgebnis.innerHTML = "";

    return false;
}
