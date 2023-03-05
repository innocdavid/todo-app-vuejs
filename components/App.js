
export default {
    data() {
        return {
            title: "IN PROGRESS",
            name: "MY CHORES",
            assignments: [
                { id: 0, name: "Going to church", done: false },
                { id: 1, name: "Learning Java", done: false },
                { id: 2, name: "Learning HTML", done: false },
                { id: 3, name: "Learning CSS", done: false },
                { id: 4, name: "Watching Manchester vs Liverpool", done: false },
                { id: 5, name: "Meeting Oliver later tonight", done: false }
            ]
        }
    },
    template: `
        <h3>MY CHORES</h3>
        <section>
            <h5>{{ title }}</h5>
            <ul>
                <li 
                    v-for="assignment in assignments"
                >
                    <label>
                        <input 
                            type="checkbox" 
                        />
                        {{ assignment.name }}
                    </label>
                    
                </li>
            </ul>
        </section>
    `   
}