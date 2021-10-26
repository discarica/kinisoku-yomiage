async function readKinisoku() {
    let threads = document.getElementsByTagName("h1")

    Array.prototype.forEach.call(threads, async thread => {
        var speak   = new SpeechSynthesisUtterance()
        speak.text  = thread.innerText
        speak.rate  = 1
        speak.pitch = 1
        speak.lang  = 'ja-JP'
        speechSynthesis.speak(speak)

        let resses = thread.parentElement.querySelectorAll("[id^='resid']");
        Array.prototype.forEach.call(resses, res => {
            let resText = res.querySelector("b span span")
            if (resText) {
                speak   = new SpeechSynthesisUtterance()
                speak.text  = resText.innerText
                speak.rate  = 1
                speak.pitch = 1
                speak.lang  = 'ja-JP'
                speechSynthesis.speak(speak);
            }
        })
    })
}


chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: readKinisoku
	})
})