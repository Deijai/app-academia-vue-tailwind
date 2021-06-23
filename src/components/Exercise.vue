<template>
    <div class="exercise-tile">
        <form class="exercise-form">
            <div class="exercise-info-block">
                <div class="p-2 flex-1">
                    <div v-if="editMode">
                        <div>
                            <input v-model="local.name" type="text" class="w-40" />
                        </div>
                        <div>
                            Peso:
                            <input v-model="local.weight" type="number" class="w-20" step=".5" /> kg
                        </div>
                        <div>
                            Repetições:
                            <input v-model="local.reps" type="number" class="w-20" />
                        </div>
                        <div>
                            Sets:
                            <input v-model="local.sets" type="number" class="w-20" />
                        </div>
                        <div>
                            Descanço:
                            <input v-model="local.rest" type="number" class="w-20" /> seg.
                        </div>
                    </div>
                    <div v-if="!editMode">
                        <div class="text-md font-bold flex-1">{{name}}</div>
                        <div>{{weight}} kg</div>
                        <div>{{reps}} repetições</div>
                        <div>{{sets}} séries</div>
                        <div>Descançar {{rest}} seg.</div>
                    </div>
                </div>
            </div>
            <div @click="exerciseChangeHandler" class="green-mid-btn" v-if="editMode">
                <div class="flex-1">
                    <box-icon name="check"></box-icon>
                </div>
            </div>
            <div class="green-end-btn" @click="switchEditor" v-if="!editMode">
                <div class="flex-1">
                    <box-icon name="edit-alt"></box-icon>
                </div>
            </div>
            <div @click="exerciseDeleteHandler" class="red-end-btn" v-if="editMode">
                <div class="flex-1">
                    <box-icon name="trash"></box-icon>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import "boxicons";

export default {
    name: "Exercise",
    props: ["id", "name", "weight", "reps", "sets", "rest"],
    data() {
        return {
            editMode: false,
            local: {
                name: this.name,
                weight: this.weight,
                reps: this.reps,
                sets: this.sets,
                rest: this.rest
            }
        };
    },
    methods: {
        switchEditor() {
            this.editMode = !this.editMode;
        },
        exerciseChangeHandler() {
            this.switchEditor();
            this.$emit("update-exercise", {
                id: this.id,
                exercise: this.local
            });
        },
        exerciseDeleteHandler() {
            this.$emit("delete-exercise", this.id);
        }
    }
};
</script>

<style lang="postcss" scoped>
.green-mid-btn {
    @apply flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black;
}
.green-end-btn {
    @apply flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg;
}
.red-end-btn {
    @apply flex justify-center items-center p-2 bg-red-100 hover:bg-red-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg;
}
.exercise-tile {
    @apply flex justify-center text-white transform ease-in hover:scale-105 transition duration-100;
}
.exercise-form {
    @apply flex justify-center text-white border hover:border-black rounded-lg;
}
.exercise-info-block {
    @apply flex-1 z-20 p-2 bg-gray-100 text-black rounded-tl-lg rounded-bl-lg;
}
</style>