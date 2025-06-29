function runBgTask() {
    const fn = window["_"].throttle(function () {
        let end = Date.now() + 40 + Math.random() * 90;
        while (Date.now() < end) { }
    }, 20);
}
window.bgTask = function () {
    setTimeout(runBgTask, 1);
}

document.addEventListener("DOMContentLoaded", function () {
    if (location.href.includes("showNewsletterSignup")) {
        const div = document.createElement("div");
        div.id = "newsletter"
        div.style = "position: absolute; left: 10px; top: 10px; bottom: 10px; right: 10px; background: #fafafa; border: 1px solid #eee; padding: 10px; border-radius: 4px; box-shadow: 0px 0px 5px #333;display: flex;flex-direction: column;justify-content: center;"
        let fontSize = document.body.clientWidth > 500 ? 75 : 50
        div.innerHTML = '<h1 style="margin-top: 40px;text-align: center; font-size: ' + fontSize + 'px; line-height: ' + (fontSize * 1.75) + 'px;">Sign up for our newsletter</h1>' +
            '<div style="text-align: center">' +
            '<p style="margin-top: 20px">Stay updated with the latest travel tips, destination highlights, and exclusive offers from Adventure Tours.</p>' +
            '<div style="margin-top: 40px"><label>Enter your email address below!</label><br/><input style="margin-top: 4px; margin-bottom: 10px; padding: 8px; border-radius: 4px; width: 400px; max-width: 100%" type="email"/><br/><button onClick="delay(30);document.querySelector(\'#newsletter\').remove()" style="background: #044262; font-size: 20px; color: white; border: none; border-radius: 4px; padding: 10px 20px;margin-top: 10px;">Subscribe</button></div>'
            + '</div>'
        document.body.appendChild(div);
    }
});
window.delay = function (ms) {
    const e = Date.now() + ms;
    while (Date.now() < e) { }
}
