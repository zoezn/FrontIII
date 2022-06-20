/* const state = {
    personalData: {
        name: "Blake",
        lastname: "Lively",
        age: 34,
        nationality: "American",
        residence: "USA",
        occupation: "Actor / Model / Fashion Designer",
        avatar: "https://media.glamour.mx/photos/61904f432d97bd4c522a21bf/4:3/w_1340,h_1005,c_limit/264900.jpg"
    },
    experience: [
        { id: 1, movie: "Gossip Girl"},
        { id: 2, movie: "The Sisterhood of the Traveling Pants"},
        { id: 3, movie: "New York, I Love You"}
    ],
    education: [
        { id: 1, institute: "University of Arts."},
        { id: 2, institute: "University UCLA"},
        { id: 3, institute: "University of Canada"}
    ],
    bio: "My anonymity is something I treasure."
}

const Header =()=>{
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header_ul" type="none">
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
};

const Info = ({ name, nationality, age, occupation, avatar})=>{
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

const Education = ({ institute })=>{
    return(
        <li>{institute}</li>
    )
}

const Bio = ({ bio })=>{
    return(
        <p>{bio}</p>
    )
}

const { education } = state;
const App = (
    <div>
        <Header/>
        <Info
            name={state.personalData.name}
            nationality={state.personalData.nationality}
            age={state.personalData.age}
            occupation={state.personalData.occupation}
            avatar={state.personalData.avatar}
        />
        <ul className="institutos">
            {
                education.map(item =>
                    <Education 
                        key={item.id}
                        institute={item.institute}
                    
                    />
                )
            }
            
        </ul>
        <Bio
                bio={state.bio}/>
    </div>
);


const htmlElement = document.getElementById("root");
ReactDOM.render(App, htmlElement); */

console.log("Hola!")