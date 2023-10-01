import {GenerateAllCards} from "../assets/js/cardsManager/generateCards.js";
import {SetDeleteListeners, SetSearchListener} from "../assets/js/userActionsListeners.js";
import {ReadUrl} from "../assets/js/Navigation/URLManager.js";

GenerateAllCards();
ReadUrl();
SetDeleteListeners();
SetSearchListener();

