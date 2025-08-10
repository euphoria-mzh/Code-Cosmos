---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
gitChangelog: false
---

<script setup>
import MNavLinks from '/nav/components/MNavLinks.vue'

import { NAV_DATA } from '/nav/data'
</script>
<style src="/nav/index.scss"></style>

# 导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
