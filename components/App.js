
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
        <section 
            style="width: 300px; "
        >
            <div 
                style="display: flex; justifyContent: space-between; padding: 5px; alignItems: center;"
            >
                <h4>{{ title }}</h4>
                <button
                    style="padding: 5px; backgroundColor: pink; border: none;"
                >
                    ADD NEW
                </button>
            </div>

            <div
                style="display: flex; justifyContent: center; alignItems: center;"
            >
                <input type="text" />
                <button>ADD</button>
            </div>
            <ul>
                <li 
                    v-for="assignment in assignments"
                >
                    <label>
                        <input 
                            type="checkbox"
                            v-model="assignment.done" 
                        />
                        {{ assignment.name }}
                    </label>
                    
                </li>
            </ul>
        </section>

        <ul>
            <li v-for="assignment in assignments"> {{ assignment }} </li>
        </ul>

    `   
}

const titleSection = {
    display: "flex", 
    flexDirection: "row"
}
