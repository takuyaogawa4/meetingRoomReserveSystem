<script lang="ts">
    // 予約データオブジェクト
    import {type ReserveData} from "$lib/type/reserve";

    let reserveData: ReserveData = {
        reserveId: 0,
        employeeId: 0,
        reserveDate: null,
        reserveRoom: '',
        reserveTime: 0
    };

    let popUp = false;
    let popUp2 = false;
    let alertMessage: boolean = false;
    let reserveDataList: Array<ReserveData> = [];

    // 日付より先に会議室を選択した場合の関数
    async function getMeetingRoom(meetRoom: string) {
        if (reserveData.reserveDate == null) {
            alertMessage = true;
            return false;
        } else {
            reserveData.reserveRoom = meetRoom;
            await findByReserve()
            popUp = true;
            alertMessage = false;
        }
    }

    // 予約確定の関数
    async function insertReserve(reserveData: ReserveData) {
        let loginUserJason = sessionStorage.getItem("loginUser");
        if (loginUserJason != null) {
            reserveData.employeeId = JSON.parse(loginUserJason).employeeId
        } else {
            alert("login!!")
        }
        let insertMessage = await fetch("http://localhost:8080/insertReserve", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reserveData),
        });
        await insertMessage.json();
    }

    // 予約確認の関数
    async function findByReserve() {
        console.log(reserveData)
        let reserveList = await fetch("http://localhost:8080/checkReserve", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reserveData),
        });
        reserveDataList = await reserveList.json();
        console.log(reserveDataList);
        // if(reserveList)

    }

    // 予約確認のループ
    function isReserved(reserveTime: number, reserveList: ReserveData[]) {
        console.log(reserveList)
        console.log(reserveList.some(item => item.reserveTime == reserveTime))
        return reserveList.some(item => item.reserveTime == reserveTime);
    }
</script>

<h1 class="italic text-4xl mb-10">予約ページ</h1>
<!-- 予約時に日付を入力していない場合のアラート -->
{#if alertMessage == true}
    <div role="alert" class="alert alert-error mb-6" on:click={() => alertMessage = false}>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>日付を選択してください。</span>
    </div>
{/if}
<!-- 内容横たて並び -->

<!-- カレンダーで日付を表示 -->
<input type="date" class="input- w-96 px-4 py-4 mb-10" bind:value={reserveData.reserveDate}>
<!-- 会議室の種類 -->
<div class="grid grid-cols-4 mg-1 gap-y-5">
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('A')}>A会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('B')}>B会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('C')}>C会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('D')}>D会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('E')}>E会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('F')}>F会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('G')}>G会議室</button>
    <button class="btn m-1 w-40" on:click={()=>getMeetingRoom('H')}>H会議室</button>
</div>
<!-- 詳細ページ -->
<!-- <button class="border-2 border-current rounded rounded-lg  px-4 py-2 text-current font-black" >詳細ページ</button> -->


<!-- 戻るボタン -->
<a class="btn w-32 h-10  bg-base-200 text-ghost-content hover:bg-base-300 mt-10" style="float: right;"
   href="/home/editpage">戻る</a>

<!-- 時間を決めるポップアップ -->
<!-- ポップアップの内容 -->
<input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={popUp}/>
<div class="modal" role="dialog">
    <!-- popUpのサイズ -->
    <div class="modal-box  w-1/2 max-w-3xl">
        <!-- 予約タイトル -->
        <h3 class="font-bold text-lg">時間指定</h3>
        <!-- 予約ボタン -->
        <div class="grid grid-cols-2 px-10">
            <!-- ifでくくってDBに予約が入っていたらdisableにする -->
            <button disabled="{isReserved(10,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=10,popUp=false,popUp2=true)}>10:00～11:00
            </button>
            <button disabled="{isReserved(11,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=11,popUp=false,popUp2=true)}>11:00～12:00
            </button>
            <button disabled="{isReserved(12,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=12,popUp=false,popUp2=true)}>12:00～13:00
            </button>
            <button disabled="{isReserved(13,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=13,popUp=false,popUp2=true)}>13:00～14:00
            </button>
            <button disabled="{isReserved(14,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=14,popUp=false,popUp2=true)}>14:00～15:00
            </button>
            <button disabled="{isReserved(15,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=15,popUp=false,popUp2=true)}>15:00～16:00
            </button>
            <button disabled="{isReserved(16,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=16,popUp=false,popUp2=true)}>16:00～17:00
            </button>
            <button disabled="{isReserved(17,reserveDataList)}" class="btn btn-wide m-2"
                    on:click={() => (reserveData.reserveTime=17,popUp=false,popUp2=true)}>17:00～18:00
            </button>
        </div>
        <!-- popUpの下部コメント編集部分 -->
        <p class="py-4">空いている時間を選択してください。</p>
        <div class="modal-action">

            <label for="my_modal_6" class="btn">閉じる</label>
        </div>
    </div>
</div>
<!-- 予約確定ウィンドウ -->
<input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={popUp2}/>
<div class="modal" role="dialog">
    <!-- popUpのサイズ -->
    <div class="modal-box  w-2/3 max-w-3xl h-50">
        <!-- 予約タイトル -->
        <h3 class="font-bold text-2xl">この予約を確定しますか？</h3>
        <!-- 予約情報 -->
        <span class="text-lg">予約日付{reserveData.reserveDate}</span>
        <br/>
        <span class="text-lg">予約時間{reserveData.reserveTime}:00～{reserveData.reserveTime + 1}:00</span>

        <!-- 予約ボタン -->
        <div class="modal-action">
            <!-- 確定ボタン -->
            <button class="col-start-5  btn w-32 text-lg" on:click={() => (insertReserve(reserveData),popUp2=false)}>
                確定
            </button>
            <!-- //Todo 送信関数を入れ込む↑ -->
            <!-- キャンセルボタン -->
            <button class="col-start-5  btn w-32 text-lg" on:click={() => (popUp2=false)}>キャンセル</button>
        </div>
    </div>
</div>
<style>
</style>