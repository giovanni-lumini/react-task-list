export default function AppMain() {
    //logic
    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    //current task (filter)
    const current_task = tasks.filter((task) => {
        if (task.state !== "completed") {
            return true
        }
        return false
    });
    const current_task_length = current_task.length
    /* console.log(current_task);
    console.log(current_task_length); */

    const current_task_markup = current_task.map((task) => {
        const task_markup = (
            <div className="task">
                <div className="flex">
                    <div className="title">{task.title}</div>
                    <div className="state">{task.state}</div>
                </div>
                <div className="priority">Priority: {task.priority}</div>
                <div className="estimated_time">Est. Time: {task.estimatedTime} mins</div>
            </div>
        );
        return task_markup
    })

    //completed task (filter)
    const completed_task = tasks.filter((task) => {
        if (task.state === "completed") {
            return true
        }
        return false
    });
    const completed_task_length = completed_task.length
    /* console.log(completed_task);
    console.log(completed_task_length); */

    const completed_task_markup = completed_task.map((task) => {
        const task_markup = (
            <div className="task">
                <div className="flex">
                    <div className="title">{task.title}</div>
                    <div className="state">{task.state}</div>
                </div>
                <div className="priority">Priority: {task.priority}</div>
                <div className="estimated_time">Est. Time: {task.estimatedTime} mins</div>
            </div>
        );
        return task_markup
    })


    //markup
    return (
        <main>
            <section className="current_task">
                <h3 className="task_count">Current Task ({current_task_length})</h3>
                <div>{current_task_markup}</div>
            </section>

            <hr className="hr" />

            <section className="completed_task">
                <h3 className="task_count">Completed Task ({completed_task_length})</h3>
                <div>{completed_task_markup}</div>
            </section>
        </main>
    )
}