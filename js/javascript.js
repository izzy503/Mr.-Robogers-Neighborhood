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

// Test 1: It should return an array of numbers from 0 to the user's inputted number
const test1 = beepBoop(0);
console.log(test1); // Expected Output: [0]

// Test 2: It should replace numbers that contain a "1" with "Beep"
const test2 = beepBoop(1);
console.log(test2); // Expected Output: [0, "Beep"]

// Test 3: It should replace numbers that contain a "2" with "Boop"
const test3 = beepBoop(2);
console.log(test3); // Expected Output: [0, "Beep", "Boop"]

// Test 4: It should replace numbers that contain a "3" with "Won't you be my neighbor?"
const test4 = beepBoop(13);
console.log(test4); // Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]