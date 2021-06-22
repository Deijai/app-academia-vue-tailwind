<template>
    <div
        class="flex justify-center text-white transform ease-in hover:scale-105 transition duration-100"
    >
        <form
            class="flex justify-center text-white transform ease-in hover:scale-105 transition duration-100"
        >
            <div class="p-2 bg-gray-900 rounded-tl-lg rounded-bl-lg text-2xl font-bold">
                <div>
                    <input />
                </div>
                <div>number</div>
            </div>
            <div class="flex-1 z-20 p-2 bg-gray-100 text-black">
                <div class="p-2 flex-1">
                    <div>
                        <input />
                    </div>
                    <div class="text-md font-bold flex-1">name</div>
                    <div>
                        Peso:
                        <input /> kg
                    </div>
                    <div>Peso: kg</div>
                    <div>
                        Repetições:
                        <input />
                    </div>
                    <div>Repetições:</div>
                    <div>
                        Sets:
                        <input />
                    </div>
                    <div c>Sets:</div>
                    <div>
                        Descanço:
                        <input id="{id}" /> s
                    </div>
                    <div>Descanço: s</div>
                </div>
            </div>
            <div
                class="lex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg"
            >
                <div class="flex-1">
                    <!-- <CheckIcon width={30} height={30} /> -->
                    checkincon
                </div>
            </div>
            <div
                class="flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black"
            >
                <div class="flex-1">
                    <!-- <PencilIcon height={20} /> -->
                    pencilicon
                </div>
            </div>
            <div
                class="flex justify-center items-center p-2 bg-red-100 hover:bg-red-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg"
            >
                <div class="flex-1">
                    <!-- <TrashIcon width="{20}" height="{20}" /> -->
                    trashicon
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Exercise"
};
</script>

<style>
</style>