// POP FLOATING CARD STARTS HERE
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
// POP FLOATING CARD ENDS HERE


// FLOATING FORM STARTS HERE
let popupShown = false; 

    window.onscroll = function() {
        // Scroll calculation
        let scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        // Ab ye 40% scroll par hi trigger ho jayega (Jaldi aayega)
        if (scrollPercent > 20 && !popupShown) {
            document.getElementById('scrollPopup').classList.add('show');
            popupShown = true; 
        }
    };

    function closePopup() {
        document.getElementById('scrollPopup').classList.remove('show');
    }

	// FORM SUBMITION START
	var form = document.getElementById("popup-contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("submit-btn"); // Button ka status change karne ke liye
  var data = new FormData(event.target);
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thanks! We have received your query.");
      form.reset();
      closePopup(); // Form submit hone ke baad popup band ho jaye
    } else {
      alert("Oops! There was a problem submitting your form");
    }
  }).catch(error => {
    alert("Oops! Connection error.");
  });
}
form.addEventListener("submit", handleSubmit)
	// FORM SUBMITION END
	
// FLOATING FORM ENDS HERE
