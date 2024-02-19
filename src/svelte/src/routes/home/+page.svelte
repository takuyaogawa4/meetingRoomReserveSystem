<script>
</script>
<div>
<section
  class="h-[80vh] shrink-0 bg-secondary-800 flex flex-col items-center justify-center"
><div class="glass mb-5 flex text-5xl font-bold h-96 w-1/2 rounded-lg items-center justify-center text-center">
タイトル
    </div>
  <video
    class="absolute w-full h-full object-cover -z-10"
    muted
    autoplay
    loop
    playsinline
    disablepictureinpicture
  >
    <source src="/SampleVideo.webm" type="video/webm" />
  </video>
</section>

</div>
<div class="card w-96 bg-primary text-primary-content"></div>
<div class="card-body">
  <h2 class="card-title">Card title!</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end"></div>
</div>

<style>
  video {
    filter: opacity(70%);
    filter: brightness(40%);
    position: fixed;
  }
</style>
