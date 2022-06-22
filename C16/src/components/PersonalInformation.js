const PersonalInformation = ({ name, nationality, age, occupation, avatar})=>{
    return (
        <main className="main">
            <section className="informacion">
                <h1>Name: {name}</h1>
                <p>Nationality: {nationality}</p>
                <p>Age: {age} years old</p>
                <p>Occupation: {occupation}</p>
                

            </section>
            <section className="imagen">
                <img src={avatar} alt="profile picture"/>
            </section>
        </main>
    )
};

export default PersonalInformation;