import {RunFilter} from "../cardsManager/filterCards.js";

function ReadUrl() {

    let url = window.location;
    let params = new URLSearchParams(url.search);
    RunFilter(params);

}


function NavigateToUrl(params) {

    let currentParams = (new URL(window.location)).searchParams;
    params.forEach((value, key) => {
            if (currentParams.has(key)) {
                currentParams.set(key, value);
            } else {
                currentParams.append(key, value)
            }
        }
    );
    window.location = window.location.origin+"/TheCollection/search/?"+params;
}

export {NavigateToUrl,ReadUrl}