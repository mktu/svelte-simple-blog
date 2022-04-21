<script lang="ts">
	import { getContext } from 'svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import IconButton from '$lib/buttons/IconButton.svelte';
	import Popup from './Popup.svelte';
	const { open, close } = getContext('simple-modal');
	const showSurprise = () => open(Popup, { onClose: close });
</script>

<IconButton onClick={showSurprise}><MenuIcon width={48} height={48} /></IconButton>
