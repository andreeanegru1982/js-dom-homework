console.log(`Create a studen's list, and pick one ramdomly`);


const addStudent = document.querySelector('.list');
const newInput = document.querySelector('#student-name');
const studentColor = document.querySelector('#student-color');

const studentList = document.createElement('div');
studentList.classList.add('student-list');
addStudent.append(studentList);

const addStudentBtn = document.querySelector('#add-student-btn');
addStudentBtn.addEventListener('click', function(event){
    event.preventDefault();

    const studentName = newInput.value;
    if(!studentName){
        alert('Input new student!');
        return;
    }

    const hexSymbol = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '#';
    for(let i = 0; i < 6; i++){
        const randomColor = Math.floor(Math.random() * hexSymbol.length);
        color = color + hexSymbol[randomColor];
        
    }
    studentColor.value = color;

    addNewStudent(studentName, color);
    newInput.value = '';
    
})

function addNewStudent(studentName, color){
    const studentContainer = document.createElement('div');
    studentContainer.classList.add('student-item');
    studentList.append(studentContainer);

    const square = document.createElement('div');
    square.classList.add('square-avatar');
    square.style.backgroundColor = color;
    studentContainer.append(square);


    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = `https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=${encodeURIComponent(studentName)}`
    square.append(avatar);

    const student = document.createElement('h3');
    student.textContent = studentName;
    studentContainer.append(student);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    studentContainer.append(deleteBtn);

    deleteBtn.addEventListener('click', function(){
        studentContainer.remove();
    })
}
