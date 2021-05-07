function handleSubmit(event) {
    event.preventDefault()

    /* Reference : [ https://classroom.udacity.com/ ]
                Front End Web Development Advanced Nanodegree Program
                2. Build Tools & Single Page Web Apps
                Lesson 4 : Final Touches
                Exercise: API Call Challenge platform*/
    // check what text was put into the form field

    let formText = document.getElementById('link').value
    Client.checkForName(formText)

    // Simple If - Else Statement [ JS Script ]

    if (Client.checkForLink(formText)) {

    console.log("::: Form Submitted :::")
    
    postData('http://localhost:8081/api', {url: formText})

    // [Reference: https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp]
    
    .then(function(res) {
        document.getElementById('results').insertAdjacentHTML("beforeend", `(1) Model: ${res.model}<br>(2) Score_tag: ${res.score_tag}<br>(3) Agreement : ${res.agreement}<br>(4) Sujectivity : ${res.subjectivity}<br>(5) Confidence : ${res.confidence}<br>(6) Irony : ${res.irony}`);
    })
     } 
     
    // Incase of bad link input __ LinkChecker
    else {
        alert('It\'s an invalid Article/Blog Link, Please try again!!');
    }
}

// Post Method Implementation 
// Link [ https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch ]

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const APIFinal = await response.json();
        return APIFinal;
    } catch (error) {
        return null;
    }
};

export { handleSubmit }