<script>
    import user from '../user';
    let employeeName = '';
    let password = '';
    let currentError = '';

    const login =()=>{
        fetch('URL',{
            method:'POST',
            headers:{
                'Content-Type':'application'
            },
            body:JSON.stringify({employeeName:employeeName,password:password})
        })
            .then((res)=>{
                if(res.status < 299) return res.json()
                if(res.status < 300) currentError ="Something not quite right with server response";
            })
            .then((data)=>{
                if(data) user.update((val:Object)=>val = {...data})
            })
            .catch((error)=>{
                currentError = error;
                console.log("Error loggin in:",error)
            })
    }

</script>

<form on:submit|preventDefault={login}>

    <div>
        <label for="employeeName">employeeName</label>
        <input type="text" id="employeeName" bind:value={employeeName}/>
    </div>
    <div>
        <label for="password">password</label>
        <input type="text" id="password" bind:value={password}/>
    </div>
    <button type="submit">submit</button>


</form>