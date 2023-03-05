
export default {
    data() {
        return {
            
            name: "MY CHORES",
            newAssignment: "",
            assignments: [
                { id: 0, name: "Going to church", done: false },
                { id: 1, name: "Learning Java", done: false },
                { id: 2, name: "Learning HTML", done: false },
                { id: 3, name: "Learning CSS", done: false },

            ],
            toggleInputField: false
        }
    },

    methods: {
        addTask() {
            this.assignments.push({ id: this.assignments.length++, name: this.newAssignment, done: false });
            this.newAssignment= "";
        },
        removeTask(assignment) {
            this.assignments = this.assignments.filter(t => t !== assignment);
        }
    },

    template: `
        
        <h3>MY CHORES</h3>
        <section
            style="width: 300px; padding: 10px"
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
                @submit.prevent="addTask"
                class="mt-3 mb-3"
                v-show="toggleInputField"
                style="display: flex; justifyContent: center; alignItems: center;"
            >
                <input
                    required
                    type="text"
                    v-model="newAssignment"
                />
                <button

                    style="marginLeft: 5px;"
                    class="border-0 p-2 rounded bg-muted"
                >
                    ADD
                </button>
            </form>
            <ul
                class="list-group"
            >
                <li 
                    :key="assignment.id"
                    v-for="assignment in assignments.filter(assignment => ! assignment.done )"
                    class="list-group-item"
                >
                    <label>
                        <input 
                            type="checkbox"
                            v-model="assignment.done" 
                        />
                        {{ assignment.name }}
                        <button
                            @click="removeTask(assignment)"
                            class="rounded-circle bg-danger  text-light border-0 "
                        >
                            X
                        </button>
                    </label>
                    
                </li>
            </ul>
            <p v-show="assignments.filter(assignment => ! assignment.done).length === 0">There is no task in progress!</p>
        </section>


        <section
            style="width: 300px; marginTop: 20px; padding: 10px "
        >
            <h5>COMPLETED</h5>
            <ul
                class="list-group"
            >
                <li 
                    :key="assignment.id"    
                    v-for="assignment in assignments.filter(assignment => assignment.done )"
                    class="list-group-item"
                >
                    <label 
                        class="text-decoration-line-through text-muted"
                    >
                        <input 
                            type="checkbox"
                            v-model="assignment.done" 
                        />
                        {{ assignment.name }}
                    </label>
                   
                </li>
            </ul>
            <p v-show="assignments.filter(assignment => assignment.done).length === 0">There are no completed task</p>
        </section>

        

    `   
}

