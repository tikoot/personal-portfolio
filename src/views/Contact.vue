<script>
import feather from 'feather-icons';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Tbilisi, Georgia',
					icon: 'map-pin',
					url: ''
				},
				{
					id: 2,
					name: 'tinatinotarashvili99@gmail.com',
					icon: 'mail',
					url: 'mailto:tinatinotarashvili99@gmail.com'
				},
				{
					id: 3,
					name: '+995 555 811 060',
					icon: 'phone',
					url: ''
				},
				{
					id: 4,
					name: 'https://www.linkedin.com/in/tinatin-otarashvili-6a6a8a233/',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/tinatin-otarashvili-6a6a8a233/',
				},
				{
					id: 5,
					name: 'https://github.com/tikoot',
					icon: 'github',
					url:  'https://github.com/tikoot'
				},
				{
					id: 6,
					name: 'download CV',
					icon: 'arrow-down-circle',
					url:  '/files/tinatinOtarashvili.pdf'
				},

			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
	
		<ContactDetails :contacts="contacts" />
	</div>
</template>
