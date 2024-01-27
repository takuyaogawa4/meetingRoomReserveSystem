<script lang="ts">
  
let loginId = '';
let loginPassword = '';

async function handleLoginButtonClick() {
  if(!loginId || !loginPassword||loginId.trim() ==="" ||loginPassword.trim() ===""){
        alert("ログインIDとパスワードを入力してください。");
        return;
      }
    const response = await fetch("http://localhost:8080/login", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({loginId, loginPassword}),
    });

    const result = await response.json();
    if(!result) {
      alert("ログインに失敗しました。");
    }else{
      alert("ログインに成功しました。");
    }
  }

</script>

<h1>Login Page</h1>
<!-- 入力項目 -->
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Name</span>
  </div>
  <input type="text" bind:value={loginId} placeholder="サンプルネーム" class="input input-bordered w-full max-w-xs" required />
  <div class="label">

  </div>
</label>
<!-- １つの項目はここまで -->
<!-- 入力項目 -->
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Password</span>
  </div>
  <input type="text"  bind:value={loginPassword} placeholder="Password" class="input input-bordered w-full max-w-xs" required/>
  <div class="label">
  </div>
</label>
<!-- ログインボタン -->
<button class="btn btn-active   bg-base-200 hover:bg-base-300" on:click={handleLoginButtonClick}>Login</button>
<!-- １つの項目はここまで -->
<style>
</style>