<template>
	
	<li class="dropdown user user-menu">
	
		<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
	
			<img :src="user.avatar" class="user-image" alt="User Image">
	
			<span class="hidden-xs">{{user.displayName}}</span>
		</a>
	</li>
</template>

<script>
export default {
	
	name: 'UserMenu',
	
	props: ['user']
};
</script>
