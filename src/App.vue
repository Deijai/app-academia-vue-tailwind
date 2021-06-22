<template>
    <div class="bg-white justify-center flex">
        <div class="lg:p-9 flex-none">
            <div>
                <div
                    class="text-center bg-gray-100 align-middle rounded-tr-3xl rounded-tl-3xl flex justify-center pb-5"
                >
                    <div class="m-3 mb-7 font-bold text-3xl text-gray-600">App Academia</div>
                </div>
                <div class="-mt-8 flex-1 shadow-md bg-gray-200 rounded-tr-3xl rounded-tl-3xl pb-5">
                    <div class="flex">
                        <user-box></user-box>
                        <workout-selector workouts="users"></workout-selector>
                        <div></div>
                    </div>
                    <div class="pb-10 flex justify-center">
                        <!-- <WorkoutAdder /> -->
                    </div>
                </div>
            </div>
            <div
                class="-mt-8 shadow-md bg-gray-300 rounded-br-lg rounded-bl-lg border-t-2 rounded-tr-3xl rounded-tl-3xl pb-1"
            >
                <div>
                    <div class="text-center font-bold mt-4"></div>
                    <div>
                        <div class="space-y-4 ml-8 mr-8 mt-3 mb-1">
                            <div>
                                <exercise></exercise>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <!-- <PlusIcon /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "./db";
import UserBox from "./components/UserBox.vue";
import WorkoutSelector from "./components/WorkoutSelector.vue";
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
        UserBox,
        WorkoutSelector,
        Exercise
    },
    data() {
        return {
            users: {}
        };
    },
    firestore: { users: db.collection("users") }
};
</script>

<style lang="postcss">
#app {
    font-family: "Montserrat", sans-serif;
}
</style>
