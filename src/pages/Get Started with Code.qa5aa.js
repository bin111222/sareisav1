$w.onReady(function () {
    // Basic quiz functionality
    $w('#myButton').on('click', function () {
        const skinToneValue = $w('#skinToneSlider').value;

        // Simple color recommendation logic
        if (skinToneValue <= 33) {
            $w('#resultText').text = "Light Pink Lip Color";
        } else if (skinToneValue <= 66) {
            $w('#resultText').text = "Rose Lip Color";
        } else {
            $w('#resultText').text = "Deep Berry Lip Color";
        }
    });

    // Reset functionality
    $w('#resetButton').on('click', function () {
        $w('#skinToneSlider').value = 50;
        $w('#resultText').text = "Select your skin tone";
    });
});