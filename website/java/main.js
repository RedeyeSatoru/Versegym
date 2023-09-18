const calories = document.querySelector(".bmr-calculator .result .calories");
const calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
const age = document.querySelector(".bmr-calculator form #age");
const weight = document.querySelector(".bmr-calculator form #weight");
const height = document.querySelector(".bmr-calculator form #height");

const calculateBMR = (weight, height, age, gender) => {
    if (gender == "male") {
        return 10 * weight + 6.25 * height - 5 * age + 161;
    }
    return 10 * weight + 6.25 * height - 5 * age - 161;
};

calculateBtn.addEventListener("click", () => {
    let genderValue = document.querySelector(
        ".bmr-calculator form input[name='gender']:checked"
    ).value;

    let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);
    calories.innerHTML = BMR;
});
