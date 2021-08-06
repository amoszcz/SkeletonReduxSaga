export const waitASecond = async ()=>{
    return new Promise<void>(resolve => {
        setTimeout(()=>{
            resolve();
        },1000)
    })
}