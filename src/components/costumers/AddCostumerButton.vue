<template>
    <button @click="showModal(modalId)" id="addButton"
        class="hidden xs:inline-block shrink-0 space-x-2 px-3 py-1 text-xl rounded bg-purple-500 hover:bg-purple-600 text-neutral-100 transition-colors">
        <p class="inline-block text-lg font-medium">
            Adicionar cliente
        </p>
        <font-awesome-icon icon="fa-solid fa-plus" class="inline-block" />
    </button>

    <button @click="showModal(modalId)" class="xs:hidden fixed bottom-3 right-3 rounded-full border-2 bg-white w-14 h-14">
        <font-awesome-icon icon="fa-solid fa-circle-plus" class="text-blue-600 h-full aspect-square" />
    </button>
</template>

<script setup lang="ts">
import showModal from '@/util/showModal';
const modalId = 'addCostumerModal'
</script>