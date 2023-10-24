
const axios2 = require('axios')
const getTokenBtn = document.getElementById('getToken');
const displayToken = document.getElementById('token');
const getQuestionBtn = document.getElementById('getQuestion');
const displayQuestion = document.getElementById('question');
const setAnswerBtn = document.getElementById('setAnswer');

if (!getTokenBtn) {
    console.warn('Missing btn getToken')
} else {
    getTokenBtn.addEventListener('click', getToken);

}

const instance = axios.create({
    baseURL: 'zadania.aidevs.pl',
})

async function getToken() {
    if (!displayToken) {
        console.warn("Missing token field");
        return;
    }

    const apiKey = {
        "apikey": "8284436b-fb2f-421f-98ab-8aed8a596a30"
    }

    try {
        console.log("test")
        // const { data, status } = await axios.post('/token/helloapi', apiKey);
        // if (status !== 201) {
        //     alert(data.message);
        //     return;
        // }

        // console.log(output);
    } catch {
        console.error("Error during API request getToken");
    }

}


