<script lang="ts">
    import {goto} from "$app/navigation";

    let employeeName = '';
    let password = '';

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

</script>

<h1>Create Page</h1>
<!-- 入力項目 -->
<label class="form-control w-full max-w-xs">
    <div class="label">
        <span class="label-text">Name</span>
    </div>
    <input type="text" bind:value={employeeName} placeholder="Name" class="input input-bordered w-full max-w-xs"
           required/>
    <div class="label">
    </div>
</label>
<!-- １つの項目はここまで -->
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
<button class="btn btn-active   bg-base-200 hover:bg-base-300" on:click={handleLoginButtonClick}>Create</button>
<style>
</style>