const person={
    name:'Rahul',
    addres:{
         city:'gwl'
    },
    profile:['two','fave'],
    printProfile:()=> {
        person.profile.map(
            (profi) =>{
                console.log(profi)
            }
        )
        console.log(person.profile[1])
    }
}


export default function LearningJavaScript(){
    return (
        <div>
        <div>{person.name}</div>
        <div>{person.addres.city}</div>
        <div>{person.profile[0]}</div>
        <div>{person.printProfile()}</div>         
        </div>
    )
}