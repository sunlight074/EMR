const axios= require('axios');
let path = 'http://localhost:3000/users/?patientCode=';
let patientCode = 1000002;
let titleName,firstName ,lastName,middleName,titleNameEn,firstNameEn,lastNameEn,middleNameEn,gender,dateOfBirth;

axios.get(path + patientCode)
.then(res =>{
    let data = res.data;
    data.forEach(element => {
        patientCode= element.patientCode
        titleName= element.titleName
        firstName= element.firstName
        lastName= element.lastName
        middleName = element.middleName
        titleNameEn= element.titleNameEn
        firstNameEn = element.firstNameEn
        lastNameEn = element.lastNameEn
        middleNameEn= element.middleNameEn
        gender = element.gender
        dateOfBirth = element.dateOfBirth
        console.log(patientCode)
        console.log(titleName)  
        console.log(firstName)  
        console.log(lastName)  
        console.log(middleName)  
        console.log(titleNameEn)  
        console.log(firstNameEn)  
        console.log(lastNameEn)  
        console.log(middleNameEn)  
        console.log(gender)  
        console.log(dateOfBirth)       
    });
     
})
 .catch(error =>{
     console.log(error)
 })