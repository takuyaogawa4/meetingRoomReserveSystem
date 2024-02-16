<script>

    import {goto} from "$app/navigation";
</script>
<h1 class="italic text-6xl mb-10">予約システム</h1>
<!-- 項目横並び -->
<div class=" grid grid-cols-[repeat(auto-fill,min(25rem))] gap-16 ">
    <!-- 項目 -->
    <a class="card w-96 h-64 bg-base-200 text-ghost-content hover:bg-base-300 " href="editpage/basic">
        <div class="card-body ">
            <h2 class="card-title italic text-2xl">Reserve page</h2>
            <p>会議室を予約する</p>
            <div class="card-actions justify-end">
                <button class="border-2 border-current  rounded rounded-lg  px-4 py-2 text-current font-black">
                    詳細ページ
                </button>
            </div>
        </div>
    </a>
    <!-- 項目 -->
</div>

<style>

    a:hover button {
        background-color: black;
        color: white;

    }

</style>