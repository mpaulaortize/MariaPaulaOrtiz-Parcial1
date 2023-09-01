class Button extends HTMLElement {
 
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.onButtonClicked = onButtonClicked
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
        
    
        `
    }

}

customElements.define("my-button", Button);
export default Button;
