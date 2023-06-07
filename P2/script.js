
console.log('dark mode');


$(document).ready(function(){

	//------------------------------------
	// show hide each itme
	//------------------------------------

	$('.item').click(function(){
		$(this).toggleClass('active');
	});

	//---------------------------
	// setup show hide all button
	//---------------------------
	$("#showhide").click(function(){
		
		$('.item').toggleClass('active');
	});

	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(){
		$('body').toggleClass('darkmode');
		$('#wireframe').toggleClass('darkmode');
	});

});




// control -> mode
// 이름 저장하기
document.addEventListener("DOMContentLoaded", function(){
	nameInput = document.getElementById("nameInput")
	nameInput.addEventListener("change", function(e){
		saveName(e);
		const url = "mode.html";
		window.location.href = url;
	} );


	function saveName(event){
		var name = event.target.value;
		localStorage.setItem("name", name);
	}
		// let nickname = document.querySelector("input")
		// nickname.addEventListener("change",
		// 	function(e){
		// 		const name = this.value;
		// 		localStorage.setItem("name", name);
		// 		const url = "intro.html";
		// 		window.location.href = url;})

		// let greetingElement = document.querySelector("greeting");
		// greetingElement.innerHTML += " " + localStorage.getItem("name") + "!";
		// 	}
});


// intro에 이름 반영
document.addEventListener("DOMContentLoaded", function(){
	var name = localStorage.getItem("name");
	if (name){
		var greeting = document.getElementById("greeting");
		greeting.innerHTML += " " + name + "!";
	}
});

// intro -> daily2
document.addEventListener("DOMContentLoaded", function(){
	var start = document.getElementById("start")
	start.addEventListener("click", function(){
		const url = "daily2.html";
		window.location.href = url;
	})
});

// daily2 -> visual
document.addEventListener("DOMContentLoaded", function(){
	var done = document.getElementsByClassName("done")[0];
	done.addEventListener("click", function(){
		const url = "visual.html";
		window.location.href = url;
	})
});



// visual -(alert)-> daily2
// 날짜 업데이트
document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById('date');
    let dateJune = sessionStorage.getItem('dateJune') || 8; // 초기값을 8로 설정
    dateElement.textContent = (dateJune < 10 ? "0" + dateJune : dateJune);
	var date = document.getElementById("date");
    date.addEventListener("click", function() {
      alert("It's time to check your day!");
      incrementDate();
      const url = "daily2.html";
      window.location.href = url;
    });


  function incrementDate() {
    dateJune++;
    sessionStorage.setItem('dateJune', dateJune);
  }
});


document.addEventListener("DOMContentLoaded", function(){
	const cells1 = document.querySelectorAll('.cell1');

	cells1.forEach(cell => {
		cell.addEventListener("click",function(){
			cells1.forEach(cell=>{
				cell.classList.remove('active');
			});
			this.classList.add('active');
		});
	});

	const cells2 = document.querySelectorAll('.cell2');

	cells2.forEach(cell => {
		cell.addEventListener("click",function(){
			cells2.forEach(cell=>{
				cell.classList.remove('active');
			});
			this.classList.add('active');
		});
	});

	const cells3 = document.querySelectorAll('.cell3');

	cells3.forEach(cell => {
		cell.addEventListener("click",function(){
			cells3.forEach(cell=>{
				cell.classList.remove('active');
			});
			this.classList.add('active');
		});
	});
});


// mode 선택
// mode -> intro
document.addEventListener("DOMContentLoaded", function() {
	const a1 = document.getElementById("a1");
	const a2 = document.getElementById("a2");

	a1.addEventListener("click", function() {
	a1.classList.add("bold");
	a1.style.color = "black";
	a2.classList.remove("bold");
	a2.classList.add("strike-through");
	setTimeout(function() {
		const url = "intro.html";
		window.location.href = url;
	  }, 2000);
	});

	a2.addEventListener("click", function() {
	a2.classList.add("bold");
	a2.style.color = "black";
	a1.classList.remove("bold");
	a1.classList.add("strike-through");
	setTimeout(function() {
		const url = "intro.html";
		window.location.href = url;
	  }, 2000);
	});


});


document.addEventListener("DOMContentLoaded", function(){
	var setting = document.getElementById("setting")
	setting.addEventListener("click", function(){
		const url = "control.html";
		window.location.href = url;
	})
});