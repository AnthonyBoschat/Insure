const scrollElements = document.querySelectorAll(".scroll")

const observerOptions = {
    root:null, // root = détermine que c'est la fenêtre de l'utilisateur qui sera utiliser comme référence pour déterminer si les éléments cibles entrent ou sortent de la vue
    rootMargin:"0px",
    threshold:0.4 // Élement doit être à au moins 40% visible
}

const observerCallBack = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ // Si l'élément référence ( root ) intercept un élément entry
            entry.target.classList.add("scrollApparition")
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(observerCallBack, observerOptions)

scrollElements.forEach(element => {
    observer.observe(element);
  });