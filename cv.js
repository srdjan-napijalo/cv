
	

	

		//GET tabs FOR EXPANDING
		var education = document.getElementById("education");
		var experience = document.getElementById("experience");
		var courses = document.getElementById("courses");
		var interests = document.getElementById("interests");
		var skills = document.getElementById("skills");
		var references = document.getElementById("references");

		var tabs = [education, experience, courses, interests, skills, references];


		//get buttons 
		var exp, edu, cou, ski, int, ref;
		exp =  document.getElementById("expB");
		edu = document.getElementById("eduB");
		cou = document.getElementById("couB");
		ski = document.getElementById("skiB");
		int = document.getElementById("intB");
		ref = document.getElementById("refB");

		var rowButtons =  [exp, edu, cou, ski, int, ref];


		//clear buttons 

		var clearBtn = function(){
			for(var i =0; i< rowButtons.length; i++)
				rowButtons[i].classList.remove("clickedBtn");
		}



		var choose = function(e){
			if(e === "exp")
				experience.style.display = "block";
			if(e === "edu")
				education.style.display = "block";
			if(e === "cou")
				courses.style.display = "block";
			if(e === "int")
				interests.style.display = "block";
			if(e === "ski")
				skills.style.display = "block";
			if(e === "ref")
				references.style.display = "block";
		}

	


		

		var openTab = function(){
			clearTabs();
			choose(this.value);
			clearBtn();
			this.classList.add("clickedBtn");
		}

		//add event listeners to rowButtons
		for(var i=0; i<rowButtons.length; i++){
			rowButtons[i].addEventListener("click", openTab);
		}

//skill expanders
		var expandSkills = function(e){
		
			if(e.value === "lan")
				expandIfNotExpanded(e, languageAdd);
			
			if(e.value === "pro") 
				expandIfNotExpanded(e, programmingAdd);

			if(e.value === "com")
				expandIfNotExpanded(e, computerAdd);

			if(e.value === "cha")
				expandIfNotExpanded(e, characterAdd);

			if(e.value === "add")
				expandIfNotExpanded(e, additionalAdd);
	
		};

		//clear all and display only education tab on begining
						var clearTabs = function(){
					for(var i=0; i< tabs.length; i++)
					tabs[i].style.display= "none";	
			}
				clearTabs();
				education.style.display= "block";