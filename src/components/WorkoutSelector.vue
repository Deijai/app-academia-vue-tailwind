<template>
    <div class="p-3 text-center items-center">
        <div class="flex-1 m-2 text-center font-bold">Treinos</div>
        <div class="m-5 grid grid-cols-3 gap-3 flex-grow justify-center items-center">
            <div key="{workout.id}" class="flex items-center justify-center">
                <div
                    class="flex-initial p-4 rounded-xl bg-gray-500 hover:bg-gray-400 transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg"
                >A</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WorkoutSelector"
};
</script>

<style>
</style>