<!-- components/portfolio-menu.vue -->

<template>
	<ul class="menu filter">
		<li class="selected">
			<a href="#" data-filter="*">All</a>
		</li>
		<li>
			<a href="#" data-filter=".motion">Motion</a>
		</li>
		<li>
			<a href="#" data-filter=".code">Code</a>
		</li>
	</ul>
</template>

<style>
.filter a:hover {
text-decoration: underline;
}
.selected{ text-decoration: none; background-color:orange; color:white; }
</style>

