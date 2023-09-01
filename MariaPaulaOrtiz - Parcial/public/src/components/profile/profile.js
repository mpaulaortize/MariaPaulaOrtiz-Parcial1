class Profile extends HTMLElement {
    static get observedAttributes(){
        return ["name","species","gender","house","yearOfBirth"];
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="./src/components/profile/profile.css">

        <section>

            <p>Name: ${this.name}</p>
            <p>Species: ${this.species}</p>
            <p>Gender: ${this.gender}</p>
            <p>House: ${this.house}</p>
            <p>Year of birth: ${this.yearOfBirth}</p>

        </section>
        
        `
    }

}

customElements.define("my-profile", Profile);
export default Profile;





