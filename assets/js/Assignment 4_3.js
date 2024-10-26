const inputFirstName = document.getElementById("firstname");
const inputLastName = document.getElementById("lastname");
const inputJob =  document.getElementById("jobtitle");
const inputEmail =  document.getElementById("email");
const inputPhone =  document.getElementById("phone");
const cards = document.getElementById("cards");

//constructor for a new employee object.
function Employee(firstName, lastName, jobTitle, email, phone){
  this.firstName = firstName;
  this.lastName = lastName;
  this.jobTitle = jobTitle;
  this.email = email;
  this.phone = phone;
}


//responsible for creating the HTML, given an employee Object
function createEmployeeCard(employee)
{
  let card = document.createElement("div");
  card.className = "employee-card";

  let imageBackground = document.createElement("div");
  imageBackground.style.backgroundColor = '#EEE'

  let image = document.createElement("img");
  image.src = "./assets/images/user.png";
  image.width = '100';
  image.height = '100';

  let name = document.createElement("h3");
  name.className = "employee-name";
  name.textContent = `${employee.firstName} ${employee.lastName}`;

  let title =document.createElement("p");
  title.className = "employee-title";
  title.textContent = `${employee.jobTitle}`;

  let contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  let email = document.createElement("a");
  email.className = "employee-email";
  email.href = `mailto:${employee.email}`
  email.textContent = `${employee.email}`;

  let phone =document.createElement("p");
  phone.className = "employee-phone";
  phone.textContent = `${employee.phone}`;

  card.append(imageBackground);
  imageBackground.append(image);
  card.append(name);
  card.append(title);
  card.append(contactInfo);
  contactInfo.append(email);
  contactInfo.append(phone);

  return card;
}

//responsible for coordianting all other functions.
function createEmployee()
{

  clearErrors();

  if(checkValidInput() != true) {
    return;
  };

  let e = new Employee(inputFirstName.value, inputLastName.value, inputJob.value, inputEmail.value, inputPhone.value)

  let newCard = createEmployeeCard(e);
  cards.append(newCard);
  clearInputFields();
}

//responsible for clearing input fields
function clearInputFields(){

  let inputs = [inputFirstName, inputLastName, inputJob, inputEmail, inputPhone];

  for(let input of inputs){
    input.value = ""
  }
}

//responsible for checking if all inputs are valid
function checkValidInput()
{
  let inputs = [inputFirstName, inputLastName, inputJob, inputEmail, inputPhone];
  let isValid = true;
  for(let input of inputs)
  {
    if (input.value === "")
    {
      displayValidationError(input.id, "blankValue")
      isValid =  false;
    }

    if(input === inputEmail && input.value.includes("@") === false)
    {
      displayValidationError(input.id, "emailAddressFormat")
      isValid =  false;
    }

  }
  return isValid;
}

//responsible for displaying error messages on screen
function displayValidationError(id, msg)
{
  let errorList = document.getElementById("errors");

    if (msg === "blankValue")
    {
      let error = `${id} can not be blank `;
      let er = document.createElement("p");
      er.innerText = error;
      er.className = "error";
      errorList.append(er);
    }

    if(msg ==="emailAddressFormat")
    {
      let error = `${id} must be email address `;
      let er = document.createElement("p");
      er.innerText = error;
      er.className = "error";
      errorList.append(er);
    }
}

//responsible for clearing on screen error messages
function clearErrors(){
  let errorList = document.getElementById("errors");
  errorList.innerHTML = "";
}