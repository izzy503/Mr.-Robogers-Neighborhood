window.onload = function () {
    function beepBoop(number) {
        const outputList = [];

        for (let i = 0; i <= number; i++) {
            let outputValue = i.toString();
            if (outputValue.includes("3")) {
                outputValue = "Won't you be my neighbor?";
            } else if (outputValue.includes("2")) {
                outputValue = "Boop!";
            } else if (outputValue.includes("1")) {
                outputValue = "Beep!";
            }

            outputList.push(outputValue);
        }

        return outputList;
    }

    function generateOutput() {
        const userInput = document.getElementById("userInput").value;
        const outputElement = document.getElementById("output");
        const outputList = beepBoop(parseInt(userInput, 10));
        outputElement.textContent = outputList.join(", ");
      }
      