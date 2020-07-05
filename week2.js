function validate() {
    console.log('in validate')
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    pno = document.getElementById('pno').value
    let err = ''
    if(Number(name[0]) in [0,1,2,3,4,5,6,7,8,9]){
        err+='-Name can not start with numbers.\n'
    }
    if(String(pno).length != 10){
        err+='-Phone Number must contain 10 digits.\n'
    }
    if(! (String(email).includes('@') && String(email).includes('.')) ){
        err+='-email must contain "@" and "." in it.\n'
    }

    if (err != ''){
        alert(err)
        return 'VALIDATION ERROR: '+ err
    }else{
        alert('validation success')
        return 'validation success';
    }
    
}

function isPallindrome() {
    var s = String(document.getElementById('input').value)
    var s_r = s.split('').reverse().join('')
    alert(s == s_r)
    return s === s_r
}

function isAnagram() {
    var words = String(document.getElementById('sentence').value)
    var word = String(document.getElementById('word').value).toLowerCase()
    
    words = words.replace(/\s+/g,'').toLowerCase().split('').sort().join('')
    word = word.split('').sort().join('')
    alert(word === words)
    
    return word === words
}

function winnerGame(){
    n1 = document.getElementById('n1').value
    n2 = document.getElementById('n2').value
    g1 = Number(n1) % 3
    g2 = Number(n2) % 3
    groups = {
        '0':'Human',
        '1':'Nuclear Bomb',
        '2':'Cockroach'
        
    }
    var winner = '';
    alert(groups[String(g1)]+' Vs '+groups[String(g2)])
    if( (g1 == 1 && g2 == 0) || (g1 == 0 && g2 == 1) ){
        winner = groups['1']
    }
    else if( (g1 == 1 && g2 == 2) || (g1 == 2 && g2 == 1) ){
        winner = groups['2']
    }
    else if ( (g1 == 0 && g2 == 2) || (g1 == 2 && g2 == 0) ){
        winner = groups['0']
    }
    else{
        winner = 'TIE'
    }
    alert(winner)
    return winner
}