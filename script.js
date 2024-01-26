const main_color_front_path = document.getElementById("main-color-front-path")
const main_color_back_path = document.getElementById("main-color-back-path")
const sleeve_front = document.getElementById("sleeve-front")
const sleeve_back = document.getElementById("sleeve-back")

// Front Design Customization
front_designs = document.querySelectorAll(".front-design")

front_designs.forEach(front_design => {
    front_design.addEventListener("click", e => {
        const design_id = e.target.getAttribute("data-design-id")
        main_color_front_path.setAttribute("fill", `url(#${design_id})`)
    })
})

// Back Design Customization
back_designs = document.querySelectorAll(".back-design")

back_designs.forEach(back_design => {
    back_design.addEventListener("click", e => {
        const design_id = e.target.getAttribute("data-design-id")
        main_color_back_path.setAttribute("fill", `url(#${design_id})`)
    })
})

// Sleeves Design Customization
const sleeve_designs = document.querySelectorAll(".sleeve-design")

sleeve_designs.forEach(sleeve_design => {
    sleeve_design.addEventListener("click", (e) => {
        const design_id = e.target.getAttribute("data-design-id")
        sleeve_front.setAttribute("fill", `url(#${design_id})`)
        sleeve_back.setAttribute("fill", `url(#${design_id})`)
    })
})