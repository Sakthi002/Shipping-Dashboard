<template>

	<aside class="main-sidebar">

		<section class="sidebar">

			<div class="user-panel">

				<div class="pull-left image">

					<img :src="user.avatar" />
				</div>

				<div class="pull-left info">

					<div>

						<p class="white">{{user.displayName}}</p>
					</div>
					<a href="javascript:;">
						<i class="fa fa-circle text-success"></i> Online
					</a>
				</div>
			</div>

			<sidebar-menu />

		</section>
	</aside>
</template>
<script>

	import SidebarMenu from './SidebarMenu'

	export default {
		
		name: 'Sidebar',
		
		props: ['user'],
		
		components: { SidebarMenu },	
	};

</script>
<style scope="local">
.user-panel .image img {
	border-radius: 50%;
}
</style>
