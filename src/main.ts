import Alpine from 'alpinejs';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div x-data="{
		cold: true,
		counter: 0
	}">
		<main :class="{ 'bg-blue-500': cold, 'bg-yellow-500': !cold}" class="h-screen p-4 grid grid-rows-2 place-content-center gap-2">
			<div class="grid place-content-end gap-2">
				<h1 class="text-center text-xl text-black">This is empty AlpineJS + TailwindCSS project</h1>
				<button x-on:click="cold = !cold; counter++" class="p-2 md:p-5 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-400 hover:dark:border-gray-500 border-solid border-2 rounded-2xl shadow-2xl">
				
					<h2 x-show="cold" class="text-3xl md:text-5xl text-center leading-[2.5rem] transition-all">
						<span class="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">Hello from mountains</span> 🥶</h2>
					<h2 x-show="!cold" class="text-3xl md:text-5xl text-center leading-[2.5rem] transition-all">
						<span class="text-transparent bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text">Hello from desert</span> 🥵</h2>
				</button>
			</div>
	
			<div>
				<template x-if="counter > 0">
					<div class="w-fit mx-auto bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-solid border-2 rounded-2xl">
						<p :class="{ 'text-transparent bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text': counter % 2 == 0, 'text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text': counter % 2 != 0}" class="p-2 text-center cursor-default shadow-2xl">BTW You clicked <strong x-text="counter"></strong> times</p>
					</div>
				</template>
			</div>
		</main>
	</div>
`

window.Alpine = Alpine;
Alpine.start();

