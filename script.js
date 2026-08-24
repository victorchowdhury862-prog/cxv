function multiplyNumbers() {
            // 1. Get values from the input elements
            const value1 = document.getElementById("num1").value;
            const value2 = document.getElementById("num2").value;

            // 2. Convert text strings into decimals (floating-point numbers)
            const number1 = parseFloat(value1);
            const number2 = parseFloat(value2);

            // 3. Validate that both fields contain numbers
            if (isNaN(number1) || !Number.isFinite(number2)) {
                document.getElementById("result").innerText = "Please enter valid numbers";
                return;
            }
              // 4. Calculate the product using the * operator
            const product = number1 * number2;

            // 5. Output the result back to the HTML page
            document.getElementById("result").innerText = product;
        }
        