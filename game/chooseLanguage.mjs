import { DICTIONARY } from "./dictionary.mjs";
import { clearScreen } from "../utils/io.mjs";

let enLang = DICTIONARY.en;
let noLang = DICTIONARY.no;

function chooseLanguage()
{
    let languageItemCount = 0;
    return [ 
        {
            text: enLang.ENGLISH, id: languageItemCount++, action: function () {
                clearScreen();
                
            }
        },
        {
            text: "Norsk", id: languageItemCount++, action: function () {
                clearScreen();
            }
        }

    ];
}

export default chooseLanguage;