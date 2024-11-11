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
    console.log(current_task);
    const current_task_length = current_task.length
    console.log(current_task_length);

    //markup
    const current_task_markup = current_task.map((task) => {
        const markup = `
            <div className="title">${task.title}</div>
            <div className="priority">${task.priority}</div>
            <div className="estimated_time">${task.estimatedTime}</div>
        `
        return markup
    })

    //completed task (filter)
    const completed_task = tasks.filter((task) => {
        if (task.state === "completed") {
            return true
        }
        return false
    });
    /* console.log(completed_task);
    const completed_task_length = completed_task.length
    console.log(completed_task_length); */





    //markup
    return (
        <main>
            <section className="current_task">
                <h3>Current Task</h3>
                <div>{current_task_markup}</div>
            </section>

            <section className="completed_task">
                <h3>Completed Task</h3>
            </section>
        </main>
    )
}