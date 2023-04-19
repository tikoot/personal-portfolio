<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="mt-12 "
	>
		
		<div class="text-left pt-[40px]">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				Hello, I am Tinatin
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				A Full-Stack Web Developer 
			</p>
			<p class="text-ternary-dark dark:text-gray-400 pt-[20px] font-general-medium sm:text-left  text-center">As a developer my experience includes developing web applications, and creating responsive, pixel-perfect, and user-friendly interfaces.
				<br class="hidden sm:block">	
				I have worked extensively with HTML, CSS, SCSS, TailwindCSS, JavaScript, Vue.
				<br class="hidden sm:block">	
					I also have experience working with Laravel, Pinia/Vuex, Vuetify, Vee-Validate, JWT Authentication, Laravel Socialite, Swagger, MySQL / SQLite, and many other tools.
					<br class="hidden sm:block">	
					At this moment I'm working as a shopify front-end developer, so I have experience with the shopify template language.
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="tinatinOtarashvili.pdf"
					href="/files/tinatinOtarashvili.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Download CV</span
					></a
				>
			</div>
		</div>

		
	</section>
</template>

<style scoped></style>
