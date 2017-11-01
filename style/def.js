
    var ones = document.querySelectorAll('.one')
    //console.log(ones)
    var uls = document.querySelector('.uls')
    var lis =uls.querySelectorAll('li')
    for(var i=0;i<lis.length;i++){
        lis[i].index =i
        lis[i].onclick = function(){
            //console.log(this.index)
            for(var j=0;j<ones.length;j++){
                ones[j].className='one'
            }
            ones[this.index].className='one back'
        }
    }