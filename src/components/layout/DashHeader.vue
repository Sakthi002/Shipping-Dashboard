<template>

	<header class="main-header">

		<span class="logo-mini">

			<a href="/"><img src="/static/img/logo.svg" alt="Logo" class="img-responsive center-block logo"></a>
		</span>

		<nav class="navbar navbar-static-top" role="navigation">
		
			<a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
		
				<span class="sr-only">Toggle navigation</span>
			</a>

			<div class="navbar-custom-menu">
		
				<ul class="nav navbar-nav">

					<user-menu :user="user"></user-menu>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>

	import UserMenu from './UserMenu'

	export default {
	
		name: 'DashHeader',
		
		components: {
			UserMenu
		},
		
		props: ['user']
};
</script>
