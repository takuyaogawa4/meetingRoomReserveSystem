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
            goto("/home")
        } else {
            alert("ログインに失敗しました。");
        }
    }
</script>
<h1>Logout page</h1>

<style>
</style>