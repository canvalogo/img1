const inputName = document.getElementById('name')
const inputPassword = document.getElementById('password')
const sentBtn = document.getElementById('sentBtn')
let accauntStydent = [
        {
        stydentId: 1110,
        stydentPassword: 2021,
        stydentName: 'xamidulla',
        stydentGroup: 'NF2074'

    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'figmachi🧟‍♀️',
        stydentGroup: 'NF2074',
        stydentGrading: 3,
        teacherName: 'Shifu',
        stydentCoin: 1138,
        stydentEnergy: 1030
    },

]
sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value); // Raqamga aylantirdik
    const userPassword = Number(inputPassword.value);

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );



    if (foundStudent) {
        alert('Siz: ' + foundStudent.stydentName);
        window.location.href = "home.html"
        localStorage.setItem("stundent" ,JSON.stringify(foundStudent))
    } else {
        alert('Login yoki parol noto‘g‘ri!');
    }
});
