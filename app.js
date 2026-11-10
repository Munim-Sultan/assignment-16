var eng = Number(prompt('Enter your English marks'));
var maths = Number(prompt('Enter your Mathematics marks'));
var phy = Number(prompt('Enter your Physics marks'));
var chem = Number(prompt('Enter your Chemistry marks'));
var comp = Number(prompt('Enter your Computer Science marks'));

var obtMarks = eng + maths + phy + chem + comp;
var total = 500;
var percentage = (obtMarks/total) * 100;
var grade;

if(percentage <= 100){
    if(percentage >= 90){
        grade = 'A';
    }else if(percentage >= 80){
        grade = 'B';
    }else if(percentage >= 70){
        grade = 'C';
    }else if(percentage >= 60){
        grade = 'D';
    }else{
        grade = 'Fail';
    };
}else{
    alert('Please enter valid marks, out of 100 each.');
};

if(grade){
    alert(`percentage : ${percentage}, Grade : ${grade}, Total Marks : ${total}, Obtained Marks : ${obtMarks}`)
};