export default function User ({ telephone,age,mail,genre, statut,password  }) {
    this.telephone = telephone;
    this.age = age;
    this.mail = mail;
    this.genre = genre;
    this.statut = statut;
    this.password = password;
}
User.prototype.creerId = function () {
    const chaine = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
    let id = ''
    for (let i = 0; i < 6; i++) {
        const rand = Math.floor((Math.random() * 100) * 0.63)
        id += chaine[rand]
    }

    return id
}

User.prototype.inscription = function () {
    const {telephone,age,mail,genre, statut,password  } = this;
    const l = localStorage;

    const utilisateur = {

        telephone: telephone,
        age: age,
        mail: mail,
        genre: genre,
        statut: statut,
        password: password,

        id: this.creerId()
    }



    if (l.getItem('Etudiant') === null) {
        let bd = []
        bd.push(utilisateur)
        console.log('BD VIDE')
        l.setItem('User', JSON.stringify(bd))
    } else {
        let bd = JSON.parse(l.getItem('User'))
        bd.push(utilisateur)
        l.setItem('User', JSON.stringify(bd))
    }
}

User.prototype.update = function (id, object) {
    let l = localStorage;

    let bd = JSON.parse(l.getItem("User"))
    bd.forEach((el, i) => {
        if (el.id === id) {
            bd[i] = { id: id, ...object }
        }
    })

    l.setItem('User', JSON.stringify(bd))
}
