document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById("ft_list");
    const newTaskButton = document.getElementById("newTask");

    // โหลด TODO จาก Cookie
    function loadTasks() {
        const tasks = getCookies("tasks");
        if (tasks) {
            const taskArray = JSON.parse(tasks);
            taskArray.forEach(task => addTaskToDOM(task));
        }
    }

    // บันทึก TODO ลง Cookie
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#ft_list div").forEach(taskDiv => {
            tasks.push(taskDiv.textContent);
        });
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/;`;
    }

    // ฟังก์ชันเพิ่ม Task เข้า DOM
    function addTaskToDOM(taskText) {
        const taskDiv = document.createElement("div");
        taskDiv.textContent = taskText;
        taskDiv.classList.add("task");
        taskDiv.addEventListener("click", () => removeTask(taskDiv));
        listContainer.prepend(taskDiv);
    }

    // ลบ Task
    function removeTask(taskDiv) {
        if (confirm("Do you really want to delete this task?")) {
            taskDiv.remove();
            saveTasks();
        }
    }

    // ดึงค่าจาก Cookie
    function getCookies(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    // กดปุ่ม 'New' เพื่อเพิ่ม Task
    newTaskButton.addEventListener("click", () => {
        const taskText = prompt("Enter a new TO DO:");
        if (taskText) {
            addTaskToDOM(taskText);
            saveTasks();
        }
    });

    // โหลด Tasks ที่เคยบันทึกไว้
    loadTasks();
});