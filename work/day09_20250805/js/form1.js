function validateForm() {
    // form의 데이터를 가지고 올 때 name으로 접근한다.
    let x = document.forms["myForm"]["fname"].value;

    if (x == "") {
        alert("Please input name.");
        // false가 리턴되면 form의 action이 실행되지 않는다.
        return false;
    }
}