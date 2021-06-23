<template>
    <div class="general-container">
        <div class="main-floating-box">
            <div>
                <div class="title-box">
                    <div class="title">App Academia</div>
                </div>
                <div class="workouts-and-user-box">
                    <!-- <user-box /> -->
                    <div class="workouts-selector-box">
                        <div class="workouts-selector-title">Treinos</div>
                        <!-- LISTING WORKOUTS BY NAME -->
                        <div class="workouts-selector-grid">
                            <div
                                class="workout-selector-button"
                                v-for="workout in workouts"
                                :key="workout.id"
                                @click="selectWorkout(workout.id)"
                            >{{workout.name}}</div>
                        </div>
                        <!-- WORKOUT ADDER -->
                        <div class="justify-center flex space-x-0">
                            <input v-model="newWorkoutName" type="text" class="w-40" />
                            <div class="workout-add-button" @click="addWorkout">
                                <box-icon color="white" name="plus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="exercises-view-box">
                <div>
                    <div v-if="selectedWorkout" class="workout-name-title">
                        <div class>{{selectedWorkout.name}}</div>
                        <div @click="deleteSelectedWorkout">
                            <box-icon color="red" name="trash" />
                        </div>
                    </div>
                    <!-- LISTING SELECTED WORKOUT EXERCISES -->
                    <div class="workout-exercises-box">
                        <exercise
                            v-for="exercise in selectedExercises"
                            :key="exercise.id"
                            :id="exercise.id"
                            :name="exercise.name"
                            :weight="exercise.weight"
                            :reps="exercise.reps"
                            :sets="exercise.sets"
                            :rest="exercise.rest"
                            @update-exercise="updateExercise"
                        />
                    </div>
                    <div v-if="selectedWorkout" @click="addExercise" class="add-exercise-button">
                        <box-icon name="plus"></box-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "./db";
import Exercise from "./components/Exercise.vue";
import "boxicons";

export default {
    name: "App",
    metaInfo: {
        title: "App Academia",
        htmlAttrs: {
            lang: "pt-br"
        }
    },
    components: {
        Exercise
    },
    data() {
        return {
            workouts: [],
            exercises: [],
            selectedWorkout: "",
            newWorkoutName: ""
        };
    },
    computed: {
        selectedExercises() {
            return this.exercises.filter(
                exercise =>
                    exercise.workout_owner_id === this.selectedWorkout.id
            );
        }
    },
    methods: {
        selectWorkout(id) {
            this.selectedWorkout = this.workouts.find(w => w.id === id);
            console.log("worked", this.selectedWorkout.name);
        },
        addWorkout() {
            db.collection("workouts").add({
                name: this.newWorkoutName
            });
            this.newWorkoutName = "";
        },
        addExercise() {
            db.collection("exercises").add({
                name: "Novo Exercício",
                weight: 10,
                reps: 10,
                sets: 3,
                rest: 45,
                workout_owner_id: this.selectedWorkout.id
            });
            console.log("added");
        },
        deleteSelectedWorkout() {
            db.collection("workouts")
                .doc(this.selectedWorkout.id)
                .delete();
            console.log("deleted", this.selectedWorkout.id);
        },
        // here event is an object received from $emit in the exercise component
        // the object is -> {id: this.id, exercise: this.local}
        updateExercise(event) {
            db.collection("exercises")
                .doc(event.id)
                .set({
                    ...event.exercise,
                    workout_owner_id: this.selectedWorkout.id
                });
            alert("updated!", event.id);
        }
    },
    firestore: {
        workouts: db.collection("workouts"),
        exercises: db.collection("exercises")
    }
};
</script>

<style lang="postcss" scoped>
.general-container {
    @apply bg-white justify-center flex;
}
.main-floating-box {
    @apply flex-grow-0 border border-gray-500 shadow-xl;
}
.title-box {
    @apply text-center bg-black align-middle flex justify-center pb-5;
}
.title {
    @apply mt-3 font-bold text-3xl text-white;
}
.workouts-and-user-box {
    @apply flex bg-gray-200 pb-5;
}
.workouts-selector-box {
    @apply p-3 text-center items-center;
}
.workouts-selector-title {
    @apply flex-1 m-2 text-center text-xl font-bold;
}
.workouts-selector-grid {
    @apply m-5 grid gap-2 grid-cols-3;
}
.workout-selector-button {
    @apply p-4 rounded-xl bg-gray-500 hover:bg-gray-400 transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg;
}
.workout-add-button {
    @apply p-1 bg-black hover:bg-gray-700 transform ease-in transition duration-100 font-bold;
}
.exercises-view-box {
    @apply bg-gray-300 p-3 pb-5;
}
.workout-name-title {
    @apply space-x-2 text-center text-xl font-bold p-2 flex justify-center;
}
.workout-exercises-box {
    @apply space-y-2 mt-3;
}
.add-exercise-button {
    @apply m-3 p-2 flex justify-center hover:shadow-md hover:bg-gray-200 rounded-md transform ease-in transition duration-200;
}
</style>
