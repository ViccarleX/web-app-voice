document.addEventListener('DOMContentLoaded', function () {
    const voiceInput = document.getElementById('voiceInput');
    const identifyBtn = document.getElementById('identifyBtn');
    const resultDiv = document.getElementById('result');

    // Verificar si el navegador soporta reconocimiento por voz
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        identifyBtn.addEventListener('click', function () {
            // Iniciar reconocimiento por voz
            recognition.start();
        });

        // Manejar los resultados del reconocimiento por voz
        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            voiceInput.value = transcript;
            resultDiv.innerHTML = `<p>Orden identificada: <strong>${transcript}</strong></p>`;
        };

        // Manejar errores del reconocimiento por voz
        recognition.onerror = function (event) {
            resultDiv.innerHTML = `<p>Error en el reconocimiento de voz. Por favor, inténtalo de nuevo.</p>`;
        };
    } else {
        // Mostrar un mensaje si el navegador no soporta reconocimiento por voz
        resultDiv.innerHTML = `<p>Lo siento, tu navegador no soporta reconocimiento por voz.</p>`;
        identifyBtn.disabled = true;
    }
});



