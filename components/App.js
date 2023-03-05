
export default {
    data() {
        return {
            
            name: "MY CHORES",
            assignments: [
                { id: 0, name: "Going to church", done: false },
                { id: 1, name: "Learning Java", done: false },
                { id: 2, name: "Learning HTML", done: false },
                { id: 3, name: "Learning CSS", done: false },
                { id: 4, name: "Watching Manchester vs Liverpool", done: false },
                { id: 5, name: "Meeting Oliver later tonight", done: false }
            ],
            toggleInputField: false
        }
    },
    

    template: `
        
        <h3>MY CHORES</h3>
        <section 
            style="width: 300px; "
        >

            <div 
                
                class="d-flex justify-content-between p-1 align-items-center"
            >
                <h5>IN PROGRESS</h5>
                <button
                    :class="toggleInputField ? 'bg-danger' : 'bg-primary'"
                    @click="toggleInputField = ! toggleInputField"
                    class="border-0 p-2 rounded text-light"
                >
                    {{ toggleInputField ? 'CANCEL'  : 'ADD' }}
                </button>
            </div>

            <form
                class="mt-3"
                v-show="toggleInputField"
                style="display: flex; justifyContent: center; alignItems: center;"
            >
                <input type="text" />
                <button
                    style="marginLeft: 5px;"
                    class="border-0 p-2 rounded bg-muted"
                >
                    ADD
                </button>
            </form>
            <ul>
                <li 
                    :key="assignment.id"
                    v-for="assignment in assignments.filter(assignment => ! assignment.done )"
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
            <p v-show="assignments.filter(assignment => ! assignment.done).length === 0">Congrats! You completed all your tasks!</p>
        </section>

        

    `   
}

