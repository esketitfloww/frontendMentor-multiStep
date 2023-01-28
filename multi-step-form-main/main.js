const personal = document.querySelector("#personalContainer");
const plan = document.querySelector("#planContainer");
const add = document.querySelector("#addContainer");
const finish = document.querySelector("#finishContainer")
const thankYou = document.querySelector("#thankYouContainer")
const personalNav = document.querySelector(".personalLink");
const planNav = document.querySelector(".planLink");
const addNav = document.querySelector(".addLink");
const finishNav = document.querySelector(".finishLink");
const totalTitle = document.querySelector(".totalTitle");
const totalPriceText = document.querySelector(".totalPriceText");

const arcadeSelected = document.querySelector("#arcadeChoice");
const advancedSelected = document.querySelector("#advancedChoice");
const proSelected = document.querySelector("#proChoice");
const arcadePrice = document.querySelector("#arcadePrice");
const advancedPrice = document.querySelector("#advancedPrice");
const proPrice = document.querySelector("#proPrice");
let totalPrice = 0;


const finishPlanName = document.querySelector(".finishPlanName");
const finishPlanPrice = document.querySelector(".finishPlanPrice");

let arcadeTotalPrice = 0;
let advancedTotalPrice = 0;
let proTotalPrice = 0;
let onlineTotalPrice = 0;
let storageTotalPrice = 0;
let customTotalPrice = 0;
let arcadeSelectedClicked = false;
let advancedSelectedClicked = false;
let proSelectedClicked = false;
let onlineSelectedClicked = false;
let storageSelectedClicked = false;
let customSelectedClicked = false;

const free = document.querySelectorAll(".free");

const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const switchOn = document.querySelector("#switchOn");

const onlinePrice = document.querySelector("#onlinePrice");
const storagePrice = document.querySelector("#storagePrice");
const customPrice = document.querySelector("#customPrice");

switchOn.addEventListener("change", function(){
	if (switchOn.checked) {
		monthly.style.color = "hsl(231, 11%, 63%)";
		yearly.style.color = "hsl(213, 96%, 18%)";
		arcadePrice.textContent = '90$/yr';
		advancedPrice.textContent = '120$/yr';
		proPrice.textContent = '150$/yr';
		free.forEach(freeElement => {
			freeElement.style.display = 'block';
		});
		onlinePrice.textContent = '+$10/yr';
		storagePrice.textContent = '+$20/yr';
		customPrice.textContent = '+$20/yr';
		totalTitle.textContent = 'Total (per year)'
	}

	else {
		monthly.style.color = 'hsl(213, 96%, 18%)';
		yearly.style.color = 'hsl(231, 11%, 63%)';
		arcadePrice.textContent = '9$/mo';
		advancedPrice.textContent = '12$/mo';
		proPrice.textContent = '15$/mo';
		free.forEach(freeElement => {
			freeElement.style.display = 'none';
		});
		onlinePrice.textContent = '+$1/mo';
		storagePrice.textContent = '+$2/mo';
		customPrice.textContent = '+$2/mo';
		totalTitle.textContent = 'Total (per month)'
	}
});

function arcade(){
	arcadeSelected.style.backgroundColor = "hsl(217, 100%, 97%)";
	arcadeSelected.style.borderColor = "hsl(243, 100%, 62%)";
	advancedSelected.style.backgroundColor = "transparent";
	advancedSelected.style.borderColor = "hsl(229, 24%, 87%)";
	proSelected.style.backgroundColor = "transparent";
	proSelected.style.borderColor = "hsl(229, 24%, 87%)";
	finishPlanName.textContent = 'Arcade';
	finishPlanPrice.textContent = arcadePrice.textContent;
	if (switchOn.checked){
		arcadeTotalPrice = 90;
	}
	else {
		arcadeTotalPrice = 9;
	}
	arcadeSelectedClicked = true;
	advancedSelectedClicked = false;
	proSelectedClicked = false;
	return arcadeTotalPrice;
}

function advanced(){
	advancedSelected.style.backgroundColor = "hsl(217, 100%, 97%)";
	advancedSelected.style.borderColor = "hsl(243, 100%, 62%)";
	arcadeSelected.style.backgroundColor = "transparent";
	arcadeSelected.style.borderColor = "hsl(229, 24%, 87%)";
	proSelected.style.backgroundColor = "transparent";
	proSelected.style.borderColor = "hsl(229, 24%, 87%)";
	finishPlanName.textContent = 'Advanced';
	finishPlanPrice.textContent = advancedPrice.textContent;
	if (switchOn.checked){
		advancedTotalPrice = 120;
	}
	else {
		advancedTotalPrice = 12;
	}
	advancedSelectedClicked = true;
	arcadeSelectedClicked = false;
	proSelectedClicked = false;
	return advancedTotalPrice;
}

function pro(){
	proSelected.style.backgroundColor = "hsl(217, 100%, 97%)";
	proSelected.style.borderColor = "hsl(243, 100%, 62%)";
	advancedSelected.style.backgroundColor = "transparent";
	advancedSelected.style.borderColor = "hsl(229, 24%, 87%)";
	arcadeSelected.style.backgroundColor = "transparent";
	arcadeSelected.style.borderColor = "hsl(229, 24%, 87%)";
	finishPlanName.textContent = 'Pro';
	finishPlanPrice.textContent = proPrice.textContent;
	if (switchOn.checked){
		proTotalPrice = 150;
	}
	else {
		proTotalPrice = 15;
	}
	proSelectedClicked = true;
	advancedSelectedClicked = false;
	arcadeSelectedClicked = false;
	return proTotalPrice;
}

arcadeSelected.addEventListener("click", arcade);

advancedSelected.addEventListener("click", advanced);

proSelected.addEventListener("click", pro);

const online = document.querySelector("#online");
const storage = document.querySelector("#storage");
const custom = document.querySelector("#custom");
const addName1 = document.querySelector(".addName1");
const addName2 = document.querySelector(".addName2");
const addName3 = document.querySelector(".addName3");
const addPrice1 = document.querySelector(".addPrice1");
const addPrice2 = document.querySelector(".addPrice2");
const addPrice3 = document.querySelector(".addPrice3");

function onlineFunction(){
	if (online.checked){
		addName1.textContent = 'Online Service';
		addPrice1.textContent = onlinePrice.textContent;
		if (switchOn.checked){
			onlineTotalPrice = 10;
		}
		else {
			onlineTotalPrice = 1;
		}
		onlineSelectedClicked = true;
	}
	else {
		addName1.textContent = '';
		addPrice1.textContent = '';
		onlineTotalPrice = 0;
	}
	return onlineTotalPrice;
}

function storageFunction(){
	if (storage.checked){
		addName2.textContent = 'Larger Storage';
		addPrice2.textContent = storagePrice.textContent;
		if (switchOn.checked){
			storageTotalPrice = 20;
		}
		else {
			storageTotalPrice = 2;
		}
		storageSelectedClicked = true;
	}
	else {
		addName2.textContent = '';
		addPrice2.textContent = '';
		storageTotalPrice = 0;
	}
	return storageTotalPrice;
}

function customFunction(){
	if (custom.checked){
		addName3.textContent = 'Customizable Profile';
		addPrice3.textContent = customPrice.textContent;
		if (switchOn.checked){
			customTotalPrice = 20;
		}
		else {
			customTotalPrice = 2;
		}
		customSelectedClicked = true;
	}
	else {
		addName3.textContent = '';
		addPrice3.textContent = '';
		customTotalPrice = 0;
	}
	return customTotalPrice;
}

online.addEventListener("change", onlineFunction);

storage.addEventListener("change", storageFunction)

custom.addEventListener("change", customFunction)

const nextBtn1 = document.querySelector(".next1");

const backBtn1 = document.querySelector(".back1");
const nextBtn2 = document.querySelector(".next2");

const backBtn2 = document.querySelector(".back2");
const nextBtn3 = document.querySelector(".next3");

const backBtn3 = document.querySelector(".back3")
const confirmBtn = document.querySelector("#confirm")

nextBtn1.addEventListener("click", function(){
	personal.style.display = "none";
	plan.style.display = "flex";
	planNav.id = "page";
	personalNav.id = "notpage";
});

backBtn1.addEventListener("click", function(){
	personal.style.display = "flex";
	plan.style.display = "none";
	planNav.id = "notpage";
	personalNav.id = "page";
});
nextBtn2.addEventListener("click", function(){
	plan.style.display = "none";
	add.style.display = "flex";
	addNav.id = "page";
	planNav.id = "notpage";
});

backBtn2.addEventListener("click", function(){
	plan.style.display = "flex";
	add.style.display = "none";
	addNav.id = "notpage";
	planNav.id = "page";
});
nextBtn3.addEventListener("click", function(){
	add.style.display = "none";
	finish.style.display = "flex";
	finishNav.id = "page";
	addNav.id = "notpage";
	
	totalPrice = 0

	if (arcadeSelectedClicked){
		totalPrice = totalPrice + arcade() + onlineFunction() + storageFunction() + customFunction();
	}	
	if (advancedSelectedClicked){
		totalPrice = totalPrice + advanced() + onlineFunction() + storageFunction() + customFunction();
	}
	if (proSelectedClicked){
		totalPrice = totalPrice + pro() + onlineFunction() + storageFunction() + customFunction();
	}
	if (switchOn.checked){
		totalPriceText.textContent = `$${totalPrice}/yr`;
	}
	else {
		totalPriceText.textContent = `$${totalPrice}/mo`;
	}
});

backBtn3.addEventListener("click", function(){
	add.style.display = "flex";
	finish.style.display = "none";
	finishNav.id = "notpage";
	addNav.id = "page";
});

confirmBtn.addEventListener("click", function(){
	finish.style.display = "none";
	thankYou.style.display = "flex";
})