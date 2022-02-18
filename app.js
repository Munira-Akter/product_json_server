

const devs_list = document.querySelector('.devs_list');

fetch('http://localhost:5050/devs').then(data=> data.json()).then(data=>{

    let devs = '';
    data.map(developer=>{

        devs += `
        <div class="col-md-3 my-3">
            <div class="card shadow p-itme">
                <a href="#" onclick="singleDeveloperLoad(${developer.id})" data-bs-toggle="modal" data-bs-target="#single_developer"><img src=" ${developer.photo} " alt=""></a>
                <div class="card-body">
                    <h3> ${developer.name} </h3>
                    <h4> ${developer.skill} </h4>
                    <h5>Salary: $${developer.salary} </h5>
                    <h6>Age: ${developer.age} </h6>
                </div>
            </div>
        </div>
        `;
    });

    devs_list.innerHTML= devs;

});

function singleDeveloperLoad(id){

    const single_developer = document.querySelector('.developer_single')

    single_developer.innerHTML = '';
    
    fetch('http://localhost:5050/devs/' + id).then(data => data.json()).then(data=> {

        single_developer.innerHTML = `

        <div class="row">
            <div class="col-md-6">
                <img class="w-100" src=" ${data.photo} " alt="">
            </div>
            <div class="col-md-6">
                <h1>${data.name}</h1>
                <h2>${data.skill}</h2>
                <p>$${data.salary} Dolar</p>
                <p>${data.age} Years</p>
                <a class="btn btn-lg w-100 btn-primary" href="#"> Add to Card </a>
            </div>
        </div>

        `;
    });


};

