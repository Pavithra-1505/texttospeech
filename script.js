var speech= new SpeechSynthesisUtterance();
const languageSelect = document.getElementById('language-select');
function speak(){
    const selectedLanguage = languageSelect.value;
    var text = document.getElementById('textTospeak').value;
    speech.text=text;
    speech.lang = selectedLanguage;

    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}