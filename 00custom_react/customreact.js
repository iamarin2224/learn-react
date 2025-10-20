function customRender(reactEle, container){
    const domEle = document.createElement(reactEle.type)
    domEle.innerHTML = reactEle.children
    for (const prop in reactEle.props){
        if (prop === 'children') continue;
        domEle.setAttribute(prop, reactEle.props[prop])
    }
    container.appendChild(domEle)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children: "Click me to vist google"
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)