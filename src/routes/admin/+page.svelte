<script>
    import { page } from '$app/stores';
    import { signIn, signOut } from '@auth/sveltekit/client';
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';

    let messages = [];
    let loading = true;

    async function loadMessages() {
        loading = true;
        const { data, error } = await supabase
            .from('contacts')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (!error) messages = data;
        loading = false;
    }

    async function deleteMessage(id) {
        if (!confirm('Are you sure you want to delete this signal?')) return;
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        if (!error) loadMessages();
    }

    onMount(() => {
        if ($page.data.session) {
            loadMessages();
        }
    });
</script>

<div class="min-h-screen bg-void text-paper font-mono p-8">
    <div class="max-w-4xl mx-auto">
        <header class="flex justify-between items-center border-b border-ash/20 pb-4 mb-8">
            <h1 class="text-2xl text-crimson uppercase tracking-widest">// ADMIN_TERMINAL</h1>
            {#if $page.data.session}
                <button on:click={() => signOut()} class="text-xs border border-ash/30 px-4 py-2 hover:bg-white/10 transition-colors">
                    [ LOGOUT: {$page.data.session.user.email} ]
                </button>
            {:else}
                <button on:click={() => signIn('google')} class="border border-crimson text-crimson px-6 py-2 hover:bg-crimson hover:text-white transition-all duration-300">
                    [ LOGIN_TO_PROCEED ]
                </button>
            {/if}
        </header>

        {#if $page.data.session}
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-ash text-sm">> LOGGED_SIGNALS</h2>
                    <button on:click={loadMessages} class="text-xs text-crimson hover:underline">REFRESH_LOGS</button>
                </div>

                {#if loading}
                    <p class="animate-pulse text-ash">SCANNING_DATABASE...</p>
                {:else if messages.length === 0}
                    <p class="text-ash border border-ash/20 p-8 text-center">NO_SIGNALS_DETECTED</p>
                {:else}
                    <div class="grid gap-4">
                        {#each messages as msg}
                            <div class="border border-ash/20 p-4 relative group hover:border-crimson/50 transition-colors">
                                <div class="flex justify-between mb-2">
                                    <span class="text-crimson font-bold">{msg.name}</span>
                                    <span class="text-[10px] text-ash">{new Date(msg.created_at).toLocaleString()}</span>
                                </div>
                                <div class="text-xs text-ash mb-2 italic">&lt;{msg.email}&gt;</div>
                                <div class="text-sm border-l border-crimson/30 pl-4 py-2 bg-white/5">{msg.message}</div>
                                
                                <button 
                                    on:click={() => deleteMessage(msg.id)}
                                    class="absolute top-4 right-4 text-[10px] text-ash hover:text-crimson opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    [ DELETE ]
                                </button>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        {:else}
            <div class="border border-ash/20 p-24 text-center">
                <p class="text-crimson animate-pulse mb-4">ACCESS_RESTRICTED</p>
                <p class="text-xs text-ash">PLEASE_AUTHENTICATE_WITH_AUTHORIZED_IDENTITY</p>
            </div>
        {/if}
    </div>
</div>
