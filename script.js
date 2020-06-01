let cursor = document.getElementById("cursor");
document.addEventListener('mousemove', function(event){
    let x = event.clientX;
    let y = event.clientY;
    cursor.style.left = x;
    cursor.style.right = y;
    console.log(cursor);
});