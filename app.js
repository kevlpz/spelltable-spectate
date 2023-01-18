const observer = new MutationObserver(() => {
    if(window.location.href.includes('/game') && !window.location.href.includes('/?spectate') && !document.querySelector('.spectate')) {
    const button = document.createElement('button')
    button.textContent = 'Spectate'
    button.classList.add('spectate', 'px-4', 'rounded', 'items-center', 'hover:no-underline', 'bg-st-purple-light', 'hover:bg-st-purple-normal', 'text-white', 'h-10')
    
    const loadSpectate = () => {
        window.location.assign(window.location.href + '/?spectate=true')
        button.remove()
    }
    
    button.addEventListener('click', loadSpectate)
    
    document.querySelector('#root').prepend(button)
    }
});

observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
});