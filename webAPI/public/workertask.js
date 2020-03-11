let i=1;
while(true){
    i++;
    for(let j=2;j<Math.sqrt(i);j++){
        if(i%j==0) continue;
    }
    if(i>500) postMessage(i);
}