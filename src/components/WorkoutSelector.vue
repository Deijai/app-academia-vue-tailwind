<template>
    <div class="box">
        <div class="title">Treinos</div>
        <div class="workouts-grid">
            <div class="button">A</div>
            <div class="button">A</div>
            <div class="button">A</div>
            <div class="button">A</div>
            <div class="button">A</div>
            <div class="button">A</div>
            <div class="button">A</div>
            <div class="button">A</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WorkoutSelector",
    props: ["workouts"]
};
</script>

<style lang="postcss" scoped>
.box {
    @apply p-3 text-center items-center border border-black;
}
.title {
    @apply flex-1 m-2 text-center font-bold;
}
.workouts-grid {
    @apply m-5 grid gap-2 grid-cols-3 border border-black;
}
.button {
    @apply p-4 rounded-xl bg-gray-500 hover:bg-gray-400 transform ease-in hover:scale-105 transition duration-100 font-bold text-gray-100 hover:shadow-lg;
}
</style>