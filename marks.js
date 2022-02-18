

const student_list = document.querySelector('.student_list');

fetch('http://localhost:5050/student').then(data=> data.json()).then(data=>{

    let student = '';
    data.map(students=>{

        student += `
        <div class="col-md-3 my-3">
            <div class="card shadow p-itme">
                <a href="#" onclick="singleStudentLoad(${students.id})" data-bs-toggle="modal" data-bs-target="#single_student"><img src=" ${students.photo} " alt=""></a>
                <div class="card-body">
                    <h3> ${students.name} </h3>
                    <h4> ${students.fathers_name} </h4>
                    <h5> Class: ${students.class} </h5>
                    <h6> Roll No: ${students.roll} </h6>
                </div>
            </div>
        </div>
        `;
    });

    student_list.innerHTML= student;

});

function singleStudentLoad(id){

    const single_student = document.querySelector('.student_single')

    console.log(single_student);

    single_student.innerHTML = '';
    
    fetch('http://localhost:5050/student/' + id).then(data => data.json()).then(data=> {

        single_student.innerHTML = `

        <div class="row">
            <div class="col-md-6">
                <img class="w-100" src=" ${data.photo} " alt="">
            </div>
            <div class="col-md-6">
                <span>${data.subject}</span>
                <p>Bangla: ${data.Ban}</p>
                <p>Englisg:${data.eng} </p>
                <p>Math:${data.Math} </p>
                <p>Science:${data.Scie} </p>
                <p>Social_Science:${data.ssc} </p>
                <p>Religion:${data.reli} </p>
                <a class="btn btn-lg w-100 btn-primary" href="#"> Add to Card </a>
            </div>
        </div>

        `;
    });


};