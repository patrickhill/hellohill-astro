---
layout: "../../layouts/casestudy.astro"
setup: |
  import Button from '../../components/Button'
  import { roundedClassNames } from "../../components/roundedClassNames"
  import ContentCard from "../../components/ContentCard"
  import ImageBlock from "../../components/ImageBlock"
title: "Zenti"
desc: "A simple meditation timer"
heroImageUrl: "https://res.cloudinary.com/dl4btvfxp/image/upload/w_620,dpr_2/v1648307444/zenti/zenti_20220326-110728_gmtkj9.jpg"
heroAlt: "Zenti Timer Screenshot"
tags:
  - design
  - dev
  - branding
publishDate: "2022-04-03"
---

<div class="mx-auto w-full max-w-[1182px]">
  <ImageBlock
    src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656172934/zenti/zenti-hero-20220625-115844_anxfhr.jpg"
    alt="zenti app hero image"
    className="aspect-4/3"
  />
</div>

<ContentCard id="intro">
  <h2 class="mt-0">Intro</h2>
  <hr class="border-gray-300" />
  <h3>Project</h3>
  <p>
    Zenti Meditation Timer. Available in the <a class="text-sky-500 underline hover:text-sky-600" href="https://apps.apple.com/us/app/zenti-meditation-timer/id1587887322">AppStore</a>.
  </p>

  <h3>The Challenge</h3>
  <p>
    Create a meditation app that prioritizes ease-of-use while providing options for detailed customization.
  </p>

  <h3>Details</h3>
  <div
    class="flex flex-col gap-8 rounded-b-lg bg-gray-100 p-32 sm:grid sm:gap-16 sm:rounded-b-2xl"
    style={{ gridTemplateColumns: "auto auto" }}
  >
    <h4>Resources:</h4>
    <div class="space-y-8">
      <p>1 person team</p>
    </div>
    <h4>Timeline:</h4>
    <p>3-4 months</p>
    <h4>My Role:</h4>
    <p>Product Design, UI Design, Engineering</p>
  </div>
</ContentCard>

<div class=`mx-auto w-full max-w-[1182px] ${roundedClassNames} bg-gray-700 bg-opacity-70 border border-gray-600 text-center pt-64 lg:pt-128 px-32`>

<h2 class="text-3xl font-bold text-white">Wait, but why?</h2>
<p class="text-gray-500 font-light text-lg pt-8 pb-32 lg:pb-64">Aren’t there enough meditation apps out&nbsp;there?</p>

<img src="https://res.cloudinary.com/dl4btvfxp/image/upload/v1656174108/zenti/zenti-competitors-20220625-113818_twshgs.png" alt="zenti competitor screenshots" class="aspect-[10/3]" />

</div>
