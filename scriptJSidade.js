function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('Erro, data inserida NÃO VALIDA')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) { 
                //criança
                img.setAttribute('src','imagens2/foto-bebe-m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens2/foto-jovem-m.png')
            }else if(idade < 50) { 
                //adulto
                img.setAttribute('src','imagens2/foto-adulto-m.png')
            } else{ 
                //idoso
                img.setAttribute('src','imagens2/foto-idoso-m.png')
            }
    }  else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) { 
                //criança
                img.setAttribute('src','imagens2/foto-bebe-f.png')
            
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens2/foto-jovem-f.png')
            }else if(idade < 50) { 
                //adulto
                img.setAttribute('src','imagens2/foto-adulto-f.png')
            } else{ 
                //idoso
                img.setAttribute('src','imagens2/foto-idoso-f.png')
            }
       }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
   }
  }