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
                        <!-- <UserBox /> -->
                        <!-- <WorkoutSelector /> -->
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
                                <!-- <Exercise /> -->
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
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyAKmDxwgtpdJWuzBx4tkobiYp3Q5uOG5dA",
        authDomain: "app-academia-vue.firebaseapp.com",
        projectId: "app-academia-vue",
        storageBucket: "app-academia-vue.appspot.com",
        messagingSenderId: "1079825797450",
        appId: "1:1079825797450:web:fe1f2a34c636a7691a71b3"
    })
    .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });

export default {
    name: "App",
    metaInfo: {
        title: "App Academia",
        htmlAttrs: {
            lang: "pt-br"
        }
    },
    components: {},
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
