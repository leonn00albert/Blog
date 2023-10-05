function checkCookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            return true; 
        }
    }
    return false; 
}

if (!checkCookie('do-not-track-homestead-the-internet')) {
    var clickyScript = document.createElement('script');
    clickyScript.async = true;
    clickyScript.setAttribute('data-id', '101428823');
    clickyScript.src = 'https://static.getclicky.com/js';
    document.head.appendChild(clickyScript);
}

function setCookie(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + "; path=/";
}


function handleClick() {
    setCookie('do-not-track-homestead-the-internet', '1', 365); // Expires in 365 days
    alert('Analytics disabled. You can now reload the page.');
}

var disableAnalyticsLink = document.getElementById('disableAnalyticsLink');
if (disableAnalyticsLink) {
    disableAnalyticsLink.addEventListener('click', handleClick);
}