<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-yellow text-black">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>FitNation</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above bordered>
      <q-list>
        <q-item v-for="item in menu" :key="item.to"
                clickable :to="item.to" exact>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const menu = [
  { label: 'Početna', to: '/' },
  { label: 'Registracija i prijava', to: '/Registracijaiprijava' },
  { label: 'Članarine', to: '/clanarine' },
  { label: 'Osobni podaci', to: '/osobnipodaci' },
  { label: 'Aktivnosti', to: '/aktivnosti' },
  { label: 'Termini', to: '/termini' },
  { label: 'Treneri', to: '/treneri' },
  { label: 'Rezervacije', to: '/rezervacije' },
  { label: 'Fitness napredak', to: '/napredak' },
  { label: 'Feedback', to: '/feedback' },
];
</script>
