$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        console.log(this)

        const time = $(this).parent().attr("id")
        console.log(time)

        const text = $(this).siblings(".description").val().trim()
        console.log(text)

        localStorage.setItem(time, text)
    })

    $("#12pm .description").val(localStorage.getItem("12pm"))

    for (let i = 9; i < 12; i++) {
        $(`#${i}am .description`).val(localStorage.getItem(`${i}am`))
    }

    for (let i = 1; i < 6; i++) {
        $(`#${i}pm .description`).val(localStorage.getItem(`${i}pm`))
    }
})