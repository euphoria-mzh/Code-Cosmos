---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
gitChangelog: false
articleUpdate: false,
title: 导航
titleTag: 推荐
top: true
sticky: 10
coverImg: /blog/21.png
description: "常用的网站及工具"
---

<script setup>
import MNavLinks from '/nav/components/MNavLinks.vue'

import { NAV_DATA } from '/nav/data'
</script>
<style src="/nav/index.scss"></style>

# 导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
