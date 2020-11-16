// DO NOT USE THIS AS AN EXAMPLE
const taskLauncher = () => {
    const taskGrid = document.getElementById('app-task-grid');
    const taskView = document.getElementById('app-task-view');

    window.onhashchange = function () {
        watchHashChange()
    }

    const watchHashChange = () => {
        const currentTask = location.hash.replace('#/practice-tasks/', "")
        const isTaskView = location.hash.includes('/practice-tasks/')

        if (isTaskView) {
            GridViewToggle('view')
            setActivetask(currentTask)
            setTaskTitle(currentTask)
        } else {
            GridViewToggle('grid')
            setTaskTitle()
        }
    }

    const GridViewToggle = (value) => {
        if (value === 'grid') {
            taskGrid.classList.add('is-active')
            taskView.classList.remove('is-active')
        }
        if (value === 'view') {
            taskGrid.classList.remove('is-active')
            taskView.classList.add('is-active')
        }
    }

    const setActivetask = (currentTask) => {
        const allTaskViews = document.getElementsByClassName('app-task-view__task')
        const activeTask = document.getElementById(currentTask)

        Array.prototype.forEach.call(allTaskViews, function (taskView) {
            taskView.classList.remove('is-active')
            activeTask.classList.add('is-active')
        });
    }

    const setTaskTitle = (name) => {
        const taskTitleElement = document.getElementById('app-task-name')
        if (name) {
            taskTitleElement.innerText = name.replace('-', ' ')
            taskTitleElement.classList.add('is-active')
        } else {
            taskTitleElement.innerText = null
            taskTitleElement.classList.remove('is-active')
        }
    }

    watchHashChange()
}

export default taskLauncher;
