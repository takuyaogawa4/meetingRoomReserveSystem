<script lang="ts">
    import {goto} from "$app/navigation";

    let employeeName = '';
    let password = '';

    let createEmployeeName = '';
    let createPassword = '';

    let loginEmployeeName = '';
    let loginPassword = '';

    // ログイン関数
    async function handleLoginButtonClick() {
        if (!loginEmployeeName || !loginPassword || loginEmployeeName.trim() === "" || loginPassword.trim() === "") {
            alert("ログインIDとパスワードを入力してください。");
            return;
        }
        employeeName = loginEmployeeName;
        password = loginPassword;
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
            goto("/home")
        } else {
            alert("ログインに失敗しました。");
        }
    }

    // 新規作成関数
    async function handleCreateButtonClick() {
        if (!createEmployeeName || !createPassword || createEmployeeName.trim() === "" || createPassword.trim() === "") {
            alert("ログインIDとパスワードを入力してください。");
            return;
        }
        employeeName = createEmployeeName;
        password = createPassword;

        const response = await fetch("http://localhost:8080/create", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({employeeName, password})
        });

        const result = await response.json();

        if (result.result == 0) {
            alert("登録が完了しました。");
            goto("/home")
        } else {
            alert("ログインIDは既に使われております。");
        }
    }

</script>

<div role="tablist" class="tabs tabs-bordered">
    <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Login"/>
    <div role="tabpanel" class="tab-content">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Name</span>
            </div>
            <input type="text" bind:value={loginEmployeeName} placeholder="Sample"
                   class="input input-bordered w-full max-w-xs" required/>
            <div class="label">

            </div>
        </label>
        <!-- 入力項目 -->
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Password</span>
            </div>
            <input type="text" bind:value={loginPassword} placeholder="Password"
                   class="input input-bordered w-full max-w-xs" required/>
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
        <input type="text" bind:value={createEmployeeName} placeholder="Sample"
               class="input input-bordered w-full max-w-xs" required/>
        <div class="label">
        </div>
    </label>
        <!-- 入力項目 -->
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Password</span>
            </div>
            <input type="text" bind:value={createPassword} placeholder="Password"
                   class="input input-bordered w-full max-w-xs" required/>
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