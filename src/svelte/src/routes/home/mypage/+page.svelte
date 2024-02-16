<script lang="ts">

    //login情報取得 情報がある場合、予約一覧取得　ない場合、ログインしていない旨を表示
    import {onMount} from "svelte";
    import {type ReserveData} from "$lib/type/reserve";

    let popUp = false;
    let reserveList: ReserveData[] = [];
    let selectedItem: ReserveData;
    onMount(async () => {
        let loginUserJson = sessionStorage.getItem("loginUser");
        if (loginUserJson !== null) {
            let employeeId = JSON.parse(loginUserJson).employeeId;
            let response = await fetch(`http://localhost:8080/getReserve/${employeeId}`)
            console.log(response)
            reserveList = await response.json();

        }

    });

    function selectItem(item: ReserveData) {
        selectedItem = item;
    }

    function formatDate(dateString: string | null) {
        let target: string = "";
        if (dateString != null) {
            let date: Date = new Date(dateString);
            target = (date.getMonth() + 1) + "月" + date.getDate() + "日";
        }
        return target;
    }

    function deleteReserve(reserveId: number) {
        // 予約を削除するAPIエンドポイントのURLを作成

        let deleteUrl = `http://localhost:8080/deleteReserve/${reserveId}`;

        // DELETEリクエストを送信して予約を削除
        fetch(deleteUrl, {
            method: 'GET'
        }).then(response => {
            if (response.ok) {
                // 予約が削除されたら、reserveListからその予約を削除する
                // reserveList = reserveList.filter(reserve => loginUser.reserveId !== reserveId);
                console.log("Reservation deleted successfully.");
            } else {
                console.error("Failed to delete reservation.");
            }
        }).catch(error => {
            console.error("Error deleting reservation:", error);
        });
        popUp = false;
        // リダイレクトを行う
        window.location.href = "http://localhost:8080/home/mypage";
    }

</script>
{#if reserveList.length > 0}
    <table class="table content-center">
        <thead>
        <tr>
            <th>Room</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
        </thead>
        <tbody>
        {#if (reserveList != null && reserveList.length != 0)}
            {#each reserveList as reserveLists}
                <tr>
                    <td>{reserveLists.reserveRoom}会議室</td>
                    <td>{formatDate(reserveLists.reserveDate)}</td>
                    <td>{reserveLists.reserveTime}時-{reserveLists.reserveTime + 1}時</td>
                    <td>
                        <button class="border-2 border-current rounded rounded-lg font-semibold place-items-center px-4 py-1 text-current hover:bg-black hover:text-white"
                                on:click={() => (popUp=true,selectItem(reserveLists))}>削除
                        </button>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
{:else}
    <p>No Reservations</p>
{/if}
<input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={popUp}/>
<div class="modal" role="dialog">
    <!-- popUpのサイズ -->
    <div class="modal-box  w-2/3 max-w-3xl h-50">
        <!-- 予約タイトル -->
        <h3 class="font-bold text-2xl">この予約を削除しますか？</h3>
        <!-- 予約情報 -->
        {#if selectedItem != null}
            <span class="text-lg">予約日付:{selectedItem.reserveDate}</span>
            <span class="text-lg">予約時間{selectedItem.reserveTime}:00-{selectedItem.reserveTime + 1 }:00</span>
            <div class="modal-action">
                <!-- 確定ボタン -->
                <button class="col-start-5  btn w-32 text-lg" on:click={() => deleteReserve(selectedItem.reserveId)}>
                    確定
                </button>
                <button class="col-start-5  btn w-32 text-lg " on:click={() => (popUp = false)}>キャンセル</button>
            </div>
        {/if}
    </div>
</div>

<style>
</style>