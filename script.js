const fileInput = document.getElementById('inputFile');
const upBtn = document.getElementById('upBtn');
const h1F = document.getElementById('test1');
const userPounds = document.getElementById('userPounds');
const userFeet = document.getElementById('userFeet');
const userInches = document.getElementById('userInches');
const BMIcalc = document.getElementById('BMIcalc');
const h2F = document.getElementById('test2');





function adjCall() {
    const fileFinal = fileInput.files[0];

    if (fileFinal) {
        const readerF = new FileReader();

        readerF.onload = async(e) => {
            const str = e.target.result;

            let data = {
                clientStr: str
            };

            const response = await fetch('/test1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });


            const res = await response.json();

            const original = res.originalString;
            const count = res.counterV;
            const countC = res.counterC;
            h1F.textContent = "vowels: " + count + " , consonants: " + countC;



        }
        readerF.readAsText(fileFinal);

    } else {
        console.error("select file first");
    }

}


function BMIpress() {
    var inchesT = ((parseFloat(userFeet.value) * 12) + parseFloat(userInches.value));
    var finalBMI = parseFloat(userPounds.value) / (inchesT * inchesT);
    h2F.textContent = finalBMI * 703;

}

upBtn.addEventListener("click", adjCall)

BMIcalc.addEventListener("click", BMIpress)