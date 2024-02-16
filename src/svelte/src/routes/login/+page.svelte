<script lang="ts">
    import {goto} from "$app/navigation";


    let employeeName = '';
    let password = '';


    // ログイン関数
    async function handleLoginButtonClick() {
        if (!employeeName || !password || employeeName.trim() === "" || password.trim() === "") {
            alert("ログインIDとパスワードを入力してください。");
            return;
        }
        const response = await fetch("http://localhost:8080/login", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({employeeName, password})
        });

        const result = await response.json();

        if (result.result == 0) {
            alert("ログインに成功しました。");
            sessionStorage.setItem("loginUser", JSON.stringify(result.data))
            goto("/")
        } else {
            alert("ログインに失敗しました。");
        }

    }

    // 新規作成関数
    async function handleCreateButtonClick() {
        if (!employeeName || !password || employeeName.trim() === "" || password.trim() === "") {
            alert("登録するIDとパスワードを入力してください。");
            return;
        }
        const response = await fetch("http://localhost:8080/create", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({employeeName, password})
        });

        const result = await response.json();

        if (result.result == 1) {
            alert("登録が完了しました。");
            // sessionStorage.setItem("loginUser",JSON.stringify(result.data))
            goto("/")
        } else {
            alert("入力したIDは既に存在しております。");
        }

    }

</script>

<!-- 入力項目 -->


<!-- １つの項目はここまで -->


<div role="tablist" class="tabs tabs-bordered">
    <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Login"/>
    <div role="tabpanel" class="tab-content">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Name</span>
            </div>
            <input type="text" bind:value={employeeName} placeholder="Sample"
                   class="input input-bordered w-full max-w-xs" required/>
            <div class="label">

            </div>
        </label>
        <!-- 入力項目 -->
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Password</span>
            </div>
            <input type="text" bind:value={password} placeholder="Password" class="input input-bordered w-full max-w-xs"
                   required/>
            <div class="label">
            </div>
        </label>
        <!-- ログインボタン -->
        <button class="btn btn-active   bg-base-200 hover:bg-base-300" on:click={handleLoginButtonClick}>Login</button>
    </div>
    <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Create" checked/>
    <div role="tabpanel" class="tab-content"><label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">Name</span>
        </div>
        <input type="text" bind:value={employeeName} placeholder="Sample" class="input input-bordered w-full max-w-xs"
               required/>
        <div class="label">
        </div>
    </label>
        <!-- 入力項目 -->
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Password</span>
            </div>
            <input type="text" bind:value={password} placeholder="Password" class="input input-bordered w-full max-w-xs"
                   required/>
            <div class="label">
            </div>
        </label>
        <!-- ログインボタン -->
        <button class="btn btn-active   bg-base-200 hover:bg-base-300" on:click={handleCreateButtonClick}>Create
        </button>
    </div>
</div>


<style>
</style>