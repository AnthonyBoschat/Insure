const menuButton = document.querySelector(".hamburger")
const phoneMenu = document.querySelector(".phoneMenu")
const svgLogo = document.querySelector("#group")


const buttonIcons = {
    close:`<g id="Group 2">
                    <rect id="Rectangle" x="0.75" y="0.75" width="30.5" height="30.5" fill="white" stroke="#2C2830" stroke-width="1.5"/>
                    <g id="Group">
                        <g id="Group 3">
                            <rect id="Rectangle Copy 2" x="10.8735" y="9.56287" width="16" height="1.5" transform="rotate(45 10.8735 9.56287)" fill="#2C2830"/>
                            <rect id="Rectangle Copy 3" x="9.81299" y="20.8765" width="16" height="1.5" transform="rotate(-45 9.81299 20.8765)" fill="#2C2830"/>
                        </g>
                    </g>
                </g>`,

    open:`<g id="Group 2">
                <rect id="Rectangle" x="0.75" y="0.75" width="30.5" height="30.5" fill="white" stroke="#2C2830" stroke-width="1.5"/>
                <g id="Group">
                    <rect id="Rectangle_2" x="8" y="10" width="16" height="1.5" fill="#2C2830"/>
                    <rect id="Rectangle Copy 2" x="8" y="15" width="16" height="1.5" fill="#2C2830"/>
                    <rect id="Rectangle Copy 3" x="8" y="20" width="16" height="1.5" fill="#2C2830"/>
                </g>
            </g>`
}
    



const actionMenu = () => {
    if(!phoneMenu.classList.contains("animationClass_open")){
        menuButton.innerHTML = buttonIcons.close
        phoneMenu.classList.add("animationClass_open")
        phoneMenu.classList.remove("animationClass_closed")
        // A la fin de la durée de l'animation
        setTimeout(() => {
            document.body.classList.remove("visible")
            document.body.classList.add("hidden")
        }, 300);
        
    }
    else if(phoneMenu.classList.contains("animationClass_open")){
        menuButton.innerHTML = buttonIcons.open
        phoneMenu.classList.add("animationClass_close")
        //  A la fin de l'animation
        setTimeout(() => {
            phoneMenu.classList.remove("animationClass_open")
            phoneMenu.classList.remove("animationClass_close")
            phoneMenu.classList.add("animationClass_closed")
            document.body.classList.remove("hidden")
            document.body.classList.add("visible")
        }, 300);
    }
}



menuButton.addEventListener("click", actionMenu, true)

// body = overflow hidden
// Ajouter class open et retirer class closed à openMenu