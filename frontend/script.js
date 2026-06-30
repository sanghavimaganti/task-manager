function addTask() {

    let task = document.getElementById("taskInput").value;
    let status = document.getElementById("taskStatus").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <strong>Task:</strong> ${task}<br>
        <strong>Status:</strong> ${status}
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskStatus").value = "Pending";
}