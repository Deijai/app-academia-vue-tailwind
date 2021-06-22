<template>
    <div class="exercise-tile">
        <form class="flex justify-center text-white">
            <div class="number-head-block">
                <div v-if="editMode">
                    <input type="number" maxlength="2" class="text-black w-14" />
                </div>
                <div>number</div>
            </div>
            <div class="exercise-info-block">
                <div class="p-2 flex-1">
                    <div v-if="editMode">
                        <input type="text" />
                    </div>
                    <div class="text-md font-bold flex-1">name</div>
                    <div v-if="editMode">
                        Peso:
                        <input type="number" class="w-20" /> kg
                    </div>
                    <div>Peso: kg</div>
                    <div v-if="editMode">
                        Repetições:
                        <input type="number" class="w-20" />
                    </div>
                    <div>Repetições:</div>
                    <div v-if="editMode">
                        Sets:
                        <input type="number" class="w-20" />
                    </div>
                    <div>Sets:</div>
                    <div v-if="editMode">
                        Descanço:
                        <input type="number" class="w-20" /> s
                    </div>
                    <div>Descanço: s</div>
                </div>
            </div>
            <div class="green-mid-btn" @click="switchEditor" v-if="editMode">
                <div class="flex-1">
                    <box-icon name="check"></box-icon>
                </div>
            </div>
            <div class="green-end-btn" @click="switchEditor" v-if="!editMode">
                <div class="flex-1">
                    <box-icon name="edit-alt"></box-icon>
                </div>
            </div>
            <div class="red-end-btn" v-if="editMode">
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
    data() {
        return {
            editMode: false
        };
    },
    methods: {
        switchEditor() {
            this.editMode = !this.editMode;
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
.number-head-block {
    @apply p-2 bg-gray-900 rounded-tl-lg rounded-bl-lg text-2xl font-bold;
}
.exercise-info-block {
    @apply flex-1 z-20 p-2 bg-gray-100 text-black;
}
</style>