setInterval(() => {
    let collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    console.log(collapseElementList)
    return new bootstrap.Collapse(collapseElementList[4])
}, 5000);