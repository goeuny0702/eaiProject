//function addComment() {
//    const input = document.getElementById("commentInput");
//    const commentText = input.value.trim();
//
//    if (commentText === "") return;
//
//    const commentList = document.getElementById("commentList");
//
//    const newComment = document.createElement("div");
//    newComment.className = "comment";
//
//    newComment.innerHTML = `
//        <span><strong>익명:</strong> ${commentText}</span>
//        <button class="delete-btn" onclick="deleteComment(this)">삭제</button>
//    `;
//
//    commentList.appendChild(newComment);
//    input.value = "";
//}
//
//function deleteComment(button) {
//    const comment = button.parentElement;
//    comment.remove();
//}
